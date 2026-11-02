import Navigation from "@/components/Navigation";
import styles from './page.module.css'
import Footer from "@/components/Footer";
import { trainingData } from "@/data/data";
import Image from "next/image";

export default function Trainings() {
    return (<>
        <section id="courses" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="code-font text-green-400">&lt;</span>
                    <span className="gradient-text">My Courses</span>
                    <span className="code-font text-green-400">/&gt;</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        trainingData.map((training, index) => (
                            <div key={`${index} - ${training.id}`} className="course-card rounded-xl p-6 relative">
                                <div className="mb-4 max-w-md">
                                    <Image src={training.image} width={300} height={300} alt={`${training.title} image`}/>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-green-400">{training.title}</h3>
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
                                <div className="text-sm text-gray-400">
                                    <i className="fas fa-calendar mr-2"></i>Duration: 6 months
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>)
}