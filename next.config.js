if (typeof window !== "undefined") {
  var host = window.location.host;     
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://${host}/:path*`,
      },
    ]
  },
  
}

module.exports = nextConfig
