import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Projects from '@/app/components/home/Projects'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import ProjectCard from '@/app/components/ProjectCard'

export const metadata: Metadata = {
	title: 'Portfolio | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

const projects = [
	{
		title: 'Projekt',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
	},
	{
		title: 'Projekt',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
	},
	{
		title: 'Projekt',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
	},
]

export default function Portfolio() {
	return (
		<>
			<Header image="bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')]" title='Portfolio' />

			<main>
				<Section className='pt-12 pb-12'>
					<Wrapper>
						<div className='space-y-12 pt-20'>
							{projects.map((project, index) => (
								<ProjectCard key={index} title={project.title} desc={project.desc} />
							))}
						</div>
					</Wrapper>
				</Section>
			</main>
		</>
	)
}
