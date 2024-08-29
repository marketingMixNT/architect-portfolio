import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',

	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '400px',
				max: '1980px',
			},
			fontFamily: {
				heading: ['var(--font-heading)', 'sans-serif'],
				text: ['var(--font-text)', 'monospace'],
			},
			colors: {
				primary: {
					400: '#f3f4f6',
					600: '#d1d5db',
					800: '#9ca3af',
				},
				secondary: {
					100: '#3f3f46',
					200: '#27272a',
					300: '#18181b',
					400: '#09090b',
				},
				accent: {
					400: '#333',
				},
				fontDark: '#333',
				fontLight: '#f3f4f6',

				bgLight: {
					400: '#f3f4f6',
				},
				bgDark: {
					400: '#151515',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
