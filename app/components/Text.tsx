import React from 'react'

const Text = (props: { children: React.ReactNode }) => {
	return <p className='leading-relaxed text-gray-500 dark:text-gray-400 text-lg'>{props.children}</p>
}

export default Text
