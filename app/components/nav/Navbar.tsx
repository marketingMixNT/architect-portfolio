'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Sling as Hamburger } from 'hamburger-react'

import NavLink from '@/app/components/nav/NavLink'
import ThemeToggler from '@/app/components/nav/ThemeToggler'
import MobileMenu from '@/app/components/nav/MobileMenu'

const navLinks = [
	{ href: '/o-mnie', label: 'O mnie' },
	{ href: '/proces-projektowy', label: 'Proces projektowy' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#kontakt', label: 'Kontakt' },
]

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const handleLinkClick = () => {
		setOpen(false)
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<nav
				className={` fixed top-0 left-0 right-0  text-fontLight   shadow-2xl shadow-gray-500 dark:shadow-gray-800 transition-all z-50 ${
					isScrolled ? 'bg-primary-600 dark:bg-secondary-400' : ''
				}`}>
				{/* CONTAINER */}
				<div
					className={`max-w-[1800px] mx-auto flex justify-between items-center  px-4 py-3 lg:py-5 border-b  ${
						!isScrolled ? ' border-primary-400 ' : 'border-primary-600 dark:border-secondary-400'
					}`}>
					{/* links */}
					<div className='flex'>
						<Link
							href='/'
							className={`mr-12 text-3xl sm:text-4xl font-semibold  ${
								isScrolled ? 'text-fontDark dark:text-fontLight' : ''
							}`}>
							Anna Zientara
						</Link>

						<ul className='hidden lg:flex justify-center items-center gap-8'>
							{navLinks.map((link, index) => (
								<NavLink key={index} link={link} isScrolled={isScrolled} />
							))}
						</ul>
					</div>
					{/* themeToggler & hamburger */}
					<div className='flex gap-4'>
						<ThemeToggler className='hidden lg:block' isScrolled={isScrolled} />
						<div className={`lg:hidden ${isScrolled ? 'text-fontDark dark:text-fontLight' : ''}`}>
							<Hamburger toggled={isOpen} toggle={setOpen} distance='sm' label='Otwórz menu' />
						</div>
					</div>
				</div>
			</nav>
			<MobileMenu isOpen={isOpen} links={navLinks} onLinkClick={handleLinkClick} />
		</>
	)
}

export default Navbar
