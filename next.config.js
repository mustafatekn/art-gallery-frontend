/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["helpx.adobe.com", "www.thoughtco.com", "static.remove.bg", "www.pixsy.com","cdn.pixabay.com"]
  }
}

module.exports = nextConfig
