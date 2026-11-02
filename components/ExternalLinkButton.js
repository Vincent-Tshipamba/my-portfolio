'use client'
import { motion } from "motion/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ExternalLinkButton({ slug }) {
    return (
        <motion.div whileHover={{ scale: 1.02 }}>
            <Button variant="outline" className="w-full gap-2 bg-transparent">
                <Link className="flex space-x-2" href={`/projects/${slug}`}>
                    View details
                    <ExternalLink className="h-4 w-4" />
                </Link>
            </Button>
        </motion.div>
    )
}