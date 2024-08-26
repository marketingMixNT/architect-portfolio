import type { Metadata } from 'next'
import Navbar from '@/app/components/nav/Navbar'

export const metadata: Metadata = {
	title: 'Proces projektowy | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Process() {
	return (
		<>
			<header>
				<Navbar/>
			</header>

			<main>
				<p className='font-heading text-8xl'>Proces projektowy</p>
			</main>
		</>
	)
}
