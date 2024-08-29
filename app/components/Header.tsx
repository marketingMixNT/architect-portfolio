import React from 'react'
import Navbar from '@/app/components/nav/Navbar'

const Header = (props:{title:string,image:string}) => {
	return (
		<header className={` w-full h-[50vh] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-500 flex justify-center items-center text-center relative ${props.image}`}>
			<Navbar />

            <h1 className='text-7xl sm:text-9xl text-fontLight'>{props.title}</h1>

		

			
		</header>
	)
}

export default Header
