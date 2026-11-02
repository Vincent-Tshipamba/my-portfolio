'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const [isOpen, openMobileMenu] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
            <Link className="font-bold text-lg" href="/">
                Vincent Tshipamba
            </Link>
            <div className="hidden md:flex items-center gap-6 ml-7">
                <Link href="/" className={`${pathname == '/' ? 'font-bold' : ''} relative overflow-hidden h-6 group`}>
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
                    <span
                        className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Home</span>
                </Link>
                <Link href="/projects" className={`${pathname == '/projects' ? 'font-bold' : ''} relative overflow-hidden h-6 group`}>
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                    <span
                        className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                </Link>
                <Link href="/about" className={`${pathname == '/about' ? 'font-bold' : ''} relative overflow-hidden h-6 group`}>
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                    <span
                        className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
                </Link>
                <Link href="/diplomas" className={`${pathname == '/diplomas' ? 'font-bold' : ''} relative overflow-hidden h-6 group`}>
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Diplomas</span>
                    <span
                        className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Diplomas</span>
                </Link>
                <Link href="/trainings" className={`${pathname == '/trainings' ? 'font-bold' : ''} relative overflow-hidden h-6 group`}>
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Trainings</span>
                    <span
                        className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Trainings</span>
                </Link>
            </div>

            <div className="hidden ml-14 md:flex items-center gap-4">
                <button
                    className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                    <Link href='/contact'>Contact</Link>
                </button>
                <button
                    className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                    Get Started
                </button>
            </div>
            <button onClick={() => openMobileMenu(!isOpen)} id="menuToggle" className="md:hidden text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div id="mobileMenu" className={`absolute ${!isOpen ? 'hidden' : 'flex'} top-16 text-base bg-black flex-col w-full left-0 items-center gap-4`}>
                <a className="hover:text-indigo-600" href="#">
                    Products
                </a>
                <a className="hover:text-indigo-600" href="#">
                    Customer Stories
                </a>
                <a className="hover:text-indigo-600" href="#">
                    Pricing
                </a>
                <a className="hover:text-indigo-600" href="#">
                    Docs
                </a>
                <button
                    className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                    Contact
                </button>
                <button
                    className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                    Get Started
                </button>
            </div>
        </nav>
    )
}