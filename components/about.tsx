"use client"

import { Card } from "@/components/ui/card"
import Image from 'next/image'
import profileImage from '@/public/images/profile.jpg'
import { Code2, Sparkles, Rocket, Heart } from "lucide-react"
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
    { icon: Code2, label: "Years Experience", value: "3+", color: "text-primary" },
    { icon: Rocket, label: "Projects Completed", value: "15+", color: "text-accent" },
    { icon: Sparkles, label: "Technologies", value: "20+", color: "text-secondary" },
    { icon: Heart, label: "Coffee Consumed", value: "∞", color: "text-pink-500" },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Image Card - Spans 2 rows on large screens */}
          <div className={`lg:row-span-2 ${isVisible ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
            <Card className="h-full glass-strong hover:glass border-primary/20 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-square lg:aspect-auto lg:h-full">
                <Image
                  src={profileImage}
                  alt="Lahiru Samarahewa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Lahiru Samarahewa</h3>
                  <p className="text-accent font-medium">BSc (Hons) IT - SLIIT</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio Card */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
            <Card className="h-full glass-strong hover:glass border-primary/20 p-8 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Who I Am</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm <span className="text-foreground font-semibold">Lahiru Jeewantha</span>, a passionate Full-Stack Developer
                    with a strong focus on building dynamic and user-friendly web applications.
                  </p>
                  <p>
                    I graduated with a <span className="text-accent font-medium">BSc (Hons) in Information Technology from SLIIT</span>,
                    and I love turning ideas into real, impactful digital experiences.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Grid */}
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Card className="h-full glass-strong hover:glass border-primary/20 p-6 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-4xl font-bold mb-2 gradient-text-cyan">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info Card */}
        <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <Card className="glass-strong hover:glass border-primary/20 p-8 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  What I Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy working across both the frontend and backend, using technologies like
                  <span className="text-accent font-medium"> Next.js, Node.js, Python, MongoDB, and Firebase</span> to
                  create clean, scalable, and efficient solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-secondary" />
                  My Interests
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My interests extend into <span className="text-secondary font-medium">AI integration and intelligent systems</span>,
                  where I explore how technology can make learning and everyday tasks smarter and more engaging.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
