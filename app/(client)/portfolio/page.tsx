import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import ProjectCard from '@/app/components/ProjectCard'

import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'

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

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Portfolio | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default async function Portfolio() {
	const projects: Project[] = await getProjects()
	return (
		<>
			<Header image='/assets/hero.jpg' title='Portfolio' />

			<main>
				<Section className='pt-12 pb-12'>
					<Wrapper>
						<div className='space-y-12 pt-20 max-w-screen-xl mx-auto'>
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
