"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-commerce Gaming Site",
    description:
      "Game E-commerce site with Animated user interface and can purchase games using crypto payments.",
    techStack: ["Next.js", "Superbase", "Cryptomus", "Spline"],
    liveUrl: "https://game-site-eight-kappa.vercel.app/",
    githubUrl: "https://github.com/lahiru321/GameSite",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    number: "01",
  },
  {
    title: "Wealth Management App",
    description:
      "Personal finance management application that helps users track expenses and get recommendations through AI for better financial health.",
    techStack: ["Next.js", "Node.js", "MongoDB", "AWS bedrock", "AWS Beanstalk"],
    liveUrl: "https://wealth-managment-app.vercel.app/",
    githubUrl: "https://github.com/lahiru321/wealth-managment-app",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    number: "02",
  },
  {
    title: "Zentry",
    description:
      "Zentry is a single-page marketing/landing site for a metagame product. It uses plain HTML, CSS and a small app.js script. The site includes a hero video, info cards with autoplay videos, and a contact section.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://zentry-gaming-site.vercel.app/",
    githubUrl: "https://github.com/lahiru321/Zentry-gaming-site",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    number: "03",
  },
    {
    title: "Clothing Website",
    description:
      "Fully Functionl clothing website Where users can buy clothes online and admins can manage the website using admin dashboard.",
    techStack: ["Next.js", "NodeJs", "Superbase", "MongoDB", "Vercel", "Render"],
    liveUrl: "",
    githubUrl: "https://github.com/lahiru321/rainvidz-clothing-website",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    number: "04",
  }
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        {/* Projects List - Editorial Style */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Container */}
              <div className="relative glass-strong rounded-3xl p-8 sm:p-10 lg:p-12 border border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:scale-[1.01]">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10`} />

                <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Side - Number & Links */}
                  <div className="lg:col-span-2 flex lg:flex-col items-start gap-6">
                    {/* Project Number */}
                    <div className={`text-8xl sm:text-9xl font-bold bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity leading-none`}>
                      {project.number}
                    </div>

                    {/* Action Links - Vertical on Desktop */}
                    <div className="hidden lg:flex flex-col gap-3 mt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-xl hover:glass-strong transition-all hover:scale-110 group/link"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-xl hover:glass-strong transition-all hover:scale-110 group/link"
                      >
                        <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Middle - Content */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack - Inline Pills */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-full glass-strong text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default ${hoveredIndex === index ? 'animate-scale-in' : ''
                            }`}
                          style={{
                            animationDelay: hoveredIndex === index ? `${techIndex * 0.05}s` : '0s'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="flex lg:hidden gap-3 pt-4">
                      <Button
                        size="lg"
                        asChild
                        className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-xl transition-all border-0`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="glass hover:glass-strong transition-all border-primary/30"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right Side - CTA Arrow (Desktop Only) */}
                  <div className="hidden lg:flex lg:col-span-3 items-center justify-end">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/arrow p-6 rounded-2xl bg-gradient-to-br ${project.gradient} hover:scale-110 transition-all duration-300 hover:shadow-2xl`}
                    >
                      <ArrowUpRight className="w-8 h-8 text-white group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="glass-strong hover:glass hover:scale-105 transition-all group border-primary/30"
          >
            <a href="https://github.com/lahiru321" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
