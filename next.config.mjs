/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'randomuser.me',
      'images.unsplash.com',
      // add other domains if needed
    ],
  },
}

export default nextConfig;
