import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vywrzgrqckgugqusbpts.supabase.co",
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: false,
};

export default nextConfig;
