/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.ctfassets.net"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
