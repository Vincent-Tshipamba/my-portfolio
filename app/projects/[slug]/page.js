import ProjectDetailContent from "@/components/ProjectDetailContent"
import { projectsData } from "@/data/data"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
    const { slug } = await params
    const project = projectsData.find((project) => project.slug === slug)
    if (!project) return title = 'Project not found'

    return {
        title: ` Project ${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: `Project ${project.title}`,
            description: project.description,
            images: [project.image]
        }
    }


}

export default async function ProjectDetail({ params }) {
    const { slug } = await params
    // Next.js passe automatiquement le slug dans params
    const project = projectsData.find((project => project.slug === slug))
    // Si le projet n'existe pas, afficher un message
    if (!project) {
        notFound()
    }

    return (
        <div className="p-5">
            <ProjectDetailContent project={project} />
        </div>
    )
}

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug
    }))
}