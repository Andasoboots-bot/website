import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Cloudflare Pages expects 'out' directory by default for static exports
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
