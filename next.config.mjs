/** @type {import('next').NextConfig} */
const basePath = process.env.REPO_NAME ? "/" + process.env.REPO_NAME : "";
const assetPrefix = process.env.REPO_NAME ? "/" + process.env.REPO_NAME + "/" : "";

const nextConfig = {
    basePath: basePath,
    assetPrefix: assetPrefix,
    output: "export",
};

export default nextConfig;
