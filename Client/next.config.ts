import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
      { hostname: 'upload.wikimedia.org', protocol: 'https' }, // Added this line for Wikimedia
      { hostname: 'raw.githubusercontent.com', protocol: 'https' }, // Added for raw.githubusercontent.com
    ],
  },
};

export default nextConfig;
