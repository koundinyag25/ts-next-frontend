import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  /* config options here */
  env: {
    NEXT_PUBLIC_API_BASE_URL: "https://ts-demo.moolya.xyz",
  },
};

export default nextConfig;
