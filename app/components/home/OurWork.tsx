import React from 'react'
import Image from 'next/image'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import Text from '@/app/components/Text'

import DummyImage from '@/public/assets/hero.webp'

const workList = [
	{
		title: 'Interior Design',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis repudiandae dolores in culpa, eveniet atque cum perspiciatis totam est.',
	},
	{
		title: 'Interior Design',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis repudiandae dolores in culpa, eveniet atque cum perspiciatis totam est.',
	},
	{
		title: 'Interior Design',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis repudiandae dolores in culpa, eveniet atque cum perspiciatis totam est.',
	},
]

const OurWork = () => {
	return (
		<Section className='pt-12 sm:pt-24 pb-12'>
			{/* CONTAINER */}
			<Wrapper className=' grid lg:grid-cols-2 gap-20 '>
				{/* image */}
				<div className='flex justify-center lg:justify-start items-center '>
					<Image
						src={DummyImage}
						alt='hero'
						className='aspect-square max-h-[600px] shadow-2xl shadow-gray-700 '
						loading='lazy'
					/>
					{/* add mobile image */}
				</div>
				{/* text */}
				<div className='flex flex-col justify-between items-center gap-12 lg:gap-0 '>
					<div className='w-[85%] space-y-5 '>
						<Subheading>Our</Subheading>
						<Heading>Services</Heading>
						<ul className='pt-12 space-y-16 lg:space-y-12 '>
							{workList.map((item, index) => (
								<li key={index}>
									<div className=' pb-4 space-y-2 border-b border-gray-400'>
										<h2 className='text-3xl'>{item.title}</h2>
										<Text>{item.desc}</Text>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default OurWork
