import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/lib/interface'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    async function getProjects() {
        const query = `
        *[_type == "project"] | order(_createdAt desc) {
          title,
          "slug":slug.current,
          thumbnail,
          excerpt,
        }
        `
        const data = await client.fetch(query)
        return data
    }

    const projects: Project[] = await getProjects()

    const projectUrls = projects.map((project) => ({
        url: `/portfolio/${project.slug}`,
        lastModified: new Date(),
      }))

	return [
		{
			url: '/',
			lastModified: new Date(),
		},
		{
			url: '/proces-projektowy',
			lastModified: new Date(),
		},
		{
			url: '/portfolio',
			lastModified: new Date(),
		},
        ...projectUrls,
	]
}