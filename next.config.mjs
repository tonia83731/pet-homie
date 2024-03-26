/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pet.gov.tw",
        port: "",
        pathname: "/upload/pic/**",
      },
    ],
  },
};

export default nextConfig;
