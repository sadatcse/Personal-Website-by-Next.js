/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  outputFileTracing: false,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
