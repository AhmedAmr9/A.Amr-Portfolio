/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // لو عندك روابط خارجية للصور اضفها هنا
  },
  // شيل experimental.turbo بالكامل عشان تبقى على Webpack
};

module.exports = nextConfig;
