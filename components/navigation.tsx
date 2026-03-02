"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield, Cpu } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "experience"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home", code: "H0ME" },
    { href: "#about", label: "About", code: "PR0FILE" },
    { href: "#projects", label: "Projects", code: "EXECS" },
    { href: "#skills", label: "Skills", code: "M0DULES" },
    { href: "#experience", label: "Experience", code: "L0GS" },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${isScrolled ? "w-[95%] md:w-[85%] lg:w-[75%]" : "w-[95%] md:w-[90%] lg:w-[80%]"
          }`}
      >
        <div className={`glass-strong rounded-2xl px-6 py-3 border-y border-white/5 shadow-2xl overflow-hidden group ${isScrolled ? "bg-background/80" : "bg-transparent"}`}>
          {/* Animated Internal Glow */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="flex items-center justify-between relative z-10">
            {/* System Identifier (Logo) */}
            <a
              href="#home"
              className="flex items-center gap-2 group"
              onClick={handleLinkClick}
            >
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:rotate-12">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase gradient-text-cyan glitch-text" data-text="LJ-SYS">
                LJ-SYS
              </span>
            </a>

            {/* Tactical Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 group ${isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    <span className="relative z-10">{link.code}</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-primary/5 rounded-lg border-b-2 border-primary" />
                    )}
                    <span className="absolute inset-x-2 -bottom-4 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-all blur-sm" />
                  </a>
                )
              })}
            </div>

            {/* Connection Status */}
            <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6 h-6">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">Sys_Status: OK</span>
               </div>
               <div className="w-5 h-5 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Cpu className="w-3 h-3 text-accent" />
               </div>
            </div>

            {/* Command Trigger (Mobile Button) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-foreground hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Command Center (Menu) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Deep Field Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute inset-0 cyber-grid opacity-20" />

        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="text-center space-y-2 mb-12">
              <p className="text-[10px] font-mono text-primary tracking-[0.4em] uppercase">Executive Terminal</p>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Command Panel</h2>
           </div>

          <div className="space-y-4 w-full max-w-xs">
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-8 py-5 text-lg font-black uppercase tracking-tighter rounded-2xl border transition-all duration-300 ${isActive
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "border-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground"
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMobileMenuOpen ? "animate-slide-in-right 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards" : "none"
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] font-mono opacity-50">{link.href}</span>
                </a>
              )
            })}
          </div>

          <div className="mt-20 border-t border-white/5 pt-8 w-full max-w-xs text-center">
             <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 italic opacity-40">System Protocol: Active</p>
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 border border-accent/20 rounded-xl font-mono text-xs text-accent uppercase tracking-widest hover:bg-accent/10 transition-colors"
                >
                Close Connection
             </button>
          </div>
        </div>
      </div>
    </>
  )
}
