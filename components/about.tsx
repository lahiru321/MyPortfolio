import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate fullstack developer with expertise in building modern web applications. I specialize in
              React, Node.js, and cloud technologies, creating solutions that are both beautiful and performant.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical excellence with user-centered design, ensuring that every project I work on
              delivers real value. I'm constantly learning and exploring new technologies to stay at the forefront of
              web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or
              exploring the latest trends in software development.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-sm aspect-square bg-muted flex items-center justify-center overflow-hidden">
              <img src="/professional-developer-portrait.png" alt="Lahiru Jeewantha" className="w-full h-full object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
