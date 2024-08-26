'use client'

import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import NavLink from './NavLink'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const navLinks = [
	{ href: '/o-mnie', label: 'O mnie' },
	{ href: '/proces-projektowy', label: 'Proces projektowy' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#kontakt', label: 'Kontakt' },
]

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)

	const handleLinkClick = () => {
		setOpen(false)
	}

	return (
		<>
			<nav className=' max-w-[1800px]   mx-auto fixed top-0 left-0 right-0 z-50'>
				{/* CONTAINER */}
				<div className='flex justify-between items-center mx-4 px-1 sm:px-4 py-3 lg:py-5 border-b  border-secondary-400 dark:border-primary-400'>
					<div className='flex'>
						<Link href='/' className='text-3xl sm:text-4xl font-semibold mr-12'>
							Anna Zientara
						</Link>

						<ul className='hidden lg:flex justify-center items-center  gap-8 '>
							{navLinks.map((link, index) => (
								<NavLink key={index} link={link} />
							))}
						</ul>
					</div>

					<div className='flex gap-4'>
						<ThemeToggler className='hidden lg:block' />
						<div className='lg:hidden'>
							<Hamburger toggled={isOpen} toggle={setOpen} distance='sm' label='Otwórz menu' />
						</div>
					</div>
				</div>
			</nav>
			{<MobileMenu isOpen={isOpen} links={navLinks} onLinkClick={handleLinkClick} />}
		</>
	)
}

export default Navbar
