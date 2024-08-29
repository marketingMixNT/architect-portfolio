'use client'

import { FC, useState } from 'react'
import Header from '@/app/components/Header'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Text from '@/app/components/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import FsLightbox from 'fslightbox-react'

const images = [
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
	'http://localhost:3000/assets/hero.webp',
]

export const Project: FC<{ name: string }> = ({ name }) => {
	const [toggler, setToggler] = useState(false)
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)

	const handleSlideClick = (index: number) => {
		setSelectedImageIndex(index)
		setToggler(!toggler)
	}

	

	return (
		<div className='App'>
			<Header image="bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')]" title="Nazwa projektu" />

			<main>
				<Section className='pt-12 sm:pt-24 pb-12 sm:pb-24'>
					<Wrapper className='flex flex-col lg:flex-row gap-y-12'>
						<div className='w-full lg:w-[55%] flex flex-col gap-y-12 relative justify-center items-center'>
							<div className='overflow-hidden'>
								<img
									src={images[0]}
									alt='zdjęcie przedstawiajaące '
									className='w-full sticky top-12 aspect-square max-w-[500px] 2xl:max-w-[550px] object-cover scale-hover'
									loading='lazy'
								/>
							</div>
							<div className='overflow-hidden'>
								<img
									src={images[1]}
									alt='zdjęcie przedstawiajaące '
									className='w-full sticky top-12 aspect-square max-w-[500px] 2xl:max-w-[550px] object-cover scale-hover'
									loading='lazy'
								/>
							</div>
						</div>
						<div className='relative w-full lg:w-[45%] lg:pl-12 prose'>
							<div className='sticky top-32'>
								<Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla voluptates sapiente corrupti
									itaque, ratione dignissimos voluptatum rerum qui at aperiam pariatur, tempora, dolores nostrum
									architecto eius ea omnis beatae quo? Cupiditate repellat fuga, voluptate ipsum asperiores delectus
									quibusdam, reiciendis necessitatibus alias dolore dolor minima quod, at dignissimos corporis id ex
									beatae suscipit? Quas debitis dignissimos fuga, excepturi odio repellat facilis autem iure porro ex id
									recusandae. Ipsum voluptas nostrum veniam eaque vitae corrupti error quis est sed natus, mollitia
									saepe reiciendis, voluptatem accusantium recusandae voluptates harum nisi placeat rerum illum dicta.
									Voluptatem delectus dolor fuga similique nemo, reiciendis architecto.
								</Text>
								<Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla voluptates sapiente corrupti
									itaque, ratione dignissimos voluptatum rerum qui at aperiam pariatur, tempora, dolores nostrum
									architecto eius ea omnis beatae quo? Cupiditate repellat fuga, voluptate ipsum asperiores delectus
									quibusdam, reiciendis necessitatibus alias dolore dolor minima quod, at dignissimos corporis id ex
									beatae suscipit? Quas debitis dignissimos fuga, excepturi odio repellat facilis autem iure porro ex id
									recusandae. Ipsum voluptas nostrum veniam eaque vitae corrupti error quis est sed natus, mollitia
									saepe reiciendis, voluptatem accusantium recusandae voluptates harum nisi placeat rerum illum dicta.
									Voluptatem delectus dolor fuga similique nemo, reiciendis architecto.
								</Text>
							</div>
						</div>
					</Wrapper>
					<div className='pt-20 lg:pt-32'>
						<Swiper
						
							slidesPerView={1}
							spaceBetween={40}
							breakpoints={{
								640: {
									slidesPerView: 2,
									
								},

								1000: {
									slidesPerView: 3,
									
								},
								1350: {
									slidesPerView: 4,
									
								},
								1600: {
									slidesPerView: 5,
									
								},
							}}
							
							
							grabCursor={true}

							autoplay={{
								delay: 3000,
								disableOnInteraction: true,
							  }}
						
							modules={[Autoplay]}
							className='w-full h-96'>
							{images.map((image, index) => (
								<SwiperSlide key={index}>
									<img
										src={image}
										alt={`Zdjęcie ${index + 1}`}
										className='object-cover w-full h-full cursor-pointer'
										onClick={() => handleSlideClick(index)}
									/>
								</SwiperSlide>
							))}
						</Swiper>

						<FsLightbox toggler={toggler} sources={images} slide={selectedImageIndex} />
					</div>
				</Section>
			</main>
		</div>
	)
}

export default Project
