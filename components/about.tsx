import { Card } from "@/components/ui/card"
import Image from 'next/image'
import profileImage from '@/public/images/profile.jpg'

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I’m Lahiru Jeewantha, a passionate Full-Stack Developer with a strong focus on building dynamic and user-friendly web applications. 
              I have graduated with a BSc (Hons) in Information Technology from SLIIT, and I love turning ideas into real, impactful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working across both the frontend and backend, using technologies like 
              Next.js, Node.js, Python, MongoDB, and Firebase to create clean, scalable, and efficient solutions. 
              My interests also extend into AI integration and intelligent systems, 
              where I explore how technology can make learning and everyday tasks smarter and more engaging.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I’m a continuous learner who thrives on solving problems, collaborating with teams, and crafting solutions that 
             improve user experience and add real value.

            When I’m not coding, I enjoy exploring new tech trends, learning about AI, and finding creative ways to grow as a 
            developer.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-sm aspect-square bg-muted flex items-center justify-center overflow-hidden">
              <Image src={profileImage} 
              alt="Lahiru Jeewantha"   
              width={500}
              height={300}
              className="object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
