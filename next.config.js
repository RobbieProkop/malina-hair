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
      "scontent-ams4-1.cdninstagram.com",
      "scontent-ams2-1.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
