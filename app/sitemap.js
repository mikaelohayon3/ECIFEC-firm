export default function sitemap() {
  const baseUrl = 'https://ecifec.com';
  const lastModified = new Date();

  // Services slugs
  const services = [
    'creation',
    'comptabilite',
    'fiscal',
    'social',
    'juridique',
    'audit',
    'management',
    'finance',
    'procedure-collective',
    'mission-ponctuelle',
  ];

  // Secteurs slugs
  const secteurs = [
    'btp',
    'commerciaux',
    'transport',
    'liberales',
    'services-entreprises',
    'services-particuliers',
  ];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pourquoi-nous-choisir`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/secteurs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources/calendrier`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ressources/simulateurs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ressources/structure-service`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Services pages
  const servicesPages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Secteurs pages
  const secteursPages = secteurs.map((slug) => ({
    url: `${baseUrl}/secteurs/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Secteurs autres page
  const secteursAutres = {
    url: `${baseUrl}/secteurs/autres`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  };

  return [
    ...staticPages,
    ...servicesPages,
    ...secteursPages,
    secteursAutres,
  ];
}
