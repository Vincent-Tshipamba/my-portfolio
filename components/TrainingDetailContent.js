'use client'
import { motion, useInView } from "motion/react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import '@/app/trainings/page.module.css'
import { useRef } from "react"
import Link from "next/link"

export default function TrainingDetailContent({ training }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <Link href={`/trainings/${training.slug}`}>
            <motion.div className="course-card rounded-xl p-6 relative"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden group hover:shadow-xl transition-shadow h-full">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <CardHeader>
                        <div className="mb-4 max-w-md">
                            <motion.div
                                className="relative aspect-video overflow-hidden bg-muted"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image src={training.image} width={300} height={300} alt={`${training.title} image`} />
                                <motion.div
                                    className="absolute inset-0 bg-primary/20"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>
                        <CardTitle>
                            <h3 className="text-2xl font-bold mb-3 text-green-400">{training.title}</h3>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Progress</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="progress-bar h-2 rounded-full" style={{ width: 85 }}></div>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4">
                            {training.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {training.tags.map((tag, index) => (
                                <span key={`${index} - ${tag}`} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="text-sm text-gray-400">
                            <i className="fas fa-calendar mr-2"></i>Duration: 6 months
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </Link>
    )
}