import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import About from '@/app/components/home/About'
import CareerOverview from '@/app/components/home/CareerOverview'
import BannerBackgorund from '@/app/components/home/BannerBackgorund'
import Services from '@/app/components/home/Services'
import Process1 from '@/app/components/home/Process'

export const metadata: Metadata = {
	title: 'Proces projektowy | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Process() {
	return (
		<>
			<Header image='/assets/hero.jpg' title='Proces projektowy' />

			<main>
				<About />
				<CareerOverview />
				<BannerBackgorund />
				<Services />
				<Process1 />
			</main>
		</>
	)
}
