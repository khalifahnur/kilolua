const assetCache = 'public, max-age=604800, stale-while-revalidate=86400';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['three'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Files in /public are served with no caching by default; the large ones are static.
        source: '/:file(.+\\.(?:png|jpe?g|webp|avif|svg|glb|mp4|ico))',
        headers: [{ key: 'Cache-Control', value: assetCache }],
      },
    ];
  },
};

export default nextConfig;
