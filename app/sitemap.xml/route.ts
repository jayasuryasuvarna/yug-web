import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://yugestates.com'; // Replace with your actual domain

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${ baseUrl }</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${ baseUrl }/properties</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${ baseUrl }/about</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${ baseUrl }/privacy-policy</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${ baseUrl }/terms-conditions</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${ baseUrl }/sitemap</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${ baseUrl }/services/farm-management</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${ baseUrl }/services/property-investment</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${ baseUrl }/services/crop-cultivation</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${ baseUrl }/services/agricultural-consulting</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${ baseUrl }/investment</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${ baseUrl }/market-analysis</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${ baseUrl }/valuation</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${ baseUrl }/contact</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${ baseUrl }/consultation</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${ baseUrl }/support</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 
