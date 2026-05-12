"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="group">
            <span className="text-2xl md:text-3xl font-semibold tracking-[0.3em] text-foreground group-hover:text-primary transition-colors">
              LUXE
            </span>
            <span className="block text-xs tracking-[0.5em] text-primary mt-1">
              SALON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.15em] uppercase text-sm px-6"
              asChild
            >
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.15em] uppercase text-sm"
              asChild
            >
              <Link href="#contact" onClick={() => setIsOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
