import type { MetadataRoute } from 'next';
import { SITE } from '../src/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} | Kenyan Green Coffee`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'browser',
    background_color: '#e4decb',
    theme_color: '#e4decb',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
