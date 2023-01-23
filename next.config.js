/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://petapp-j0fh15c7e-sergushin1.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
