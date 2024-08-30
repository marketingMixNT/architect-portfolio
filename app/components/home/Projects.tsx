import React from 'react'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Subheading from '@/app/components/Subheading'
import Heading from '@/app/components/Heading'
import ProjectCard from '@/app/components/ProjectCard'
import { Project } from '@/sanity/lib/interface'

// const projects = [
// 	{
// 		title: 'Projekt',
// 		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
// 	},
// 	{
// 		title: 'Projekt',
// 		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
// 	},
// 	{
// 		title: 'Projekt',
// 		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates animi id a nesciunt harum omnis, molestias quo blanditiis est.',
// 	},
// ]

const Projects = (props:{projects:Project[]}) => {
	return (
		<Section className='pt-12 pb-12'>
			<Wrapper>
				<div className='space-y-5'>
					<Subheading>Our</Subheading>
					<Heading>Projekty</Heading>
				</div>

				<div className='space-y-12 pt-20'>
					{props.projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</Wrapper>
		</Section>
	)
}

export default Projects
