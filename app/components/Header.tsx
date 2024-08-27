import React from 'react'
import Navbar from './nav/Navbar'

const Header = () => {
	return (
		<header className=" w-full h-[50vh] bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-500 flex justify-center items-center relative">
			<Navbar />

            <h1 className='text-7xl sm:text-9xl text-fontLight'>O mnie</h1>

		

			
		</header>
	)
}

export default Header
