/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://petapp-p0q9o8c69-sergushin1.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
