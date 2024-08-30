import type { Metadata } from 'next'

import Header from '@/app/components/home/Header'
import About from '@/app/components/home/About'
import CareerOverview from '@/app/components/home/CareerOverview'
import BannerBackgorund from '@/app/components/home/BannerBackgorund'
import Services from '@/app/components/home/Services'
import OurWork from '@/app/components/home/OurWork'
import Projects from '@/app/components/home/Projects'
import Contact from '@/app/components/home/Contact'

import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'

async function getProjects() {
	const query = `
	  *[_type == "project"][0...3] {
		title,
		 "slug": slug.current,
		thumbnail,
		excerpt,
	  }
	`
	const data = await client.fetch(query)
	return data
  }
  

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default async function Home() {
	const projects: Project[] = await getProjects()
	return (
		<>
			<Header />

			<main>
				<About />
				<CareerOverview />
				<BannerBackgorund />
				<Services />
				<OurWork />
				<Projects projects={projects} />
				<Contact />
			</main>
		</>
	)
}
