import React from 'react'
import Navbar from '@/app/components/nav/Navbar'
import Image from 'next/image'

const Header = (props: { title: string; image: string }) => {
	return (
		<header
			className={`w-full h-[50vh] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-500 flex justify-center items-center text-center relative`}>
			<Image
				src={props.image}
				alt='Projekt w wykonaniu Anna Zientara'
				className='w-full h-full object-cover '
				layout='fill'
			/>
			<div className='absolute inset-0 bg-black opacity-40'></div>
			<Navbar />
			<h1 className='text-5xl xs:text-7xl sm:text-8xl text-fontLight z-50'>{props.title}</h1>
		</header>
	)
}

export default Header
