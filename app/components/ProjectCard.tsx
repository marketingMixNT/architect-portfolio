import React from 'react'

import DummyImage from '@/public/assets/hero.webp'
import Image from 'next/image'
import Text from './Text'
import BaseLink from './BaseLink'
import { Project } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

import { getImage } from '../lib/getImage'

import blur from '../lib/blurDataUrl'
import Link from 'next/link'

const ProjectCard = async (props: { project: Project }) => {
	return (
		// <div className='flex flex-col lg:flex-row gap-12  py-10 border-b border-gray-400  '>
		// 	<Image
		// 		src={urlFor(props.project.thumbnail).url()}
		// 		alt={props.project.title}
		// 		className=' lg:w-1/2 shadow-md shadow-gray-700 '
		// 		width={700}
		// 		height={450}
		// 		placeholder='blur'
		// 		blurDataURL={blur}
		// 	/>
		// 	<div className=' flex flex-col justify-between lg:w-1/2'>
		// 		<div className='space-y-4 md:w-[80%]'>
		// 			<h2 className='text-3xl'>{props.project.title}</h2>
		// 			<Text>{props.project.excerpt}</Text>
		// 		</div>

		// 		<BaseLink href={`/portfolio/${props.project.slug}`} className='lg:self-end pt-6 lg:pt-0'>
		// 			Zobacz
		// 		</BaseLink>
		// 	</div>
		// </div>

		<Link href={`/portfolio/${props.project.slug}`} className='flex flex-col gap-4 justify-center items-center w-[45%]'>
			<Image
				src={urlFor(props.project.thumbnail).url()}
				alt={props.project.title}
				width={680}
				height={600}
				className='aspect-[5/4] object-cover shadow-md shadow-gray-700'
				placeholder='blur'
				blurDataURL={blur}
			/>
			<div className='flex flex-col justify-center items-center text-center gap-3'>
				<h2 className='text-2xl uppercase font-heading font-medium '>{props.project.title}</h2>
				<p className='italic font-extralight text-sm'>
				{props.project.excerpt}
				</p>
			</div>
		</Link>
	)
}

export default ProjectCard
