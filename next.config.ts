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
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.majesticmodestudios.com',
          },
        ],
        destination: 'https://majesticmodestudios.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
