/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  //   api: {
  //     bodyParser: {
  //       sizeLimit: "10mb", // Set desired value here
  //     },
  //   },
};

module.exports = nextConfig;
