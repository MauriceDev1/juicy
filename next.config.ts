import { NextConfig } from 'next';
import withPWA from 'next-pwa';

export default withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
});
