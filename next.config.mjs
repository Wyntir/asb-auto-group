/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Static HTML export
    images: {
        unoptimized: true, // Required for static export
    },
    // If you're using the app router (Next.js 13+)
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;