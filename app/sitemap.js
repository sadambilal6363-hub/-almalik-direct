export default function sitemap() {
  const baseUrl = "https://haloveradigital.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/residential`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/offices`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/warehouses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/shops`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/yards`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/farms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/industrial`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sharjah/land`,
      lastModified: new Date(),
    },
  ];
}
