import React from 'react'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import ServiceCard from '@/app/components/ServiceCard'

const servicesList = [
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

const Services = () => {
	return (
		<Section className='pt-12 sm:pt-24 pb-12'>
			<Wrapper>
				<div className='space-y-5 w-[75%]'>
					<Subheading>Our</Subheading>
					<Heading>Services</Heading>
				</div>
				<div className='grid grid-cols-1  lg:grid-cols-3 gap-20 pt-16 md:w-3/4 lg:w-full mx-auto '>
					{servicesList.map((item, index) => (
						<ServiceCard key={index} title={item.title} desc={item.desc} />
					))}
				</div>
			</Wrapper>
		</Section>
	)
}

export default Services
