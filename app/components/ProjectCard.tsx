import React from 'react'

import DummyImage from '@/public/assets/hero.webp'
import Image from 'next/image'
import Text from './Text'
import BaseLink from './BaseLink'

const ProjectCard = (props: { title: string; desc: string }) => {
	return (
		<div className='flex flex-col lg:flex-row gap-12  py-10 border-b border-gray-400  '>
			<Image src={DummyImage} alt='hero' className=' lg:w-2/5 shadow-2xl shadow-gray-700 ' loading='lazy' />
			<div className=' flex flex-col justify-between lg:w-3/5'>
				<div className='space-y-4 md:w-[80%]'>
					<h2 className='text-3xl'>{props.title}</h2>
					<Text>{props.desc}</Text>
				</div>

				<BaseLink href={`/portfolio/${props.title}`} className='lg:self-end pt-6 lg:pt-0'>
					Zobacz
				</BaseLink>
			</div>
		</div>
	)
}

export default ProjectCard
