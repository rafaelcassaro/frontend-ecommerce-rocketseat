import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL('https://fakestoreapi.com/img/**')],
  },
};


export default nextConfig;
