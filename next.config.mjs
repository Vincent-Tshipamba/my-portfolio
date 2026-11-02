/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      new URL('https://oc-static.imgix.net/prod/images/paths/illustrations/977/17461913883709_path_977%20copie%201-min.png?auto=compress,format&q=60&w=300&dpr=2'),
      new URL('https://oc-static.imgix.net/prod/images/paths/illustrations/902/16994361034263_16781163594836_DEV_technicianlogicel.png?auto=compress,format&q=60&w=300&dpr=2')]
  }
};

export default nextConfig;
