import Link from "next/link"
import { Instagram, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <span className="text-3xl font-semibold tracking-[0.3em] text-foreground">
                LUXE
              </span>
              <span className="block text-xs tracking-[0.5em] text-primary mt-1">
                SALON
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Where elegance meets artistry. Experience luxury beauty services 
              crafted by master artisans in the heart of Beverly Hills.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground" strokeWidth={1} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground" strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {["Hair Styling", "Beauty & Makeup", "Nail Artistry", "Spa & Wellness", "Bridal Packages"].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LUXE Salon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
