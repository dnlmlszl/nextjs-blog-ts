/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/dnlmlszl/fake-posts/main/images/**',
            },
        ],
    },
}

module.exports = nextConfig
