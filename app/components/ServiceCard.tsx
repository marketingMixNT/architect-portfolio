import React from 'react'
import Text from './Text'

const ServiceCard = (props:{title:string,desc:string}) => {
	return (
		<div className='space-y-4'>
			<h2 className='text-3xl w-1/2'>{props.title}</h2>
			<Text>
				{props.desc}
			</Text>
		</div>
	)
}

export default ServiceCard
