import React from 'react'
import Text from './Text'

const OverwievCard = (props: { title: string; desc: string }) => {
	return (
		<div className='p-6 xs:p-12 text-center sm:text-left '>
			<h2 className='text-6xl uppercase '>{props.title}</h2>
			<hr className='border-gray-400 mb-3 mt-1' />

			<Text>{props.desc}</Text>
		</div>
	)
}

export default OverwievCard
