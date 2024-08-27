import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BaseLink = (props:{href:string, children:React.ReactNode, className?:string}) => {
	return (
		<Link href={props.href} className={`text-xl uppercase flex  items-center gap-2 group ${props.className}`}>
			{props.children} <ArrowRight className='w-4 group-hover:translate-x-2 duration-300' />
		</Link>
	)
}

export default BaseLink
