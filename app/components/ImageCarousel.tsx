'use client'

import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import FsLightbox from 'fslightbox-react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const ImageCarousel = (props: { images: Array<{ asset: { _ref: string } }> }) => {
	const [toggler, setToggler] = useState(false)
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)

	const handleSlideClick = (index: number) => {
		setSelectedImageIndex(index)
		setToggler(!toggler)
	}

	const images = props.images.map(image => urlFor(image.asset._ref).url())

	return (
		<>
			{images.length > 2 && images.length < 5 && (
				<div className={`flex justify-center flex-wrap items-center  gap-12 mx-12`}>
					{images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Zdjęcie ${index + 1}`}
							className='object-cover w-full h-full cursor-pointer aspect-square max-w-[500px]'
							onClick={() => handleSlideClick(index + 1)}
							width={500}
							height={500}
						/>
					))}
				</div>
			)}

			{images.length > 5 && (
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
							<Image
								src={image}
								alt={`Zdjęcie ${index + 1}`}
								className='object-cover w-full h-full cursor-pointer'
								onClick={() => handleSlideClick(index + 1)}
								width={500}
								height={500}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<FsLightbox toggler={toggler} sources={images} slide={selectedImageIndex} />
		</>
	)
}

export default ImageCarousel
