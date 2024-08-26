/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/o\\-mnie',
            destination: '/about',
          },
          {
            source: '/proces\\-projektowy',
            destination: '/process',
          },
          {
            source: '/kontakt',
            destination: '/contact',
          },
        ];
      },
}

export default nextConfig
