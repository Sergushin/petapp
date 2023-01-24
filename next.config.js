/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/src/api/:path*',
        destination: `https://benjamin-petapp.vercel.app/:path*`,
      },
    ]
  },
  
}

module.exports = nextConfig
