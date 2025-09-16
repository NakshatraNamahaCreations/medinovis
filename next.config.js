/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // so next/image works in Netlify
  },
};

export default nextConfig;
