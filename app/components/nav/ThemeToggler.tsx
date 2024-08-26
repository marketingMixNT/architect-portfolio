'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = (props: { className?: string }) => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<button
			className={`border border-transparent hover:border-black p-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-10 duration-500 ${props.className}`}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? '🌞' : '🌙'}
		</button>
	)
}

export default ThemeToggler