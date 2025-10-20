/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive l'optimisation des images côté serveur (corrige l’erreur 504)
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
