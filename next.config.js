/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: "http://192.168.0.120:8000/api/:path*/",
    },
  ],
};

module.exports = nextConfig;
