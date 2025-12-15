"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    role: "Software Intern",
    company: "Bistec Global",
    duration: "2023 - 2024",
    description:
      "Worked as a Software Engineering Intern, contributing to the development of innovative web-based solutions. Collaborated on projects involving AI integration and cloud deployment, focusing mainly on frontend development while gaining exposure to backend systems and Azure cloud operations.",
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
    <section ref={sectionRef} id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:block glow-blue" />

                <Card className="md:ml-20 glass-strong hover:glass border-primary/20 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  {/* Gradient Top Border */}
                  <div className="h-1 bg-gradient-to-r from-primary to-secondary" />

                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl flex items-center gap-3 group-hover:text-accent transition-colors">
                          <Briefcase className="w-6 h-6" />
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground/80">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className="self-start glass hover:glass-strong text-base px-4 py-2"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 relative">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="glass hover:glass-strong transition-all hover:scale-110"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals Card */}
        <div className={`mt-12 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <Card className="glass-strong border-primary/20 p-8 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <p className="text-lg text-muted-foreground mb-2">
                Looking forward to new opportunities and challenges
              </p>
              <p className="text-2xl font-bold gradient-text">
                Let's build something amazing together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
