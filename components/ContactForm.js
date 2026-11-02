'use client'
import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulation d'envoi (dans un vrai projet, vous appelleriez une API)
        setStatus('sending')

        setTimeout(() => {
            setStatus('success')

            // Réinitialiser le formulaire
            setFormData({ firstname: '', lastname: '', email: '', message: '' })

            // Masquer le message après 5 secondes
            setTimeout(() => setStatus(''), 5000)
        }, 1500)
    }

    return (
        <>
            <section id="contact" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="orbitron text-5xl font-bold neon-text mb-4">CONTACT</h2>
                        <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="fade-in">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Get In Touch</h3>
                            <p className="text-lg text-gray-300 mb-8">
                                Ready to transform your ideas into reality? Let&apos;s collaborate and build something extraordinary together. Whether you need a cutting-edge web application, mobile solution, or innovative tech consultation, I&apos;m here to help bring your vision to life.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                                        <span className="text-cyan-400 text-xl">📧</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Email</div>
                                        <div className="text-cyan-400">contact=mfuranzizahamza@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                                        <span className="text-cyan-400 text-xl">📱</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Phone</div>
                                        <div className="text-cyan-400">+250 796132866 </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                                        <span className="text-cyan-400 text-xl">📍</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Location</div>
                                        <div className="text-cyan-400">kigali rwanda</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                                        <span className="text-cyan-400 text-xl">💼</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">LinkedIn</div>
                                        <div className="text-cyan-400">https://www.linkedin.com/in/mfuranziza-hamza-898970354/</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-cyan-300 mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">📘</a>
                                    <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">🐦</a>
                                    <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">📷</a>
                                    <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">💻</a>
                                </div>
                            </div>
                        </div>

                        <div className="fade-in">
                            <form className="hologram p-8 rounded-lg space-y-6" onSubmit={handleSubmit}>
                                <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send Message</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-white font-semibold mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-white font-semibold mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 cyber-input rounded-lg" placeholder="Project Discussion" />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">Message</label>
                                    <textarea rows="5" className="w-full px-4 py-3 cyber-input rounded-lg resize-none" placeholder="Tell me about your project..."></textarea>
                                </div>
                                {status && <div>
                                    <span>{status}</span>
                                </div>}
                                <button type="submit" className="w-full py-4 hologram text-xl font-bold neon-text hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105">
                                    {status === 'sending' ? 'Submitting...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}