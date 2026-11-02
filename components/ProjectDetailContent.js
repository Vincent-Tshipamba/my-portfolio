'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react"
import Image from "next/image";

export default function ProjectDetailContent({ project }) {
    const ref = useRef(null)
    const [currentLang, setCurrentLang] = useState("en")
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            key={project.id}
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
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
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
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}