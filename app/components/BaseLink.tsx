import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BaseLink = (props: { href: string; children: React.ReactNode; className?: string, noArrow?: boolean }) => {
	const linkHover = `relative w-fit  after:block after:content-[''] after:absolute after:bottom-0 after:h-[1px]  after:w-[75%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bg-fontDark dark:after:bg-fontLight`

	return (
		<Link
			href={props.href}
			className={`${props.className} text-xl uppercase flex items-center gap-2 group   ${linkHover}  `}>
			{props.children} {!props.noArrow ? <ArrowRight className={`w-4 group-hover:translate-x-2 duration-300 `} /> : ''}
		</Link>
	)
}

export default BaseLink
