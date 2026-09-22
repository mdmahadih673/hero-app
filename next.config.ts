import type { NextConfig } from "next";

// https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
