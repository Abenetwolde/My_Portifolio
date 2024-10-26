/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.licdn.com','res.cloudinary.com','jigarsable.vercel.app','pluspng.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org']
  }
}

module.exports = nextConfig
