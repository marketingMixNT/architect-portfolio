import type { Metadata } from 'next'
import Navbar from '@/app/components/nav/Navbar'

export const metadata: Metadata = {
	title: 'Portfolio | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Portfolio() {
	return (
		<>
			<header>
				<Navbar/>
			</header>

			<main className='mt-32'>
				<p className='font-heading text-8xl'>portfolio</p>
			</main>
		</>
	)
}
