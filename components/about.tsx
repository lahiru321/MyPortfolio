"use client"

import { Card } from "@/components/ui/card"
import { Code2, Sparkles, Rocket, Heart, Shield, Cpu, Zap, Activity } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
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

  const stats = [
    { icon: Activity, label: "Core Runtime", value: "3+ Years", color: "text-primary" },
    { icon: Rocket, label: "Deployments", value: "15+", color: "text-accent" },
    { icon: Cpu, label: "Module Coverage", value: "20+", color: "text-secondary" },
    { icon: Zap, label: "Energy Source", value: "INFINITE", color: "text-primary" },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid bg-background/50">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="cyber-badge mb-4 inline-flex items-center gap-2">
            <Shield className="w-3 h-3" />
            <span>Personnel Data Archive</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase glitch-text" data-text="User Profile">
            User Profile
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto uppercase tracking-widest opacity-60">
            &gt; ACCESSING_BIOMETRICS_LOGS...
          </p>
        </div>

        {/* Tactical Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Personnel File - Left */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="h-full glass-strong border-primary/20 p-8 group relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50" />
              <div className="relative space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 border border-primary/20">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter">Identity Protocol</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                    <p>
                      Hi, I'm <span className="text-foreground font-bold italic">Lahiru Jeewantha</span>, a Full-Stack Systems Architect
                      with a focus on high-performance digital environments.
                    </p>
                    <p>
                      My technical origin began at <span className="text-accent font-bold">SLIIT</span>, where I mastered the logic
                      required to turn complex problems into streamlined code.
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-accent/20 bg-accent/5 rounded-lg space-y-3">
                  <h4 className="text-xs font-mono uppercase text-accent tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> System_Vision.log
                  </h4>
                  <p className="text-sm italic text-muted-foreground">
                    "Obsessed with the intersection of Artificial Intelligence and fluid user interfaces."
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-3xl font-black text-foreground mb-1 tracking-tighter uppercase">Lahiru Samarahewa</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-accent">
                    <span className="w-1.5 h-1.5 bg-accent animate-pulse rounded-full" />
                    BSc (HONS) IT - SLIIT
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Diagnostic Stats - Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Card className="h-full glass-strong border-primary/20 p-6 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-30" />
                  <div className="relative">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <p className="text-xs text-muted-foreground uppercase font-mono tracking-widest mb-2">{stat.label}</p>
                    <p className="text-3xl font-black gradient-text-cyan">{stat.value}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

        </div>

        {/* Operational Scope Card */}
        <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <Card className="glass-strong border-primary/20 p-10 relative overflow-hidden group rounded-3xl">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="grid md:grid-cols-2 gap-12 relative">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  Execution Flow
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
                  Expertise across <span className="text-accent font-bold">Next.js, Node.js, and Python</span> systems. 
                  Passionate about building architectures that are as scalable as they are visually stunning.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                   <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-secondary" />
                  </div>
                  Advanced R&D
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium border-l-2 border-secondary/20 pl-6">
                  Actively researching <span className="text-secondary font-bold">AI integration</span> and predictive analytics. 
                  My goal is to evolve static applications into proactive digital ecosystems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
