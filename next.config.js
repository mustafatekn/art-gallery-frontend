/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "helpx.adobe.com",
      "www.thoughtco.com",
      "static.remove.bg",
      "www.pixsy.com",
      "cdn.pixabay.com",
    ],
  },
  env: {
    SERVER_URL: "https://rixusart-backend.herokuapp.com"
  }
};
