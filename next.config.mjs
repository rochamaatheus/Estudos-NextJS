/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitindo uso de imagens
  images: {
    // Em "deviceSizes" que ele diminui o tamanho da imagem com o "size"
    // por padrão temos:
    // [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.origamid.online',
        port: '',
        pathname: '/imagens/**',
      },
    ],
  },
};

export default nextConfig;
