/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig;
