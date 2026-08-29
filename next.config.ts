import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
