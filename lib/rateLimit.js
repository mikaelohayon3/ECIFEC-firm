/**
 * Rate limiting en mémoire avec sliding window
 * Limite les requêtes par IP pour prévenir le spam et les abus
 */

// Stockage en mémoire des tentatives par IP
const rateLimitStore = new Map();

// Configuration du rate limiting
const RATE_LIMIT_CONFIG = {
  // Fenêtre de temps en millisecondes (1 heure)
  windowMs: 60 * 60 * 1000,

  // Nombre maximum de requêtes par fenêtre
  maxRequests: 5,

  // Temps de nettoyage du cache (toutes les 10 minutes)
  cleanupInterval: 10 * 60 * 1000,
};

// Nettoyage périodique des entrées expirées
let cleanupTimer;
function startCleanup() {
  if (cleanupTimer) return;

  cleanupTimer = setInterval(() => {
    const now = Date.now();
    const expiredKeys = [];

    for (const [key, data] of rateLimitStore.entries()) {
      // Si toutes les tentatives sont expirées
      const validAttempts = data.attempts.filter(
        timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
      );

      if (validAttempts.length === 0) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => rateLimitStore.delete(key));

    if (process.env.NODE_ENV === 'development') {
      console.log(`[RateLimit] Cleaned ${expiredKeys.length} expired entries`);
    }
  }, RATE_LIMIT_CONFIG.cleanupInterval);
}

// Démarrer le nettoyage automatique
startCleanup();

/**
 * Vérifie si une IP a dépassé la limite de requêtes
 * @param {string} ip - Adresse IP du client
 * @returns {Object} - { allowed: boolean, remaining: number, resetTime: number }
 */
export function checkRateLimit(ip) {
  const now = Date.now();
  const key = `contact:${ip}`;

  // Récupérer ou créer l'entrée pour cette IP
  let ipData = rateLimitStore.get(key);

  if (!ipData) {
    ipData = {
      attempts: [],
      firstAttempt: now,
    };
  }

  // Filtrer les tentatives dans la fenêtre de temps
  ipData.attempts = ipData.attempts.filter(
    timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
  );

  // Calculer le nombre de requêtes restantes
  const currentCount = ipData.attempts.length;
  const remaining = Math.max(0, RATE_LIMIT_CONFIG.maxRequests - currentCount);

  // Calculer le temps de réinitialisation (plus ancienne tentative + windowMs)
  const oldestAttempt = ipData.attempts[0] || now;
  const resetTime = oldestAttempt + RATE_LIMIT_CONFIG.windowMs;

  // Vérifier si la limite est dépassée
  const allowed = currentCount < RATE_LIMIT_CONFIG.maxRequests;

  if (allowed) {
    // Ajouter la nouvelle tentative
    ipData.attempts.push(now);
    rateLimitStore.set(key, ipData);
  }

  return {
    allowed,
    remaining: allowed ? remaining - 1 : 0,
    resetTime,
    retryAfter: allowed ? 0 : Math.ceil((resetTime - now) / 1000),
  };
}

/**
 * Réinitialise le compteur pour une IP (utilisé pour les tests ou en cas de besoin)
 * @param {string} ip - Adresse IP à réinitialiser
 */
export function resetRateLimit(ip) {
  const key = `contact:${ip}`;
  rateLimitStore.delete(key);
}

/**
 * Obtient les statistiques du rate limiting
 * @returns {Object} - Statistiques globales
 */
export function getRateLimitStats() {
  return {
    totalIPs: rateLimitStore.size,
    config: RATE_LIMIT_CONFIG,
  };
}
