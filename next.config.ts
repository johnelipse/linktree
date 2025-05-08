import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 1000,
  },
  webpack(nextConfig) {
    nextConfig.watchOptions = {
      ignored: [
        "**/node_modules",
        "**/.next",
        "**/C:/Users/John Banyweire/Application Data/**",
      ],
      level: "verbose",
    };
    return nextConfig;
  },
};

export default nextConfig;
