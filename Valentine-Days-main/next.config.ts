import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: true,
  basePath: isGithubPages ? "/codechoNhi" : "",
  assetPrefix: isGithubPages ? "/codechoNhi/" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
