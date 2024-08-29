import Header from '@/app/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'O mnie | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function About() {
	return (
		<>
			<Header image="bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')]" title='O mnie' />

			<main className='py-20 text-center'>
				<p className='font-heading text-8xl'>o mnie</p>
			</main>
		</>
	)
}
