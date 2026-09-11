import type { NextConfig } from "next";

const nextConfig = {
  allowedDevOrigins: ["172.31.192.1", "172.31.192.1:3000", "localhost:3000"],
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig as NextConfig;
