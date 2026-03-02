"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, ChevronRight, Terminal, Database, Activity } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    role: "Software Intern",
    company: "Bistec Global",
    duration: "2023 - 2024",
    status: "MISSION_COMPLETE",
    description:
      "Integrated into the core engineering division to prototype AI-driven web architectures. Spearheaded frontend development on high-load systems while optimizing Azure cloud orchestration protocols.",
    technologies: ["Next.js", "ASP.NET", "Azure", "MongoDB", "PostgreSQL"],
  },
]

export function Experience() {
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
    <section ref={sectionRef} id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid bg-background/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-full h-[1px] bg-primary/20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
           <div className="cyber-badge mb-4 inline-flex items-center gap-2">
            <Activity className="w-3 h-3" />
            <span>Operational Logbook</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase glitch-text" data-text="Deployment Log">
            Deployment Log
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto uppercase tracking-widest opacity-60">
            &gt; TRACING_HISTORICAL_NODES...
          </p>
        </div>

        {/* Timeline Hub */}
        <div className="relative">
          {/* Glowing Timeline Axis */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary/40 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-[10px] bg-primary/10 blur-sm hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Node Reactor */}
                <div className="absolute left-[26px] top-10 w-4 h-4 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(60,140,255,0.6)] z-20">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                </div>

                <Card className="md:ml-20 glass-strong border-primary/20 group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] rounded-2xl hover:border-primary/50">
                  {/* Status Overlay */}
                  <div className="absolute top-0 right-0 px-4 py-1 text-[8px] font-mono tracking-widest bg-primary/10 text-primary border-b border-l border-primary/20 rounded-bl-lg uppercase font-black">
                    {exp.status}
                  </div>

                  <CardHeader className="relative pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                          <Terminal className="w-5 h-5 text-primary" />
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="text-lg font-bold text-accent font-mono tracking-tight flex items-center gap-2">
                          <span className="w-3 h-[1px] bg-accent/50" />
                          @{exp.company}
                        </CardDescription>
                      </div>
                      <div className="self-start cyber-badge text-[10px] px-4 py-1.5 flex items-center gap-2 border-secondary/30 text-secondary bg-secondary/10">
                        <Calendar className="w-3 h-3 text-secondary/70" />
                        {exp.duration}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 relative border-t border-white/5 pt-6">
                    <p className="text-muted-foreground/90 leading-relaxed text-base font-medium">
                      {exp.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" /> Tech_Payload
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="cyber-badge text-[9px] py-1 border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Aesthetic HUD Line */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-primary/20" />
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Future Command Card */}
        <div className={`mt-20 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <div className="glass-strong border border-dashed border-primary/20 p-12 text-center relative overflow-hidden group rounded-3xl bg-secondary/5">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative space-y-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground/60">
                &gt; PENDING_MISSION_ASSIGNMENT...
              </p>
              <h3 className="text-4xl font-black uppercase tracking-tighter">
                 Awaiting <span className="gradient-text-cyan">Tactical deployment</span>
              </h3>
              <p className="text-muted-foreground font-medium text-base max-w-md mx-auto line-height-relaxed">
                System resources purged. Ready for high-stakes integration into your next mission-critical roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
