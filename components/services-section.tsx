"use client"

import { Scissors, Sparkles, Heart, Flower2 } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, color, and styling by our master artisans. From classic elegance to avant-garde creations.",
    features: ["Precision Cuts", "Balayage & Highlights", "Bridal Styling", "Hair Treatments"],
    price: "From $150"
  },
  {
    icon: Sparkles,
    title: "Beauty & Makeup",
    description: "Enhance your natural beauty with our premium makeup services using exclusive luxury brands.",
    features: ["Full Glam Makeup", "Natural Looks", "Special Events", "Lash Extensions"],
    price: "From $120"
  },
  {
    icon: Heart,
    title: "Nail Artistry",
    description: "Indulge in meticulous nail care with our signature manicures and pedicures.",
    features: ["Gel Manicures", "Nail Art", "Spa Pedicures", "Nail Restoration"],
    price: "From $80"
  },
  {
    icon: Flower2,
    title: "Spa & Wellness",
    description: "Rejuvenate your senses with our exclusive spa treatments and therapeutic experiences.",
    features: ["Facial Treatments", "Body Massage", "Aromatherapy", "Gold Facials"],
    price: "From $200"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Our Services</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Crafted for <span className="text-primary font-medium">Perfection</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each service is meticulously designed to deliver an unparalleled 
            experience of luxury and transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-background border border-border hover:border-primary/50 p-8 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
              
              {/* Icon */}
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-primary" strokeWidth={1} />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <span className="text-primary text-lg font-medium">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
