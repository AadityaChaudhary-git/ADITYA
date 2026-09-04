
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const projects = ["nurotrack", "leetcode"];

export async function GET() {
  const projectUrls = projects
    .map(
      (p) =>
        `<url><loc>${baseUrl}/projects/${p}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join("\n  ");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  ${projectUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

