import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
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
            value: 'majesticmodestudios.com',
          },
        ],
        destination: 'https://www.majesticmodestudios.com/:path*',
        permanent: true,
      },
      {
        source: '/collections/frontpage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/collections/beauty-example-products',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/elementor-header',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elementor-footer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/customer_authentication/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
