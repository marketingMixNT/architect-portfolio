import React from 'react'
import Header from '@/app/components/Header'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import ImageCarousel from '@/app/components/ImageCarousel'

import type { Project } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const getProject = async (slug: string) => {
	const query = `
    *[_type == "project" && slug.current == "${slug}"][0]{
        title,
		thumbnail,
		content,
		imagesGallery
       
      }`
	const data = await client.fetch(query)
	return data
}
export const revalidate = 60

const Project = async ({ params }: { params: { slug: string } }) => {
	const project: Project = await getProject(params?.slug)

	const images = project.imagesGallery
		.map((image: { asset: { _ref: string } }) => urlFor(image.asset._ref).url())
		.slice(0, 2)

	return (
		<>
			<Header image={urlFor(project.thumbnail).url()} title={project.title} />

			<main>
				<Section className='pt-12 sm:pt-24 pb-12 sm:pb-24'>
					<Wrapper className='flex flex-col lg:flex-row gap-y-12'>
						<div className='w-full lg:w-[55%] flex flex-col gap-y-12 relative justify-center items-center'>
							{images.map((image: string, index: number) => (
								<Image
									key={index}
									src={image}
									alt={project.title}
									className='w-full sticky top-12 aspect-square max-w-[500px] 2xl:max-w-[550px] object-cover shadow-md shadow-gray-700'
									width={500}
									height={500}
								/>
							))}
						</div>
						<div className='relative w-full lg:w-[45%] lg:pl-12 prose'>
							<div className='sticky top-32 leading-relaxed text-gray-500 dark:text-gray-400 text-lg'>
								<PortableText value={project.content} />
							</div>
						</div>
					</Wrapper>
					<div className='pt-20 lg:pt-32'>
						<ImageCarousel images={project.imagesGallery} />
					</div>
				</Section>
			</main>
		</>
	)
}

export default Project
