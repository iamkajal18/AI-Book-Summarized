// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com", "cdn.jsdelivr.net"], // Add other trusted domains if needed
  },

  // Optional: Enable webpack rule for importing `.json` files (if needed)
  webpack(config: any) {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
};

export default nextConfig;
