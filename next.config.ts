import type { NextConfig } from "next";
import os from "os";

const getLocalIpAddresses = (): string[] => {
  const interfaces = os.networkInterfaces();
  const addresses: string[] = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === "IPv4" && !iface.internal) {
        addresses.push(iface.address);
        addresses.push(`${iface.address}:3000`);
      }
    }
  }

  return addresses;
};

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:*",
    "127.0.0.1:*",
    // Subredes locales y virtuales conocidas
    "172.29.*",
    "172.31.*",
    "192.168.100.*",
    ...getLocalIpAddresses(),
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
