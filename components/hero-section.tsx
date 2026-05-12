"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-salon.jpg"
          alt="Luxury salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          {/* Decorative Line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Premium Beauty Experience
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6 text-balance">
            <span className="block">Where Elegance</span>
            <span className="block text-primary font-medium">Meets Artistry</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Indulge in a world of refined beauty. Our master stylists craft 
            personalized experiences that elevate your natural radiance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.15em] uppercase text-sm px-8 py-6 group"
              asChild
            >
              <Link href="#contact">
                Book Your Experience
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary tracking-[0.15em] uppercase text-sm px-8 py-6"
              asChild
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="transform -rotate-90 origin-center whitespace-nowrap">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Est. 2024 — Beverly Hills
          </span>
        </div>
      </div>
    </section>
  )
}
