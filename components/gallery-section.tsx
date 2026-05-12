"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Hair styling", category: "Hair" },
  { src: "/images/gallery-2.jpg", alt: "Nail artistry", category: "Nails" },
  { src: "/images/gallery-3.jpg", alt: "Makeup", category: "Makeup" },
  { src: "/images/gallery-4.jpg", alt: "Spa treatment", category: "Spa" },
  { src: "/images/gallery-5.jpg", alt: "Bridal styling", category: "Bridal" },
  { src: "/images/gallery-6.jpg", alt: "Salon interior", category: "Ambiance" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Portfolio</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Our <span className="text-primary font-medium">Artistry</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse into the transformations we create every day. 
            Each image tells a story of beauty realized.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[4/5]"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-primary text-sm tracking-[0.3em] uppercase block mb-2">
                      {image.category}
                    </span>
                    <span className="text-foreground text-xs tracking-wider">
                      Click to view
                    </span>
                  </div>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
