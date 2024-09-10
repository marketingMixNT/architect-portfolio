import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
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
			{
				source: '/polityka\\-prywatnosci',
				destination: '/privacyPolicy',
			},
		]
	},
}

export default withPlaiceholder(nextConfig)
