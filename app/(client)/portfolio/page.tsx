import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import ProjectCard from '@/app/components/ProjectCard'

import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'

import HeroImage from '@/public/assets/portfolio-hero.webp'

async function getProjects() {
	const query = `
	*[_type == "project"] | order(_createdAt desc) {
	  title,
	  "slug":slug.current,
	  thumbnail,
	  excerpt,
	}
	`
	const data = await client.fetch(query)
	return data
}

export const metadata: Metadata = {
	title: 'Portfolio ',
	description:
		'Odkryj moje projekty wnętrz, które łączą funkcjonalność z estetyką. Zainspiruj się moimi realizacjami i zobacz, jak tworzę unikalne przestrzenie.',
	openGraph: {
		title: 'Portfolio | Anna Zientara - Architekt Wnętrz',
		description:
			'Odkryj moje projekty wnętrz, które łączą funkcjonalność z estetyką. Zainspiruj się moimi realizacjami i zobacz, jak tworzę unikalne przestrzenie.',
		type: 'website',
		locale: 'pl_PL',
		url: '',
		siteName: 'Anna Zientara - Architekt Wnętrz',
	},
}

export const revalidate = 60

export default async function Portfolio() {
	const projects: Project[] = await getProjects()
	return (
		<>
			<Header image={HeroImage} title='Portfolio' />

			<main>
				<Section className='pt-12 pb-12'>
					<Wrapper>
						<div className='space-y-12 pt-20 max-w-screen-2xl mx-auto'>
							{projects.map((project, index) => (
								<ProjectCard key={index} project={project} />
							))}
						</div>
					</Wrapper>
				</Section>
			</main>
		</>
	)
}
