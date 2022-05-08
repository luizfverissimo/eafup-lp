/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  }
}

module.exports = nextConfig
