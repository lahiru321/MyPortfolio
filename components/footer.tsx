"use client"

import { Github, Linkedin, Mail, Shield, ArrowUp, Activity, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/lahiru321",
      label: "GitHub",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lahiru-samarahewa-280110227/",
      label: "LinkedIn",
      color: "hover:text-accent",
    },
    {
      icon: Mail,
      href: "mailto:lahirujeewantha321@gmail.com",
      label: "Email",
      color: "hover:text-secondary",
    },
  ]

  return (
    <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid bg-background/50 border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          {/* Mainframe Interface Status */}
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/60 tracking-[0.3em] uppercase">
             <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-primary animate-pulse" /> Uplink: ACTIVE</span>
             <span className="px-3 border-x border-white/10 uppercase italic font-black text-primary">Secure_Channel</span>
             <span className="flex items-center gap-1.5"><Activity className="w-3 h-3" /> Latency: 12ms</span>
          </div>

          {/* Connection Initiation CTA */}
          <div className="text-center space-y-6 max-w-2xl">
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Initialize <span className="gradient-text-cyan glitch-text" data-text="Connection">Connection</span>
            </h3>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-lg mx-auto">
              Ready to architect the next evolution of your digital ecosystem. Awaiting technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
               <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/80 text-black font-black uppercase tracking-tighter px-10 h-14 rounded-none skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <a href="mailto:lahirujeewantha321@gmail.com" className="flex items-center">
                  <Terminal className="mr-3 h-5 w-5 skew-x-[12deg]" />
                  <span className="skew-x-[12deg]">Transmission_Start</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Social Node Array */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className={`w-14 h-14 glass border border-white/10 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 group relative`}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <social.icon className="h-6 w-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>

          {/* System Protocol Data */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 border border-primary/20 flex items-center justify-center rounded-lg bg-primary/5">
                  <Shield className="w-5 h-5 text-primary" />
               </div>
               <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-foreground">Lahiru Samarahewa</p>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase opacity-60">Full-Stack Cyborg Developer</p>
               </div>
            </div>

            <div className="text-center md:text-right space-y-1">
               <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                 © PROTOCOL_{currentYear} ALL_RIGHTS_RESERVED
               </p>
               <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest flex items-center justify-center md:justify-end gap-2">
                 <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                 Integrity: VERIFIED
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Override (Scroll to Top) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 glass-strong border border-primary/20 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-500 z-50 shadow-[0_0_20px_rgba(59,130,246,0.2)] ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-primary" />
      </button>
    </footer>
  )
}
