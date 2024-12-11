import withPWA from 'next-pwa';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',  // Directory for service worker
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    register: true,  // Automatically registers the service worker
    skipWaiting: true, // Skip waiting and activate the service worker immediately
  },
};

export default withPWA(nextConfig);
