import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Home() {
	return (
		<>
			<p className='font-heading text-8xl'>test</p>
		</>
	)
}
