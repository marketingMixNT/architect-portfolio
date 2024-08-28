import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Provider } from '@/app/utils/Provider'
import { font_heading, font_text } from '@/app/utils/fonts'
import './globals.css'
import Footer from '@/app/components/Footer'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' className='scroll-smooth scroll-p-20'>
			<body
				className={`${font_heading} ${font_text}  font-text bg-bgLight-400 dark:bg-bgDark-400 text-fontDark dark:text-fontLight selection:bg-ownPink-600  duration-300`}>
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
