/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
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
