import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import BaseLink from '@/app/components/BaseLink'

import DummyImage from '@/public/assets/kontakt.webp'

import socials from '@/app/utils/socials'

const Contact = () => {
	return (
		<Section id='kontakt' className='pt-12 sm:pt-24 pb-24'>
			<Wrapper className=' grid lg:grid-cols-2 gap-20 '>
				<div className='flex flex-col  items-start gap-12 lg:gap-12 '>
					<div className='space-y-5'>
						<Heading>kontakt</Heading>
					</div>
					{/* CONTAINER */}
					<div className='space-y-6'>
						{/* phone */}
						<div className='flex flex-col gap-2'>
							<h2 className='text-3xl'>Telefon</h2>
							<BaseLink noArrow href='#' className='lowercase leading-relaxed text-gray-500 dark:text-gray-400 text-lg'>
								+48 555 444 444
							</BaseLink>
						</div>
						{/* email */}
						<div className='flex flex-col gap-2'>
							<h2 className='text-3xl'>Email</h2>
							<BaseLink noArrow href='#' className='lowercase leading-relaxed text-gray-500 dark:text-gray-400 text-lg'>
								test@gmail.com
							</BaseLink>
						</div>
						{/* address */}
						<div className='flex flex-col gap-2'>
							<h2 className='text-3xl'>Adres</h2>
							<BaseLink noArrow href='#' className='lowercase leading-relaxed text-gray-500 dark:text-gray-400 text-lg'>
								testowa 123, 34-400 Test
							</BaseLink>
						</div>
						{/* socials */}
						<div className='flex flex-col gap-3'>
							<h2 className='text-3xl'>Social Media</h2>
							<ul className='flex gap-4'>
								{socials.map((social, index) => (
									<li key={index}>
										<Link href={social.href} target='_blank' rel='noreferrer nofollow' aria-label={social.label}>
											{social.icon}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className='flex justify-start items-center'>
					<Image
						src={DummyImage}
						alt='hero'
						className='aspect-square max-h-[550px] shadow-2xl shadow-gray-700'
						loading='lazy'
					/>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Contact
