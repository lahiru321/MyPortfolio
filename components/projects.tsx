"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Monitor, Smartphone, Globe, Code, Rocket, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { ProjectTheme } from "@/types/project"
import { PROJECTS_DATA } from "@/constants/projects-data"

const themeColors: Record<ProjectTheme, string> = {
  blue: "bg-secondary",
  cyan: "bg-secondary",
  purple: "bg-primary",
  rose: "bg-primary",
  emerald: "bg-primary",
  teal: "bg-primary",
  orange: "bg-secondary",
}

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
    <section ref={sectionRef} id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid bg-background/50">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
           <div className="cyber-badge mb-4 inline-flex items-center gap-2">
            <Rocket className="w-3 h-3" />
            <span>Active Deployments</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase glitch-text" data-text="Featured Executions">
            Featured Executions
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto uppercase tracking-widest opacity-60">
            &gt; LOADING_PROJECT_MODULES...
          </p>
        </div>

        {/* Projects Grid - Tactical Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => {
            const themeColor = themeColors[project.theme]
            const projectNumber = (index + 1).toString().padStart(2, '0')

            return (
              <div
                key={index}
                className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Module Card */}
                <Card className="h-full relative glass-strong rounded-2xl p-6 border border-primary/20 group-hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col group-hover:scale-[1.02]">
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">[ LIVE_LINK ]</span>
                  </div>

                  {/* Top Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg ${themeColor} bg-opacity-20 flex items-center justify-center p-2.5 shadow-[0_0_10px_rgba(var(--primary),0.2)]`}>
                        <Monitor className="w-full h-full text-foreground" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground opacity-50 uppercase tracking-widest">ID_{projectNumber}</span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-grow mb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Array */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="cyber-badge text-[8px] py-0.5 border-primary/20"
                      >
                        {tech}
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <div className="cyber-badge text-[8px] py-0.5 border-primary/20 opacity-50">+ {project.techStack.length - 4}</div>
                    )}
                  </div>

                  {/* Execution Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 glass group/btn hover:border-primary/50 text-[10px] font-mono uppercase tracking-widest h-9"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Run Demo
                        <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Scanline Effect on Hover */}
                  <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 rounded-tl-lg" />
                </Card>
              </div>
            )
          })}
        </div>

        {/* View All Terminal View */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <div className="inline-flex flex-col items-center gap-4">
             <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em] opacity-50">
                End_of_Transmission
             </div>
             <Button
                size="lg"
                asChild
                className="bg-transparent border border-primary/30 hover:border-primary text-foreground font-mono text-xs uppercase tracking-widest px-10 h-14 rounded-full transition-all hover:glow-blue group"
              >
                <a href="https://github.com/lahiru321" target="_blank" rel="noopener noreferrer">
                  Access_Full_Archive
                  <Github className="ml-3 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
