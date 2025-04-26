// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.demolab.com' },
      { protocol: 'https', hostname: '**.shields.io' },
      { protocol: 'https', hostname: '**.herokuapp.com' },
      { protocol: 'https', hostname: '**.vercel.app' },
      { protocol: 'https', hostname: '**.githubusercontent.com' },
    ],
  },
};

module.exports = nextConfig;
