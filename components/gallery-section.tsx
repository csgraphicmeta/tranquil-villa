"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/gallery-images/tranquil-villa2.jpg",
    alt: "Villa exterior showcasing award-winning architecture",
    query: "luxury villa exterior with modern architecture at golden hour",
  },
  {
    src: "/gallery-images/gallery-images2.webp",
    alt: "Luxury bedroom suite with elegant interiors",
    query: "luxury bedroom suite with elegant gold accents and modern design",
  },
  {
    src: "/gallery-images/gallery-images7.webp",
    alt: "Garden with tropical plants and stone pathways",
    query: "luxury infinity pool overlooking tropical landscape at sunset",
  },
  {
    src: "/gallery-images/gallery-images8.webp",
    alt: "Bird Feeding Area in the garden",
    query: "luxury spa treatment room with ayurvedic elements and candles",
  },
  {
    src: "/gallery-images/gallery-images5.webp",
    alt: "Space living area with fine dining table setup",
    query: "fine dining restaurant table with elegant gold cutlery and candles",
  },
  {
    src: "/gallery-images/gallery-images6.jpg",
    alt: "Fish spa therapy pool with relaxing ambiance",
    query: "luxury tropical garden with lush plants and stone pathways",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 px-6 bg-background font-serif">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl  mb-6 text-balance text-headline">Gallery</h2>
          <p className="text-lg text-[#1A1A1A] text-pretty">A visual journey through luxury and elegance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                  <p className="text-primary font-serif text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center ">
            <Link href="/gallery" className="text-sm  tracking-wider hover:text-primary transition-colors border border-black px-4 py-4 rounded hover:bg-white bg-headline">
              VIEW MORE
            </Link>
        </div>
      </div>
    </section>
  )
}
