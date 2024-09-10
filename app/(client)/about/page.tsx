import Header from '@/app/components/Header'

import AboutSection from '@/app/components/home/About'
import BannerBackgorund from '@/app/components/home/BannerBackgorund'
import CareerOverview from '@/app/components/home/CareerOverview'
import OurWork from '@/app/components/home/OurWork'
import Services from '@/app/components/home/Services'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'O mnie | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function About() {
	return (
		<>
			<Header image='/assets/hero.jpg' title='O mnie' />

			<main>
				<AboutSection />
				<CareerOverview />
				<BannerBackgorund />
				<Services />
				<OurWork />
			</main>
		</>
	)
}
