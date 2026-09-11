
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Aditya Chaudhary</title>
  <link>${baseUrl}</link>
  <description>Portfolio updates from Aditya Chaudhary.</description>
  <language>en-us</language>
</channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}

