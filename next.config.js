/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  rewrites: () => [
    {
      source: "/api/:path*/",
      destination: "https://eprof.kz/api/:path*/",
    },
  ],
};

module.exports = nextConfig;
