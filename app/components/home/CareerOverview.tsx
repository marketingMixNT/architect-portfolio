import React from 'react'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import OverwievCard from '@/app/components/OverwievCard'

const carrerOverview = [
	{
		title: '5+',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
	},
	{
		title: '12+',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
	},
	{
		title: '40+',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
	},
	{
		title: '1+',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
	},
]

const CareerOverview = () => {
	return (
		<Section className='pt-12 pb-12 sm:pb-24'>
			<Wrapper className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-16'>
				{carrerOverview.map((item, index) => (
					<OverwievCard key={index} title={item.title} desc={item.desc} />
				))}
			</Wrapper>
		</Section>
	)
}

export default CareerOverview
