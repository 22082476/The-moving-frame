import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,       // Recommended for catching bugs
  experimental: {
    appDir: true,              // Enable the App Router
  },
  images: {
    unoptimized: true,         // Optional: avoids extra Next.js image optimization on Vercel
  },
};

export default nextConfig;
