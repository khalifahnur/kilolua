import type { MetadataRoute } from 'next';
import { SITE, absoluteUrl } from '../src/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE.url,
  };
}
