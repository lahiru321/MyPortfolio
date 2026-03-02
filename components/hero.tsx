"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, ChevronDown, Github, Linkedin, Cpu, Zap, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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
    this.radius = Math.random() * 2 + 0.5
    this.hue = Math.random() * 40 + 180 // Cyan/Blue range
  }

  update(mouseX: number, mouseY: number) {
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

    this.vx += (this.baseX - this.x) * 0.01
    this.vy += (this.baseY - this.y) * 0.01
    this.vx *= 0.95
    this.vy *= 0.95
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > this.canvas.width) this.baseX = this.x = Math.random() * this.canvas.width
    if (this.y < 0 || this.y > this.canvas.height) this.baseY = this.y = Math.random() * this.canvas.height
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this.ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, 0.5)`
    this.ctx.fill()
  }
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Lahiru Samarahewa"
  const magneticRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      magneticRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const dx = e.clientX - centerX
          const dy = e.clientY - centerY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const str = (150 - dist) / 150
            ref.style.transform = `translate(${dx * str * 0.3}px, ${dy * str * 0.3}px) scale(${1 + str * 0.05})`
          } else {
            ref.style.transform = 'translate(0px, 0px) scale(1)'
          }
        }
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let frame: number
    let particles: Particle[] = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 100; i++) particles.push(new Particle(canvas, ctx))
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update(mousePosition.x, mousePosition.y)
        p.draw()
      })
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [mousePosition])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden cyber-grid bg-background">
      {/* Background FX */}
      {/* Background FX - Solid Overlays */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />
      
      {/* Intense Ambient Glows - Solid Color Hubs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] animate-pulse opacity-30" />
      <div className="absolute inset-0 bg-background/20 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-10 text-left">
            <div className={`transition-all duration-1000 transform translate-x-0 opacity-100`}>
              <div className="cyber-badge mb-6 inline-flex items-center gap-3 bg-primary/20 border-primary/50 text-primary shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <Cpu className="w-3.5 h-3.5" />
                <span className="font-black">LJ_CORE_V2.5.0</span>
              </div>
              <h2 className="text-primary text-lg sm:text-xl font-mono tracking-[0.3em] mb-4 uppercase flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary/50" />
                Initializing_Neural_Link...
              </h2>
            </div>

            <div className={`transition-all duration-1000 delay-200 transform translate-x-0 opacity-100`}>
              <h1 className="text-6xl sm:text-7xl lg:text-7xl font-black mb-6 leading-[0.9]">
                <span className="block text-foreground glitch-text" data-text={displayedText}>
                  {displayedText}
                </span>
                <span className="block gradient-text drop-shadow-[0_0_30px_rgba(255,215,0,0.5)] mt-2">
                  CYB0RG_DEV
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 transform translate-x-0 opacity-100`}>
              <div className="relative group max-w-xl">
                 <p className="text-lg sm:text-2xl text-muted-foreground/90 leading-relaxed font-medium border-l-4 border-primary pl-8 italic relative">
                    <span className="absolute -left-1 top-0 h-full w-1 bg-primary" />
                    "Converging human intuition with surgical code precision to architect the mainframe of tomorrow."
                 </p>
              </div>
            </div>

            {/* Performance Node Grid */}
            <div className="grid grid-cols-3 gap-6 py-8 transition-all duration-1000 delay-400 opacity-100">
              <div className="p-5 glass-strong border-primary/30 group hover:border-primary/80 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1"><div className="w-1 h-1 bg-primary rounded-full animate-pulse" /></div>
                <Zap className="w-7 h-7 text-primary mb-3 group-hover:scale-125 transition-transform" />
                <div className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest">Efficiency</div>
                <div className="text-xl font-black gradient-text-cyan">100%_OPT</div>
              </div>
              <div className="p-5 glass-strong border-secondary/30 group hover:border-secondary/80 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1"><div className="w-1 h-1 bg-secondary rounded-full animate-pulse" /></div>
                <Cpu className="w-7 h-7 text-secondary mb-3 group-hover:rotate-90 transition-transform" />
                <div className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest">Runtime</div>
                <div className="text-xl font-black text-secondary">STABLE</div>
              </div>
              <div className="p-5 glass-strong border-accent/30 group hover:border-accent/80 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1"><div className="w-1 h-1 bg-accent rounded-full animate-pulse" /></div>
                <Shield className="w-7 h-7 text-accent mb-3 group-hover:animate-pulse" />
                <div className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest">Protocol</div>
                <div className="text-xl font-black text-accent">ENCRYPTED</div>
              </div>
            </div>

            {/* Tactical Actions */}
            <div className="flex flex-wrap gap-6 pt-6 transition-all duration-1000 delay-500 opacity-100">
              <div ref={(el) => { magneticRefs.current[0] = el }} className="transition-transform duration-200">
                <Button size="xl" asChild className="relative overflow-hidden group bg-primary hover:bg-primary/80 text-black font-black uppercase tracking-tighter px-12 py-8 text-xl rounded-none skew-x-[-15deg] shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)] border-0">
                  <a href="#projects" className="relative z-10 flex items-center gap-3 skew-x-[15deg]">
                    Execute_Mission
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </div>
              <div ref={(el) => { magneticRefs.current[1] = el }} className="transition-transform duration-200">
                <Button size="xl" variant="outline" asChild className="group glass text-foreground px-10 py-8 text-xl rounded-none skew-x-[-15deg] border-white/10 hover:border-secondary shadow-[0_0_20px_rgba(255,0,128,0.1)] hover:shadow-[0_0_40px_rgba(255,0,128,0.3)] transition-all">
                  <a href="mailto:lahirujeewantha321@gmail.com" className="skew-x-[15deg] flex items-center gap-3 uppercase font-black tracking-widest text-sm">
                    <Mail className="w-5 h-5 text-secondary" />
                    Secure_Uplink
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Cyborg Imaging Unit */}
          <div className="relative group perspective-2000 transition-all duration-1000 delay-400 opacity-100">
            <div className="relative z-20 transition-transform duration-700 hover:rotate-y-[10deg] hover:scale-[1.03]">
              {/* Augmented Frame FX */}
              <div className="absolute -inset-8 border-2 border-primary/20 rounded-[2rem] -z-10 animate-pulse" />
              <div className="absolute -inset-2 bg-primary/10 blur-3xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-white/5 glass-strong p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[3/4.2] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                  <Image 
                    src="/assets/hero-cyborg.png" 
                    alt="Lahiru Samarahewa Hybrid Avatar"
                    fill
                    className="object-cover object-top hover:scale-110 transition-transform duration-[2000ms] grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                    priority
                  />
                  <div className="scanline group-hover:animate-scanline" />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Tactical HUD Overlays */}
                <div className="absolute top-10 right-10 text-right font-mono text-[9px] text-primary space-y-2 z-30 pointer-events-none tracking-widest bg-black/40 p-3 backdrop-blur-md rounded-lg border border-primary/20">
                  <div className="flex items-center justify-end gap-2 border-b border-primary/10 pb-1">
                    <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
                    LIVE_FEED
                  </div>
                  <div>LOC: 6.92°N 79.86°E</div>
                  <div>CORE: NURAL_GEN_X</div>
                  <div className="text-secondary">INTEGRITY: 99.8%</div>
                </div>

                <div className="absolute bottom-10 left-10 font-mono text-[9px] text-accent space-y-1.5 z-30 pointer-events-none uppercase tracking-[0.2em] bg-black/40 p-3 backdrop-blur-md rounded-lg border border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-10 bg-accent animate-width-expand" />
                    Verified_Unit
                  </div>
                  <div className="opacity-60 text-[8px]">Class: Full-Stack Sentinel</div>
                </div>

                {/* Glitch Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              </div>
            </div>

            {/* External Support Structures */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border-t-4 border-r-4 border-primary/30 rounded-tr-[4rem] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-b-4 border-l-4 border-secondary/30 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-700" />
            
            {/* Pulsing Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-30 opacity-40 group-hover:opacity-70 transition-opacity" />
          </div>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors font-mono text-[10px] tracking-[0.2em] uppercase">
          Proceed
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

export default Hero