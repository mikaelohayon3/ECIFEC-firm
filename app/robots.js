export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/contact/confirmation'],
    },
    sitemap: 'https://ecifec.com/sitemap.xml',
  };
}
