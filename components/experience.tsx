import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Senior Fullstack Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description:
      "Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing best practices across the team.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
  },
  {
    role: "Fullstack Developer",
    company: "Digital Innovations",
    duration: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with designers and product managers.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "StartUp Labs",
    duration: "2019 - 2020",
    description:
      "Built user interfaces for SaaS products using modern JavaScript frameworks. Implemented responsive designs and ensured cross-browser compatibility.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    role: "Junior Developer",
    company: "Web Agency Co.",
    duration: "2018 - 2019",
    description:
      "Assisted in developing websites and web applications for various clients. Learned industry best practices and modern development workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="self-start sm:self-center">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
