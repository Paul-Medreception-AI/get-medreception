/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/ols/products', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;