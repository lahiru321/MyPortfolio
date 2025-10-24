import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Lahiru Jeewantha</h1>
          <p className="text-xl sm:text-2xl text-accent font-medium">Fullstack Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building modern web applications with clean code and thoughtful design. Passionate about creating seamless
            user experiences and scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
