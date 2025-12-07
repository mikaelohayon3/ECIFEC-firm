/**
 * Rate limiting en mémoire avec sliding window (5 req/heure/IP)
 *
 * POURQUOI sliding window: limite stricte sur période glissante vs fixed window
 * (fixed window permet burst à la limite des fenêtres)
 *
 * LIMITATIONS: Stockage mémoire (perdu au restart), pas adapté multi-instance
 * Pour scale horizontal: migrer vers Redis (voir RATE_LIMITING.md)
 *
 * @module rateLimit
 */

/**
 * Stockage Map<'contact:${ip}', {attempts: timestamp[], firstAttempt: timestamp}>
 * @type {Map<string, {attempts: number[], firstAttempt: number}>}
 */
const rateLimitStore = new Map();

/**
 * Config: 5 req/heure, nettoyage toutes les 10min
 * @constant
 */
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 60 * 1000,
  maxRequests: 5,
  cleanupInterval: 10 * 60 * 1000,
};

let cleanupTimer;

/**
 * Nettoyage périodique (évite memory leak Map)
 * Supprime IPs dont toutes tentatives sont expirées
 * @private
 */
function startCleanup() {
  if (cleanupTimer) return;

  cleanupTimer = setInterval(() => {
    const now = Date.now();
    const expiredKeys = [];

    for (const [key, data] of rateLimitStore.entries()) {
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

startCleanup();

/**
 * Vérifie rate limit avec sliding window et enregistre tentative si autorisée
 *
 * @param {string} ip - IP du client (x-forwarded-for ou x-real-ip)
 * @returns {{allowed: boolean, remaining: number, resetTime: number, retryAfter: number}}
 *
 * @example
 * const result = checkRateLimit(ip);
 * if (!result.allowed) {
 *   return NextResponse.json({ error: 'Too many requests' }, {
 *     status: 429,
 *     headers: { 'Retry-After': result.retryAfter.toString() }
 *   });
 * }
 */
export function checkRateLimit(ip) {
  const now = Date.now();
  const key = `contact:${ip}`;
  let ipData = rateLimitStore.get(key);

  if (!ipData) {
    ipData = { attempts: [], firstAttempt: now };
  }

  // Sliding window: filtre tentatives dans fenêtre active
  ipData.attempts = ipData.attempts.filter(
    timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
  );

  const currentCount = ipData.attempts.length;
  const remaining = Math.max(0, RATE_LIMIT_CONFIG.maxRequests - currentCount);
  const oldestAttempt = ipData.attempts[0] || now;
  const resetTime = oldestAttempt + RATE_LIMIT_CONFIG.windowMs;
  const allowed = currentCount < RATE_LIMIT_CONFIG.maxRequests;

  if (allowed) {
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
 * Reset compteur pour IP (usage: tests, admin pour débloquer user)
 * ATTENTION: Ne pas exposer via API publique
 * @param {string} ip
 */
export function resetRateLimit(ip) {
  const key = `contact:${ip}`;
  rateLimitStore.delete(key);
}

/**
 * Stats globales (usage: monitoring, debug, admin dashboard)
 * ATTENTION: Ne pas exposer via API publique
 * @returns {{totalIPs: number, config: typeof RATE_LIMIT_CONFIG}}
 */
export function getRateLimitStats() {
  return {
    totalIPs: rateLimitStore.size,
    config: RATE_LIMIT_CONFIG,
  };
}
