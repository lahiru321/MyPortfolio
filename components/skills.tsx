"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Wrench, Cloud, Cpu, Layout, Terminal, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Frontend Core",
    icon: Layout,
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    color: "bg-primary",
    status: "OPTIMIZED",
  },
  {
    category: "Backend Engine",
    icon: Terminal,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "ASP.NET"],
    color: "bg-secondary",
    status: "STABLE",
  },
  {
    category: "Data Storage",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    color: "bg-primary",
    status: "ENCRYPTED",
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "AWS", "Vercel", "Azure", "Postman"],
    color: "bg-secondary",
    status: "DEPLOYED",
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid bg-background/50">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
           <div className="cyber-badge mb-4 inline-flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            <span>Modules & Subsystems</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase glitch-text" data-text="Technical Array">
            Technical Array
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto uppercase tracking-widest opacity-60">
            &gt; FETCHING_INSTALLED_PLUGINS...
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full glass-strong border-primary/20 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] rounded-2xl">
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/50 flex items-center gap-2">
                   <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                   {category.status}
                </div>

                <CardHeader className="relative space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${category.color} bg-opacity-20 flex items-center justify-center p-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(var(--primary),0.2)]`}>
                    <category.icon className="w-full h-full text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-black uppercase tracking-tighter">{category.category}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="cyber-badge text-[10px] py-1 border-primary/20 hover:border-primary/60 transition-colors cursor-pointer"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Cyber Corner FX */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />
              </Card>
            </div>
          ))}
        </div>

        {/* Dynamic Footer Info */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <div className="glass-strong border-primary/20 p-6 inline-flex items-center gap-8 rounded-full border-l-4 border-l-primary">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary animate-spin" />
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-tighter">
                Cloud_Connectivity: <span className="text-foreground font-bold">ESTABLISHED</span>
              </p>
            </div>
             <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-8">
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-tighter">
                Latency: <span className="text-foreground font-bold">OPTIMIZED</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
