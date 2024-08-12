/** @type {import('next').NextConfig} */
const basePath = process.env.REPO_NAME ? `/${process.env.REPO_NAME}` : "";
const assetPrefix = process.env.REPO_NAME ? `/${process.env.REPO_NAME}` : "";

console.log(process.env.REPO_NAME);

const nextConfig = {
  basePath: basePath,
  output: "export",
};

export default nextConfig;
