/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: 'images.unsplash.com',
      protocol: 'http'
    }]
  }
}

module.exports = nextConfig
