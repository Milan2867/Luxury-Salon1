"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll be in touch soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Book Your <span className="text-primary font-medium">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to transform? Reach out to us and let our team 
            create the perfect experience for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-12">
            <h3 className="text-2xl font-light mb-8">Request an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3 bg-background border border-border text-foreground focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="hair">Hair Styling</option>
                    <option value="makeup">Beauty & Makeup</option>
                    <option value="nails">Nail Artistry</option>
                    <option value="spa">Spa & Wellness</option>
                    <option value="bridal">Bridal Package</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Your Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.15em] uppercase text-sm py-6"
              >
                Submit Request
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    9876 Rodeo Drive, Suite 100<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (310) 555-LUXE</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@luxesalon.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Follow Our Journey
              </h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-foreground" strokeWidth={1} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-foreground" strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
