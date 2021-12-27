/**
 * @type {import('next').NextConfig}
 */
const withImages = require("next-images")

const nextConfig = withImages({
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  webpack5: true,
})

module.exports = nextConfig
