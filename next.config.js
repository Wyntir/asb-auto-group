/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Add this experimental flag to bypass Node version check
    experimental: {
        skipTrailingSlashRedirect: true,
        skipMiddlewareUrlNormalize: true
    }
};

module.exports = nextConfig;