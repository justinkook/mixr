/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "misc.scdn.co",
      "i.scdn.co",
      "i1.sndcdn.com",
      "mucdgwedfzbqjqodwdrz.supabase.co",
      "cdn.builder.io",
    ],
  },
});
module.exports = nextConfig;
