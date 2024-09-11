'use client'

import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import {useState} from 'react'
import FsLightbox from 'fslightbox-react'

import blur from '@/app/lib/blurDataUrl'




const Gallery = (props: { gallery: Array<{ asset: { _ref: string } }> ,title: string }) => {
    const [toggler, setToggler] = useState(false)
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)

	const handleSlideClick = (index: number) => {
		setSelectedImageIndex(index)
		setToggler(!toggler)
	}

    const gallery = props.gallery.map(image => urlFor(image.asset._ref).url())
    
	return (
		<>
			{gallery.map((image: string, index: number) => (
				<Image
					key={index}
					src={urlFor(image).url()}
					alt={`Zdjęcie przestawiające ${props.title}`}
					className='w-full sticky top-32 aspect-square max-w-[500px] 2xl:max-w-[550px] object-cover shadow-md shadow-gray-700 cursor-pointer mx-auto'
					width={500}
					height={500}
                    onClick={() => handleSlideClick(index + 1)}
                    placeholder='blur'
                    blurDataURL={blur}
				/>
			))}
            <FsLightbox toggler={toggler} sources={gallery} slide={selectedImageIndex} />
		</>
	)
}

export default Gallery
