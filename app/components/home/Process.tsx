import React from 'react'
import Image from 'next/image'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import Text from '@/app/components/Text'

import WorkImage from '@/public/assets/work.jpg'
import BaseLink from '../BaseLink'

const processList = [
	{
		title: 'Koncepcja',
		desc: 'Tworzę unikalną wizję wnętrza, dostosowaną do Twoich potrzeb i stylu życia.',
	},
	{
		title: 'Projekt',
		desc: 'Opracowuję szczegółowy plan przestrzeni, uwzględniając estetykę i funkcjonalność.',
	},
	{
		title: 'Dokumentacja',
		desc: 'Przygotowuję pełen zestaw rysunków technicznych i specyfikacji materiałów.',
	},
	{
		title: 'Nadzór autorski',
		desc: 'Czuwam nad realizacją projektu, aby zapewnić jego zgodność z wizją.',
	},
]

const Process = () => {
	return (
		<Section className='pt-12 sm:pt-24 pb-12'>
			{/* CONTAINER */}
			<Wrapper className=' grid xl:grid-cols-2 gap-20 '>
				{/* image */}
				<div className='flex justify-center lg:justify-start items-center '>
					<Image
						src={WorkImage}
						alt='Sofa z kominkiem'
						className='aspect-square max-h-[600px] shadow-2xl shadow-gray-700 '
						placeholder='blur'
					/>
					{/* add mobile image */}
				</div>
				{/* text */}
				<div className='flex flex-col justify-between items-center gap-12 lg:gap-0 '>
					<div className='w-[85%] flex flex-col space-y-5 '>
						<Subheading>Proces</Subheading>
						<Heading>Projektowy</Heading>
						<ul className='pt-12 space-y-16 lg:space-y-12 '>
							{processList.map((item, index) => (
								<li key={index}>
									<div className=' pb-4 space-y-2 border-b border-gray-400'>
										<h2 className='text-3xl'>{item.title}</h2>
										<Text>{item.desc}</Text>
									</div>
								</li>
							))}
						</ul>
						<BaseLink href='/proces-projektowy' className='pt-12 xl:self-end'>
							Dowiedz się więcej
						</BaseLink>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Process
