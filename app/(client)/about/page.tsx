import type { Metadata } from 'next'
import Navbar from '@/app/components/nav/Navbar'

export const metadata: Metadata = {
	title: 'O mnie | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function About() {
	return (
		<>
			<header className=''>
				<Navbar/>
			</header>

			<main className='mt-32'>
				<p className='font-heading text-8xl'>o mnie</p>
			</main>
		</>
	)
}
