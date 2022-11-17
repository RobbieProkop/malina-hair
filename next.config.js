/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "instagram.ftbs5-3.fna.fbcdn.net",
      "instagram.ftbs5-2.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
