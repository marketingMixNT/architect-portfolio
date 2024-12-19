import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import ProjectCard from '@/app/components/ProjectCard'

import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'

import HeroImage from '@/public/assets/portfolio-hero.webp'
import Image from 'next/image'
import Link from 'next/link'

async function getProjects() {
	const query = `
	*[_type == "project"] | order(_createdAt asc) {
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
						{/* <div className='space-y-12 pt-20 max-w-screen-2xl mx-auto'>
							{projects.map((project, index) => (
								<ProjectCard key={index} project={project} />
							))}
						</div> */}
						<div className='flex gap-y-16 gap-x-6 justify-center items-center flex-wrap py-12'>

						{projects.map((project, index) => (
								<ProjectCard key={index} project={project} />
							))}


							{/* <Link href="" className='flex flex-col gap-4 justify-center items-center'>
								<Image
									src='/assets/work.webp'
									alt='ww'
									width={680}
									height={600}
									className='aspect-[5/4] object-cover'
								/>
								<div className='flex flex-col justify-center items-center text-center gap-3'>
									<h2 className='text-2xl uppercase font-heading font-medium '>REWITALIZACJA WILLI MORYS RUH</h2>
									<p className='italic font-extralight text-sm'>rok: 2023 | powierzchnia: 1590 m2 | lokalizacja: Świdnica, Polska</p>
								</div>
							</Link> */}
						</div>
					</Wrapper>
				</Section>
			</main>
		</>
	)
}
