import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "awwtomation.com" }],
        destination: "https://www.awwtomation.com/:path*",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
