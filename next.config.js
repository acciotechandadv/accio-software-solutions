/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages deployment
  // For local development, comment this out
  // basePath: '/accio-software-solutions',
  // trailingSlash: true,
}

module.exports = nextConfig
