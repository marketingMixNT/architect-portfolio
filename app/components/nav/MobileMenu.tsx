import React from 'react'
import NavLink from './NavLink'
import ThemeToggler from './ThemeToggler';

const socialItems = [
	{ href: '#',  label: 'Facebook' },
	{ href: '#',  label: 'Instagram' },
	{ href: '#',  label: 'Linkedin' },
  ]

const MobileMenu = (props: { isOpen: boolean; links: { href: string; label: string }[]; onLinkClick: () => void }) => {
	return (
		<div
			className={`lg:hidden fixed top-[72px] right-0 left-0 bottom-0  w-full bg-primary-400 dark:bg-secondary-400  ${
				props.isOpen ? 'translate-x-0' : 'translate-x-[100%]'
			}   z-50 duration-500 transition-transform`}>
			<div className='absolute top-6 right-6'><ThemeToggler /></div>
			<div className='flex flex-col justify-center h-full  items-center gap-8'>
				<ul className='flex flex-col justify-center  items-center gap-12 sm:gap-16 mb-6'>
					{props.links.map((link, index) => (
						<NavLink link={link} key={index} onClick={props.onLinkClick} />
					))}
				</ul>
				<ul className='absolute bottom-6 left-0 right-0 flex justify-around'>
					{socialItems.map((item, index) => (
						<li key={index}>
							<a href={item.href} className='text-xs'>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu
