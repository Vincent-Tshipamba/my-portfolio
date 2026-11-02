import Navigation from "@/components/Navigation";
import { trainingData } from "@/data/data";
import TrainingDetailContent from "@/components/TrainingDetailContent";

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
                            <TrainingDetailContent key={training.id} training={training} />
                        ))
                    }
                </div>
            </div>
        </section>
    </>)
}