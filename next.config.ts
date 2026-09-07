import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
