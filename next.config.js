/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      // loader: "babel-loader",
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/cloudyfileupload/**",
      },
    ],
  },
  //   api: {
  //     bodyParser: {
  //       sizeLimit: "10mb", // Set desired value here
  //     },
  //   },
};

module.exports = nextConfig;
