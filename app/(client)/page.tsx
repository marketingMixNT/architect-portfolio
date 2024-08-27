import type { Metadata } from 'next'
import Navbar from '@/app/components/nav/Navbar'
import { ArrowDownIcon, } from '../utils/icons'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import DummyImage from '@/public/assets/hero.webp'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Home() {
	return (
		<>
			<header className=" w-full h-screen bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-300 flex justify-center items-center relative">
				<Navbar />

				<div className='sm:h-[70%] 2xl:h-[60%] w-[90%]  flex flex-col md:flex-row justify-between gap-12 sm:gap-0'>
					<div className='xl:w-1/3'>
						<h1 className='text-7xl sm:text-9xl'>Interior Design Studio</h1>
					</div>
					<div className='pl-20 sm:pl-0  xl:w-1/3 2xl:w-1/4 flex flex-col gap-6 justify-end items-end text-end'>
						<p className='text-xl sm:text-3xl'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt accusamus voluptatem?
						</p>
						<button>sprawdź</button>
					</div>
				</div>

				<ArrowDownIcon className='fill-white w-9 sm:w-12 animate-pulse absolute bottom-4 sm:bottom-12 sm:left-[4.6rem]' />
			</header>

			<main>
				<section className='py-20'>
					<div className='max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-20 px-8 sm:px-16'>
						<div className='flex flex-col justify-between items-start gap-12 lg:gap-0'>
							<div className='space-y-5 w-[75%]'>
								<span className='text-xl uppercase'>MAIN</span>
								<h2 className='text-5xl uppercase'>About</h2>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta
									molestias vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti
									blanditiis nihil consectetur. Labore, aliquid?
								</p>
							</div>
							<Link href='/o-mnie' className='text-xl uppercase flex justify-center items-center gap-2 group '>Zobacz <ArrowRight className='w-4 group-hover:translate-x-2 duration-300'/></Link>
						</div>
						<div className='flex justify-end'>
							<Image src={DummyImage} alt='hero' className='aspect-square '  />
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
