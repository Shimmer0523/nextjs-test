/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/nextjs-test",
  assetPrefix: process.env.GITHUB_ACTIONS && "/nextjs-test/",
  output: "export",
};

export default nextConfig;
