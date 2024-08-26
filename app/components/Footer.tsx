import Link from 'next/link'
import React from 'react'

import mmDark from '@/public/assets/icons/mm--dark.svg'
import mmLight from '@/public/assets/icons/mm--light.svg'
import Image from 'next/image'

const navLinks = [
	{ href: '/o-mnie', label: 'O mnie' },
	{ href: '/proces-projektowy', label: 'Proces projektowy' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#kontakt', label: 'Kontakt' },
]

const Footer = () => {
const currentYear = new Date().getFullYear()

	return (
		<footer>
			{/* container */}
			<div className='max-w-screen-xl mx-auto pt-20  pb-6 space-y-6 md:space-y-12 px-12 lg:px-6 2xl:px-0'>

<div className='flex flex-col md:flex-row w-full justify-between items-center  pb-6 gap-12 md:gap-0'>


				<div className=' flex flex-col text-center md:text-left items-start gap-2 max-w-[250px] lg:max-w-[300px]'>
					<Link href='/' className='text-5xl font-semibold '>
						Anna Zientara
					</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias accusamus possimus!</p>
         
				</div>

				<div className='hidden lg:flex flex-col' >
					<ul className='space-y-3'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link href={link.href} className='text-xl  uppercase'>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

        <div className='text-center md:text-left '>
          <h2 className='text-xl  uppercase mb-3'>Kontakt</h2>
          <ul className='space-y-1'>
            <li>  <Link href="#">+48 123 456 789</Link></li>
            <li> <Link href="#">test@gmail.com</Link></li>
          </ul>
        
         
        </div>

        <div className=' flex flex-col'>
          <h2 className='text-xl  uppercase mb-3'>Social Media</h2>
         <ul className='flex justify-center md:justify-start items-center gap-4'>
          <li><Link href="#">F</Link></li>
          <li><Link href="#">I</Link></li>
          <li><Link href="#">L</Link></li>
         </ul>
        </div>

			</div>

<hr className='border-secondary-400 dark:border-primary-400 w-full ' />

<div className='flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between gap-6'>
<Link href="#">Polityka Prywatności</Link>
<p>© {currentYear} </p>
<Link href="#">
<Image src={mmLight} alt="MarketingMix" className='hidden dark:block w-36' />
<Image src={mmDark} alt="MarketingMix" className='block dark:hidden w-36' />
</Link>
</div>
      </div>
		</footer>
	)
}

export default Footer


