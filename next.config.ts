import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

/** @type {NextConfig} */
const nextConfig = withNextVideo({
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
});

export default nextConfig;
