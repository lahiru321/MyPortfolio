"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from "lucide-react"
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
    <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 group">
            <Sparkles className="w-8 h-8 text-primary group-hover:text-accent transition-colors animate-pulse" />
            <span className="text-3xl font-bold gradient-text">LJ</span>
          </div>

          {/* Contact CTA */}
          <div className="text-center space-y-4 max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">Let's Work Together</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's create something amazing together!
            </p>
            <Button
              size="lg"
              asChild
              className="gradient-bg hover:shadow-2xl hover:scale-105 transition-all glow-hover mt-4"
            >
              <a href="mailto:lahirujeewantha321@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className={`p-4 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 ${social.color} group`}
              >
                <social.icon className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Lahiru Samarahewa
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 glass-strong rounded-full hover:glass transition-all duration-300 z-50 glow-blue ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
