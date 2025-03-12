import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vywrzgrqckgugqusbpts.supabase.co",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
