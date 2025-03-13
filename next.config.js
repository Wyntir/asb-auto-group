/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Only add experimental options if you specifically need them
    // experimental: {
    //   appDir: true,
    // },
};

module.exports = nextConfig;