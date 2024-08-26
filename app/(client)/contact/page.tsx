import type { Metadata } from 'next'
import Navbar from '@/app/components/nav/Navbar'

export const metadata: Metadata = {
	title: 'Kontakt |Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Contact() {
	return (
		<>
			<header>
				<Navbar/>
			</header>

			<main className='mt-32'>
				<p className='font-heading text-8xl'>kontakt</p>
			</main>
		</>
	)
}
