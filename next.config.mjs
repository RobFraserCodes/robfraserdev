import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com', 'tailwindui.com'],
    },
};

export default withContentlayer(nextConfig);