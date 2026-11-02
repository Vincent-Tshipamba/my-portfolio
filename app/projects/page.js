'use client'
import { useRef, useState } from "react"
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/data";

export default function Projects() {
    const [currentLang, setCurrentLang] = useState("en")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <>
            <div className="grid md:grid-cols-2 gap-6 p-4" ref={ref}>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        custom={index}
                        // variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="overflow-hidden group hover:shadow-xl transition-shadow h-full">
                                <motion.div
                                    className="relative aspect-video overflow-hidden bg-muted"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        loading="eager"
                                        className="object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-muted-foreground">
                                        {currentLang === "en" ? project.description.en : project.description.fr}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <motion.div key={tech} whileHover={{ scale: 1.1 }}>
                                                <Badge variant="secondary">{tech}</Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <motion.div whileHover={{ scale: 1.02 }}>
                                        <Button variant="outline" className="w-full gap-2 bg-transparent">
                                            <Link className="flex space-x-2" href={`/projects/${project.slug}`}>
                                                View details
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </>
    )
}