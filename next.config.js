/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ hostname: "cdn.dummyjson.com" }],
  },
};

module.exports = nextConfig;
