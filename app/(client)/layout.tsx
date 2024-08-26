import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { font_heading, font_text } from '@/app/utils/fonts'
import { Provider } from '../utils/Provider'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' className='scroll-smooth'>
			<Provider>
				<body
					className={`${font_heading} ${font_text}  font-text bg-bgLight-400 dark:bg-bgDark-400 selection:bg-ownPink-600`}>
					{children}
				</body>
			</Provider>
			<SpeedInsights />
			<Analytics />
		</html>
	)
}
