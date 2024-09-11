
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'

import type { Project } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'
import { urlFor } from '@/sanity/lib/image'
import HeaderDynamic from '@/app/components/HeaderDynamic'
import Gallery from '@/app/components/Gallery'
import Header from '@/app/components/Header'

const getProject = async (slug: string) => {
	const query = `
    *[_type == "project" && slug.current == "${slug}"][0]{
        title,
		excerpt,
		thumbnail,
		imagesGallery
       
      }`
	const data = await client.fetch(query)
	return data
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const project: Project = await getProject(params?.slug)
	if (!project) {
		return
	}
	return {
		title: `${project.title}`,
		description: project.excerpt,
		openGraph: {
			title: `${project.title} | Anna Zientara - Architekt Wnętrz`,
			description: project.excerpt,
			type: 'website',
			locale: 'pl_PL',
			url: `/portfolio/${project.slug}`,
			siteName: 'Anna Zientara - Architekt Wnętrz',
			images: [
				{
					url: urlFor(project.thumbnail).url(),
					width: 1200,
					height: 630,
					alt: `${project.title} miniaturka`,
				},
			],
		},
	}
}

export const revalidate = 60

const Project = async ({ params }: { params: { slug: string } }) => {
	const project: Project = await getProject(params?.slug)

	

	return (
		<>
			<Header image={urlFor(project.thumbnail).url()} title={project.title} />

			<main>
				<Section className='pt-12 sm:pt-24 pb-12 sm:pb-24'>
					<Wrapper className='grid md:grid-cols-2 xl:grid-cols-3 gap-16 2xl:gap-24 max-w-screen-max'>
						<Gallery gallery={project.imagesGallery} title={project.title} />
					</Wrapper>
				</Section>
			</main>

			
		</>
	)
}

export default Project
