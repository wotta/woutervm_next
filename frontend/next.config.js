/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")

const nextConfig = {
  images: {
    loader: "imgix",
    domains: ["localhost"],
  },
  webpack5: true,
  basePath: "/v2",
}

module.exports = withPlugins([[withImages]], nextConfig)
