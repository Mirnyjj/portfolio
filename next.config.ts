/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  generateEtags: true,

  // cacheComponents: true,

  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
