import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Mengubah build menjadi HTML/CSS/JS statis
  basePath: '/qrcode-custom-generator', // Sesuaikan dengan nama repository GitHub Anda
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar bawaan Next.js
  },
};

export default nextConfig;