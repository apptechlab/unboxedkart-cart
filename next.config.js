/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["unboxedkart-india.s3.ap-south-1.amazonaws.com"],
  },
  // webpack: (config) => {
  //   config.node = {
  //     dns: "mock",
  //     fs: "empty",
  //     path: true,
  //     url: false,
  //   };
  //   return config;
  // },
  webpack: (config) => {
    config.experiments = { 
      topLevelAwait: true,
      layers : true
     };
    return config;
  },
  webpack5: true,
};

module.exports = nextConfig;



// ignoreBuildErrors: true,
  // eslint: {
    // ignoreDuringBuilds: true,
  // },
  // rules: {
  //   "@next/next/no-document-import-in-page": "off"
  // },
  // future: {
  //   webpack5: true,
  // },
  // webpack: function (config, options) {
  //   config.experiments = {};
  //   return config;
  // },
  // experiments: {
  //   asyncWebAssembly: true,
  //   buildHttp: true,
  //   layers: true,
  //   lazyCompilation: true,
  //   outputModule: true,
  //   syncWebAssembly: true,
  //   topLevelAwait: true,
  // },
