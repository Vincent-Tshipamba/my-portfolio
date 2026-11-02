import { trainingData } from "@/data/data"
import { notFound } from "next/navigation"
import TrainingDetailContent from "@/components/TrainingDetailContent";


export default async function TrainingDetails({ params }) {
    const { slug } = await params

    const training = trainingData.find((training) => training.slug === slug)
    if (!training) notFound()

    
    return (
        <TrainingDetailContent training={training} />
    )
}

export function generateStaticParams() {
    return trainingData.map((training) => ({
        slug: training.slug
    }))
}