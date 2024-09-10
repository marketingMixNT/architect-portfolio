import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Provider } from '@/app/utils/Provider'
import { font_heading, font_text } from '@/app/utils/fonts'
import './globals.css'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
	title:{
		default: 'Anna Zientara - Architekt Wnętrz',
		template: '%s | Anna Zientara - Architekt Wnętrz',
	}
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' >
			<body
				className={`${font_heading} ${font_text}  font-text bg-bgLight-400 dark:bg-bgDark-400 text-fontDark dark:text-fontLight   duration-300 overflow-y-scroll`}>
				<Provider>
					{children}
					<Footer />
				</Provider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
