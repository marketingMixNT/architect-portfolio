import React from 'react'
import Link from 'next/link'

import { CircleArrowDown } from 'lucide-react'

import Navbar from '@/app/components/nav/Navbar'
import BaseLink from '@/app/components/BaseLink'
const Header = () => {
	return (
		<header className="relative flex justify-center items-center  w-full h-screen bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-400 text-fontLight">
			<Navbar />

			<div className=' flex flex-col md:flex-row justify-between gap-12 sm:gap-0 sm:h-[70%] 2xl:h-[60%] w-[90%] '>
				<div className='xl:w-1/3'>
					<h1 className='text-7xl sm:text-9xl'>Interior Design Studio</h1>
				</div>
				<div className='flex flex-col gap-6 justify-end items-end pl-20 sm:pl-0  xl:w-1/3 2xl:w-1/4  text-end'>
					<p className='text-xl sm:text-2xl'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt accusamus voluptatem?
					</p>
					<BaseLink href='/portfolio' className='after:bg-white '>
						Sprawdź
					</BaseLink>
				</div>
			</div>

			<Link href='/#o-mnie' aria-label='Przejdź do sekcji o mnie'>
				<CircleArrowDown className='absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2 sm:left-[4.6rem] w-12 h-12 animate-pulse' />
			</Link>
		</header>
	)
}

export default Header
