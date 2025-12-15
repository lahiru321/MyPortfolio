"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, ChevronDown, Github, Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

class Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  hue: number

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.baseX = this.x
    this.baseY = this.y
    this.vx = (Math.random() - 0.5) * 0.8
    this.vy = (Math.random() - 0.5) * 0.8
    this.radius = Math.random() * 2.5 + 1
    this.hue = Math.random() * 60 + 200 // Blue to purple range
  }

  update(mouseX: number, mouseY: number) {
    // Mouse interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 150

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      const angle = Math.atan2(dy, dx)
      this.vx -= Math.cos(angle) * force * 0.5
      this.vy -= Math.sin(angle) * force * 0.5
    }

    // Return to base position
    this.vx += (this.baseX - this.x) * 0.01
    this.vy += (this.baseY - this.y) * 0.01

    // Apply velocity with damping
    this.vx *= 0.95
    this.vy *= 0.95

    this.x += this.vx
    this.y += this.vy

    // Boundary check
    if (this.x < 0 || this.x > this.canvas.width) {
      this.baseX = this.x = Math.random() * this.canvas.width
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.baseY = this.y = Math.random() * this.canvas.height
    }
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this.ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, 0.8)`
    this.ctx.shadowBlur = 15
    this.ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, 0.6)`
    this.ctx.fill()
    this.ctx.shadowBlur = 0
  }
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Lahiru Samarahewa"
  const magneticRefs = useRef<(HTMLDivElement | null)[]>([])

  // Typing animation
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Magnetic effect on buttons
      magneticRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const distanceX = e.clientX - centerX
          const distanceY = e.clientY - centerY
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

          if (distance < 150) {
            const strength = (150 - distance) / 150
            const moveX = distanceX * strength * 0.3
            const moveY = distanceY * strength * 0.3
            ref.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.1})`
          } else {
            ref.style.transform = 'translate(0px, 0px) scale(1)'
          }
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Enhanced particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let currentMouseX = 0
    let currentMouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 150)
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, ctx))
    }

    const handleMouseMove = (e: MouseEvent) => {
      currentMouseX = e.clientX
      currentMouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.4
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
            gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity})`)

            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update(currentMouseX, currentMouseY)
        particle.draw()
      })

      drawConnections()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />

      {/* Animated Gradient Orbs with Parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{
          animationDelay: '2s',
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float"
        style={{
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * 0.025}px, ${-mousePosition.y * 0.02}px)`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="space-y-8">
          {/* Greeting with fade and slide */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <p className="text-accent text-lg sm:text-xl font-medium mb-2 inline-block">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>👋</span>
              {" "}Hello, I'm
            </p>
          </div>

          {/* Name with Typing Animation and Gradient */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 min-h-[1.2em]">
              <span className="gradient-text inline-block">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          {/* Title with animated underline */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-2">
                Fullstack Developer
              </p>
              <div className="h-1 w-0 gradient-bg-animated rounded-full animate-[width-expand_1s_ease-out_0.8s_forwards]"
                style={{ animation: 'width-expand 1s ease-out 0.8s forwards' }} />
            </div>
          </div>

          {/* Description with stagger */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="text-accent font-semibold">exceptional digital experiences</span> with modern web technologies.
              Passionate about building <span className="text-primary font-semibold">scalable applications</span> and bringing ideas to life through clean code and thoughtful design.
            </p>
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <div ref={(el) => { magneticRefs.current[0] = el }} className="transition-transform duration-200">
              <Button size="lg" asChild className="group gradient-bg hover:shadow-2xl transition-all duration-300 glow-hover text-lg px-8 py-6">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </Button>
            </div>
            <div ref={(el) => { magneticRefs.current[1] = el }} className="transition-transform duration-200">
              <Button size="lg" variant="outline" asChild className="glass-strong hover:glass text-lg px-8 py-6 transition-all duration-300 hover:border-primary">
                <a href="mailto:lahirujeewantha321@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links with stagger and hover effects */}
          <div className="flex items-center justify-center gap-4 pt-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/lahiru321"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glass-strong hover:scale-125 transition-all duration-300 glow-hover group"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/lahiru-samarahewa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glass-strong hover:scale-125 transition-all duration-300 glow-hover group"
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-sm font-medium group-hover:scale-110 transition-transform">Scroll Down</span>
          <div className="relative">
            <ChevronDown className="w-6 h-6 animate-pulse" />
            <ChevronDown className="w-6 h-6 absolute top-2 left-0 opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero