import withPWA from 'next-pwa';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Place reactStrictMode outside of pwa
  swcMinify: true,
  pwa: {
    dest: 'public', // Where the service worker and other assets will be placed
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development
    register: true, // Automatically register the service worker
    skipWaiting: true, // Skip waiting and immediately activate the new service worker
  },
};

export default withPWA(nextConfig);
