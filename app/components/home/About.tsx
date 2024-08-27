import React from 'react'
import Image from 'next/image'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import Text from '@/app/components/Text'
import BaseLink from '@/app/components/BaseLink'

import DummyImage from '@/public/assets/hero.webp'

const About = () => {
	return (
		<Section id='o-mnie' className='pt-12 sm:pt-24 pb-12'>
			{/* CONTAINER */}
			<Wrapper className=' grid lg:grid-cols-2  2xl:gap-20 '>
				{/* text */}
				<div className='flex flex-col justify-between items-start gap-12 lg:gap-0 py-12'>
					<div className='space-y-5 md:w-[75%]'>
						<Subheading>Main</Subheading>
						<Heading>About Us</Heading>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta molestias
							vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti blanditiis nihil
							consectetur. Labore, aliquid?
						</Text>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta molestias
							vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti blanditiis nihil
							consectetur. Labore, aliquid?
						</Text>
					</div>
					<BaseLink href='/o-mnie' className='lg:pt-12'>
						Zobacz
					</BaseLink>
				</div>
				{/* image */}
				<div className='flex justify-center lg:justify-end items-center '>
					<Image src={DummyImage} alt='hero' className='aspect-square max-h-[600px] shadow-2xl shadow-gray-700 ' loading='lazy' />
					{/* add mobile image */}
				</div>
			</Wrapper>
		</Section>
	)
}

export default About
