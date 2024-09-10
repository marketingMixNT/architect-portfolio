import { Rule, validation } from 'sanity'

export const project = {
	name: 'project',
	title: 'Projekt',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Nazwa Projektu',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},

		{
			name: 'thumbnail',
			title: 'Miniaturka',
			type: 'image',
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},
		{
			name: 'imagesGallery',
			type: 'array',
			of: [{ type: 'image' ,options: { hotspot: true }}],
			options: {
				layout: 'grid',
			},
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},
		{
			name: 'excerpt',
			title: 'Krótki opis',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(350).error('Maksymalnie 350 znaków'),
		},
	],
}
