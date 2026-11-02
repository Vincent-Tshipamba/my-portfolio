import { projectsData } from "@/data/data";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import ExternalLinkButton from "@/components/ExternalLinkButton";

export const metadata = {
    title: 'My projects | Portfolio',
    description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
}

export default function Projects() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-6 p-4">
                {projectsData.map((project, index) => (
                    <ProjectDetailContent key={project.id} project={project}>
                        <ExternalLinkButton slug={project.slug} />
                    </ProjectDetailContent>
                ))}
            </div>
        </>
    )
}