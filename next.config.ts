/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/:path*",
      destination: "https://awwtomation.com/:path*",
      permanent: true,
    },
  ],
};

export default nextConfig;
