import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.31.192.1", "172.31.192.1:3000", "localhost:3000"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
