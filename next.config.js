/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: process.env.NEXT_PUBLIC_BASE_HREF,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_DESTINATION}/api/:path*`,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
