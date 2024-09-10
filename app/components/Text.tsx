import React from 'react'

const Text = (props: { children: React.ReactNode; small?: boolean }) => {
	return (
		<p className={`leading-relaxed text-gray-500 dark:text-gray-400 ${props.small ? 'text-base' : 'text-lg'}`}>
			{props.children}
		</p>
	)
}

export default Text
