import type { Metadata } from 'next'

import Header from '@/app/components/Header'

export const metadata: Metadata = {
	title: 'Proces projektowy | Anna Zientara',
	description: 'Meta desc Anna Zientara',
}

export default function Process() {
	return (
		<>
			<Header
				image="bg-[url('/assets/hero--mobile.webp')] sm:bg-[url('/assets/hero.webp')]"
				title='Proces projektowy'
			/>

			<main className='py-20 text-center'>
				<p className='font-heading text-8xl'>Proces projektowy</p>
			</main>
		</>
	)
}
