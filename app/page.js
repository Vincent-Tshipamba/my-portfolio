import Image from "next/image";
import Tags from "../components/Tags";
import VincentPic from "../public/vini.jpg"
import './page.module.css'

export default function Home() {
  const tags = [
    'Next.js',
    'React.js',
    'Javascript',
    'PHP',
    'Tailwindcss',
    'Livewire',
    'Laravel'
  ]

  return (
    <section className="py-28">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold leading-tight">
            Web Developer and Network Administrator
          </h1>
          <div className="text-2xl md:text-3xl text-cyan-200 mb-8">
            <div id="typing-text" className="h-12">Coding the Future, Mastering the Web</div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            I&apos;m a senior mobile and full-stack developer with 9+ years of experience
            building high-performance applications across mobile and web.
            I specialize in React Native, React, and modern system architecture.
          </p>

          <div className="flex gap-4">
            <a href="#contact"
              className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium">
              Contact Me
            </a>
            <a href="#projects"
              className="px-6 py-3 border border-gray-300 rounded-lg text-sm">
              View my projects
            </a>
          </div>
        </div>

        <Image
          src={VincentPic}
          alt="Profile"
          width={500}
          height={360}
          preload={true}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex space-x-2 justify-center list-none">
        {tags.map((tag, index) => (
          <Tags key={`${index} - ${tag}`} tag={tag} />
        ))}
      </div>
    </section>
  );
}
