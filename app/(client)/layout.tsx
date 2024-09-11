import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Provider } from '@/app/utils/Provider'
import { font_heading, font_text } from '@/app/utils/fonts'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
	title: {
		default: 'Anna Zientara - Architekt Wnętrz',
		template: '%s | Anna Zientara - Architekt Wnętrz',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			{children}
			<Footer />
			<SpeedInsights />
				<Analytics />
		</>
	)
}
