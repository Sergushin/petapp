const { default: absoluteUrl } = require('next-absolute-url')
const origin  = absoluteUrl()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${origin.protocol}/${origin.host}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
