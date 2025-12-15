"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Cloud } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: Cloud,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "ASP.NET"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "AWS", "Vercel", "Azure", "Postman"],
    color: "from-orange-500 to-red-500",
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
    <section ref={sectionRef} id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full glass-strong hover:glass border-primary/20 group relative overflow-hidden transition-all duration-500 hover:scale-105">
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${category.color}`} />

                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="glass hover:glass-strong transition-all hover:scale-110 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
          <Card className="glass-strong border-primary/20 p-8 inline-block">
            <p className="text-muted-foreground text-lg">
              Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
