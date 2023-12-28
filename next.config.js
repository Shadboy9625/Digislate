const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
});
