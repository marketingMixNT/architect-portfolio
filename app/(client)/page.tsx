import type { Metadata } from 'next'


import DummyImage from '@/public/assets/hero.webp'
import Image from 'next/image'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import Text from '../components/Text'
import BaseLink from '../components/BaseLink'
import Link from 'next/link'
import Header from '../components/home/Header'


export const metadata: Metadata = {
	title: 'Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Home() {
	return (
		<>
			<Header />

			<main id='o-mnie'>
				<Section>
					<Wrapper className=' grid lg:grid-cols-2 gap-20 '>
						<div className='flex flex-col justify-between items-start gap-12 lg:gap-0 py-12'>
							<div className='space-y-5 w-[75%]'>
								<Subheading>Main</Subheading>
								<Heading>About</Heading>
								<Text>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta
									molestias vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti
									blanditiis nihil consectetur. Labore, aliquid?
								</Text>
							</div>
							<BaseLink href='/o-mnie'>Zobacz</BaseLink>
						</div>
						<div className='flex justify-end '>
							<Image src={DummyImage} alt='hero' className='aspect-square  ' loading='lazy' />
						</div>
					</Wrapper>
				</Section>

				<Section>
					<Wrapper className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-28'>
						<div className='  p-12 text-center sm:text-left'>
							<span className='text-7xl uppercase'>10+</span>
							<hr className='' />
							<p className='pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className=' p-12 text-center sm:text-left'>
							<span className='text-7xl uppercase'>10+</span>
							<hr className='' />
							<p className='pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className=' p-12 text-center sm:text-left'>
							<span className='text-7xl uppercase'>10+</span>
							<hr className='' />
							<p className='pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className=' p-12 text-center sm:text-left'>
							<span className='text-7xl uppercase'>10+</span>
							<hr className='' />
							<p className='pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
					</Wrapper>
				</Section>

				<div className=" w-full h-[500px] bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')] bg-center bg-cover bg-no-repeat sm:bg-fixed bg-blend-multiply bg-gray-300 flex justify-center items-center relative"></div>

				<Section>
					<Wrapper>
						<div className='space-y-5 w-[75%]'>
							<Subheading>Main</Subheading>
							<Heading>About</Heading>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-28 pt-16'>
							<div className='space-y-4'>
								<h2 className='text-3xl'>Residential Design</h2>
								<Text>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis repudiandae dolores in
									culpa, eveniet atque cum perspiciatis totam est.
								</Text>
							</div>
							<div className='space-y-4'>
								<h2 className='text-3xl'>Residential Design</h2>
								<Text>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis repudiandae dolores in
									culpa, eveniet atque cum perspiciatis totam est.
								</Text>
							</div>
							<div className='space-y-4'>
								<h2 className='text-3xl'>Residential Design</h2>
								<Text>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis repudiandae dolores in
									culpa, eveniet atque cum perspiciatis totam est.
								</Text>
							</div>
						</div>
					</Wrapper>
				</Section>

				<Section>
					<Wrapper className=' grid lg:grid-cols-2 gap-20 '>
						<div className='flex justify-start items-center'>
							<Image src={DummyImage} alt='hero' className='aspect-square max-h-[550px] ' loading='lazy' />
						</div>
						<div className='flex flex-col justify-between items-start gap-12 lg:gap-0 '>
							<div className='space-y-5 w-[75%]'>
								<Subheading>Main</Subheading>
								<Heading>About</Heading>
								<ul className='space-y-8'>
									<li>
										<div className='border-b border-gray-300 pb-4 space-y-2'>
											<h2 className='text-2xl'>Lorem, ipsum.</h2>
											<Text>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta
												molestias vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti
												blanditiis nihil consectetur. Labore, aliquid?
											</Text>
										</div>
									</li>
									<li>
										<div className='border-b border-gray-300 pb-4 space-y-2'>
											<h2 className='text-2xl'>Lorem, ipsum.</h2>
											<Text>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta
												molestias vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti
												blanditiis nihil consectetur. Labore, aliquid?
											</Text>
										</div>
									</li>
									<li>
										<div className='border-b border-gray-300 pb-4 space-y-2'>
											<h2 className='text-2xl'>Lorem, ipsum.</h2>
											<Text>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam explicabo dolores tempora dicta
												molestias vel? Numquam repudiandae voluptates est, quisquam omnis eos fuga eligendi deleniti
												blanditiis nihil consectetur. Labore, aliquid?
											</Text>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</Wrapper>
				</Section>

				<Section>
					<Wrapper className=''>
						<Subheading>Our</Subheading>
						<Heading>Projekty</Heading>
						<div className='space-y-12'>
							<div className='flex flex-col lg:flex-row py-8 border-b border-gray-300 max-w-screen-xl mx-auto gap-12'>
								<Image src={DummyImage} alt='hero' className='aspect-video  lg:w-1/2' loading='lazy' />
								<div className=' flex flex-col justify-between lg:w-1/2'>
									<div className='space-y-4 w-[70%]'>
										<h2 className='text-3xl'>Projekt</h2>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt
											harum omnis, molestias quo blanditiis est.
										</Text>
									</div>

									<BaseLink href='/o-mnie' className='lg:self-end pt-6 lg:pt-0'>Zobacz</BaseLink>
								</div>
							</div>
							<div className='flex flex-col lg:flex-row py-8 border-b border-gray-300 max-w-screen-xl mx-auto gap-12'>
								<Image src={DummyImage} alt='hero' className='aspect-video  lg:w-1/2' loading='lazy' />
								<div className=' flex flex-col justify-between lg:w-1/2'>
									<div className='space-y-4 w-[70%]'>
										<h2 className='text-3xl'>Projekt</h2>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt
											harum omnis, molestias quo blanditiis est.
										</Text>
									</div>

									<BaseLink href='/o-mnie' className='lg:self-end pt-6 lg:pt-0'>Zobacz</BaseLink>
								</div>
							</div>
							<div className='flex flex-col lg:flex-row py-8 border-b border-gray-300 max-w-screen-xl mx-auto gap-12'>
								<Image src={DummyImage} alt='hero' className='aspect-video  lg:w-1/2' loading='lazy' />
								<div className=' flex flex-col justify-between lg:w-1/2'>
									<div className='space-y-4 w-[70%]'>
										<h2 className='text-3xl'>Projekt</h2>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt
											harum omnis, molestias quo blanditiis est.
										</Text>
									</div>

									<BaseLink href='/o-mnie' className='lg:self-end pt-6 lg:pt-0'>Zobacz</BaseLink>
								</div>
							</div>
						</div>
					</Wrapper>
				</Section>

				<Section>
				<Wrapper className=' grid lg:grid-cols-2 gap-20 '>
						
						<div className='flex flex-col justify-between items-start gap-12 lg:gap-0 '>
							<div className='space-y-5 w-[75%]'>
								<Subheading>Our</Subheading>
								<Heading>Kontakt</Heading>
								
								<div>
									<h2>Telefon</h2>
									<Link href="#">+48 555 444 444</Link>
								</div>

								<div>
									<h2>Email</h2>
									<Link href="#">test@test.com</Link>
								</div>

								<div>
									<h2>Adres</h2>
									<Link href="#">Testowa 123, 34-400 Test</Link>
								</div>
								<div>
									<h2>Social Media</h2>
									<ul className='flex gap-4'>
										<li><Link href="#">F</Link></li>
										<li><Link href="#">F</Link></li>
										<li><Link href="#">F</Link></li>
									</ul>
									
								</div>

							</div>
						</div>
						<div className='flex justify-start items-center'>
							<Image src={DummyImage} alt='hero' className='aspect-square max-h-[550px] ' loading='lazy' />
						</div>
					</Wrapper>
				</Section>
			</main>
		</>
	)
}
