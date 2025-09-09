/** @type {import('next').NextConfig} */
const nextConfig = {
  // اجبر Next.js يشتغل بـ webpack مش turbopack
  experimental: {
    turbo: {
      rules: {}, // لازم تحط object فاضية مش Boolean
    },
  },
};
module.exports = nextConfig;
