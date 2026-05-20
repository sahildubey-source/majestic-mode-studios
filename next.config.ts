import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
  async redirects() {
    return [
      { source: '/pages/:path*', destination: '/', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/hello-world/:path*', destination: '/blog', permanent: true },
      { source: '/elementor-header', destination: '/', permanent: true },
      { source: '/elementor-footer', destination: '/', permanent: true },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'majesticmodestudios.com',
          },
        ],
        destination: 'https://www.majesticmodestudios.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
