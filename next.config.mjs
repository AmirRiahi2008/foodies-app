/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // یا مثلا "20mb"
    },
  },
};

export default nextConfig;
