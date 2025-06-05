/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "www.awwtomation.com/:path*",
      destination: "https://awwtomation.com/:path*",
      permanent: true,
    },
    {
      source: "http://awwtomation.com/:path*",
      destination: "https://awwtomation.com/:path*",
      permanent: true,
    },
  ],
};

export default nextConfig;
