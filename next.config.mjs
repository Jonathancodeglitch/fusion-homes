/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      new URL("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
