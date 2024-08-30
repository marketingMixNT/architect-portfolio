import React from 'react'

import DummyImage from '@/public/assets/hero.webp'
import Image from 'next/image'
import Text from './Text'
import BaseLink from './BaseLink'
import { Project } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

const ProjectCard = (props: { project: Project }) => {
	return (
		<div className='flex flex-col lg:flex-row gap-12  py-10 border-b border-gray-400  '>
			<Image src={urlFor(props.project.thumbnail).url()} alt={props.project.title} className=' lg:w-2/5 shadow-md shadow-gray-700 ' width={1000} height={1000}  />
			<div className=' flex flex-col justify-between lg:w-3/5'>
				<div className='space-y-4 md:w-[80%]'>
					<h2 className='text-3xl'>{props.project.title}</h2>
					<Text>{props.project.excerpt}</Text>
				</div>

				<BaseLink href={`/portfolio/${props.project.slug}`} className='lg:self-end pt-6 lg:pt-0'>
					Zobacz
				</BaseLink>
			</div>
		</div>
	)
}

export default ProjectCard
