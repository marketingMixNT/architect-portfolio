import type { Metadata } from 'next'

import Header from '@/app/components/home/Header'
import About from '@/app/components/home/About'
import CareerOverview from '@/app/components/home/CareerOverview'
import BannerBackgorund from '@/app/components/home/BannerBackgorund'
import Services from '@/app/components/home/Services'
import Process from '@/app/components/home/Process'
import Projects from '@/app/components/home/Projects'
import Contact from '@/app/components/home/Contact'

import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'

async function getProjects() {
	const query = `
	*[_type == "project"] | order(_createdAt desc)[0...3] {
  title,
  "slug": slug.current,
  thumbnail,
  excerpt,
}
	`
	const data = await client.fetch(query)
	return data
}

export const metadata: Metadata = {
	description:
		'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
	openGraph: {
		title: 'Anna Zientara - Architekt Wnętrz',
		description:
			'Tworzę wyjątkowe, spersonalizowane wnętrza inspirowane stylem życia moich klientów. Anna Zientara – architekt wnętrz, który łączy harmonię z funkcjonalnością.',
		type: 'website',
		locale: 'pl_PL',
		url: '',
		siteName: 'Anna Zientara - Architekt Wnętrz',
	},
}

export const revalidate = 60

export default async function Home() {
	const projects: Project[] = await getProjects()
	return (
		<>
			<Header />

			<main>
				<About />
				<BannerBackgorund />
				<Process />
				<Projects projects={projects} />
				<Contact />
			</main>
		</>
	)
}
