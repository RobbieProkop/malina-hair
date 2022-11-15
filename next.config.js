/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["https://instagram.ftbs5-3.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
