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
					400: '#333',
				},
				secondary: {
					400: '#333',
				},
				accent: {
					400: '#333',
				},
				fontDark: '#0f181f',
				fontLight: '#faf7f3',

				bgLight: {
					400: '#ffffff',
				},
				bgDark: {
					400: '#000000',
				},
			},
		},
	},
	plugins: [],
}
export default config
