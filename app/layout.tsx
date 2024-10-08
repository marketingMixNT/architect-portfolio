import type { Metadata } from 'next'

import { Provider } from '@/app/utils/Provider'
import { font_heading, font_text } from '@/app/utils/fonts'
import "./globals.css"


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
		<html lang='pl' className='scroll-smooth scroll-p-20'>
			<body
				className={`${font_heading} ${font_text}  font-text bg-bgLight-400 dark:bg-bgDark-400 text-fontDark dark:text-fontLight   duration-300 overflow-y-scroll`}>
				<Provider>
					{children}
				
				</Provider>
				
			</body>
		</html>
	)
}
