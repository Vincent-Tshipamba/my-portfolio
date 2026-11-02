import ProjectDetailContent from "@/components/ProjectDetailContent"
import { projectsData } from "@/data/data"
import { notFound } from "next/navigation"


export default async function ProjectDetail({ params }) {
    const { slug } = await params
    // Next.js passe automatiquement le slug dans params
    const project = projectsData.find((project => project.slug === slug))
    // Si le projet n'existe pas, afficher un message
    if (!project) {
        notFound()
    }

    return (
        <ProjectDetailContent project={project} />
    )
}

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug
    }))
}