
import Footer from './components/Footer'

import HeroImage from '@/public/assets/hero.webp'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Section from './components/Section'

import Heading from './components/Heading'
import BaseLink from './components/BaseLink'

const NotFound = () => {
	return (
		<>
			<Header image={HeroImage} title='Strona nie istnieje' />
			<main>
				<Section className='py-12 sm:py-24'>
					<Wrapper>
            <div className='flex flex-col justify-center items-center gap-6'>

						<Heading>404</Heading>
						
            <BaseLink href='/' className='pt-6 lg:pt-0'>
							Wróć do strony głównej
						</BaseLink>
            </div>
					</Wrapper>
				</Section>
			</main>
			<Footer />
		</>
	)
}

export default NotFound
