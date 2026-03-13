/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  trailingSlash: true,
  assetPrefix: "/",
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      new URL("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/**"),
    ],
    unoptimized: true,
  },
};

export default nextConfig;
