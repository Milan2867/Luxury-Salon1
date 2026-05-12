"use client"

import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Clock, value: "50K+", label: "Services Delivered" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
              A Legacy of <span className="text-primary font-medium">Elegance</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of Beverly Hills, LUXE Salon has been the 
                sanctuary of choice for those who seek more than just beauty 
                services—they seek an experience.
              </p>
              <p>
                Our team of internationally trained artisans brings together 
                decades of expertise, cutting-edge techniques, and an unwavering 
                commitment to excellence. Every visit is a journey into the 
                extraordinary.
              </p>
              <p>
                We believe beauty is deeply personal. That&apos;s why we take the 
                time to understand your vision, your lifestyle, and your 
                aspirations, crafting looks that are uniquely you.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-primary italic text-xl mb-2">Victoria Laurent</p>
              <p className="text-sm text-muted-foreground tracking-wide">Founder & Creative Director</p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="relative bg-background border border-border p-8 text-center group hover:border-primary/50 transition-colors duration-500"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />
                
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1} />
                <div className="text-4xl md:text-5xl font-light text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
