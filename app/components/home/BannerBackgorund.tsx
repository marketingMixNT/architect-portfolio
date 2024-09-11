import Image from 'next/image'
import React from 'react'

import BannerImg from '@/public/assets/banner.webp'

const BannerBackgorund = () => {
	return (
		<div className=' w-full h-[700px]   shadow-2xl shadow-gray-700 relative'>
			<Image
				src={BannerImg}
			
				alt='Projekt w wykonaniu Anna Zientara'
				className='w-full h-full object-cover '
				fill
				placeholder='blur'
			/>
		</div>
	)
}

export default BannerBackgorund
