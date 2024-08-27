import React from 'react'
import Link from 'next/link'

import NavLink from '@/app/components/nav/NavLink'
import ThemeToggler from '@/app/components/nav/ThemeToggler'

const socialItems = [
	{ href: '#', label: 'Facebook' },
	{ href: '#', label: 'Instagram' },
	{ href: '#', label: 'Linkedin' },
]

const MobileMenu = (props: { isOpen: boolean; links: { href: string; label: string }[]; onLinkClick: () => void }) => {
	return (
		<nav
			className={`lg:hidden fixed top-[72px] right-0 left-0 bottom-0  w-full bg-primary-400 dark:bg-secondary-400   transition-transform duration-500 z-50  ${
				props.isOpen ? 'translate-x-0' : 'translate-x-[100%]'
			}   `}>
			<div className='absolute top-6 right-6'>
				<ThemeToggler />
			</div>
			<div className='flex flex-col justify-center items-center h-full gap-8'>
				<ul className='flex flex-col justify-center items-center gap-12 sm:gap-16 mb-6'>
					{props.links.map((link, index) => (
						<NavLink key={index} link={link} onClick={props.onLinkClick} mobile />
					))}
				</ul>
				<ul className='absolute bottom-6 left-0 right-0 flex justify-around text-fontDark dark:text-fontLight'>
					{socialItems.map((item, index) => (
						<li key={index}>
							<Link
								href={item.href}
								className='text-xs hover:scale-110 duration-500'
								target='_blank'
								rel='noreferrer nofollow'>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default MobileMenu
