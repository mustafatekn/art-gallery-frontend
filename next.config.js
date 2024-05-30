/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SERVER_URL: "https://art-gallery-backend.vercel.app"
  }
};
