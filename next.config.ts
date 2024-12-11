import withPWA from 'next-pwa';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Keep reactStrictMode here, outside the pwa section
  swcMinify: true, // Optional: for better minification
  pwa: {
    dest: 'public', // Specify where to save PWA files
    disable: process.env.NODE_ENV === 'development', // Disable PWA during development
    register: true, // Automatically register the service worker
    skipWaiting: true, // Allow the service worker to immediately take control
  },
};

export default withPWA(nextConfig);
