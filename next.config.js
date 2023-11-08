/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    
    basePath: '',
        images: {
            remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/IDerevyansky/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/IDerevyansky/**',
            }
            ],
        }
}

module.exports = nextConfig
