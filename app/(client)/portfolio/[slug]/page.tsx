import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'

import type { Project } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'
import { urlFor } from '@/sanity/lib/image'
import Gallery from '@/app/components/Gallery'
import Header from '@/app/components/Header'
import Image from 'next/image'

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
			{/* <Header image={urlFor(project.thumbnail).url()} title={project.title} /> */}

			<div className='max-w-screen-lg mx-auto'>
				<div className='text-center flex flex-col justify-center items-center gap-1'>
					<span className='text-xs'>Anna Zientara</span>
					<h1 className='text-4xl'>{project.title}</h1>
					<p className='italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis libero hic odio.</p>
				</div>

				{/* <div className='flex justify-center items-center gap-6 flex-wrap'>
				<Image src={urlFor(project.thumbnail).url()} alt='sss' width={600} height={350} className='w-[45%] aspect-square object-cover' />
				<Image src={urlFor(project.thumbnail).url()} alt='sss' width={600} height={350} className='w-[45%] aspect-square object-cover' />
				<Image src={urlFor(project.thumbnail).url()} alt='sss' width={600} height={350} className='w-[45%] aspect-square object-cover' />
				</div> */}
				<Image
					src={urlFor(project.thumbnail).url()}
					alt='sss'
					width={600}
					height={350}
					className='w-full aspect-video object-cover'
				/>

				<div className='prose max-w-full text-white'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore enim eaque neque recusandae et
						distinctio a quis architecto nesciunt. Consequuntur mollitia quisquam vitae veritatis culpa, magnam ex
						officiis reprehenderit?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore enim eaque neque recusandae et
						distinctio a quis architecto nesciunt. Consequuntur mollitia quisquam vitae veritatis culpa, magnam ex
						officiis reprehenderit?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore enim eaque neque recusandae et
						distinctio a quis architecto nesciunt. Consequuntur mollitia quisquam vitae veritatis culpa, magnam ex
						officiis reprehenderit?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore enim eaque neque recusandae et
						distinctio a quis architecto nesciunt. Consequuntur mollitia quisquam vitae veritatis culpa, magnam ex
						officiis reprehenderit?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore enim eaque neque recusandae et
						distinctio a quis architecto nesciunt. Consequuntur mollitia quisquam vitae veritatis culpa, magnam ex
						officiis reprehenderit?
					</p>
				</div>
			</div>

			<main>
				<Section className='pt-12 sm:pt-24 pb-12 sm:pb-24'>
					<Wrapper className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 max-w-screen-max'>
						<Gallery gallery={project.imagesGallery} title={project.title} />
					</Wrapper>
				</Section>
			</main>
		</>
	)
}

export default Project
