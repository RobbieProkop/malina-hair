/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  images: {
    domains: [
      "instagram.ftbs5-3.fna.fbcdn.net",
      "instagram.ftbs5-2.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
