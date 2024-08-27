import Header from '@/app/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'O mnie | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function About() {
	return (
		<>
			<Header />

			<main className='mt-32'>
				<p className='font-heading text-8xl'>o mnie</p>
			</main>
		</>
	)
}
