import React from 'react'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import ProjectCard from '@/app/components/ProjectCard'
import { Project } from '@/sanity/lib/interface'
import BaseLink from '../BaseLink'


const Projects = (props:{projects:Project[]}) => {
	return (
		<Section className='pt-12 pb-12'>
			<Wrapper>
				<div className='space-y-5'>
					<Subheading>Moje</Subheading>
					<Heading>Projekty</Heading>
				</div>

				<div className='space-y-12 pt-20 max-w-screen-2xl mx-auto '>
					{props.projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				<BaseLink href='/portfolio'>Zobacz wszystkie projekty</BaseLink>
				</div>
			</Wrapper>
		</Section>
	)
}

export default Projects
