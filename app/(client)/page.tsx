import type { Metadata } from 'next'

import Header from '@/app/components/home/Header'
import About from '@/app/components/home/About'
import CareerOverview from '@/app/components/home/CareerOverview'
import BannerBackgorund from '@/app/components/home/BannerBackgorund'
import Services from '@/app/components/home/Services'
import OurWork from '@/app/components/home/OurWork'
import Projects from '@/app/components/home/Projects'
import Contact from '@/app/components/home/Contact'

export const metadata: Metadata = {
	title: 'Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<About />
				<CareerOverview />
				<BannerBackgorund />
				<Services />
				<OurWork />
				<Projects />
				<Contact />
			</main>
		</>
	)
}
