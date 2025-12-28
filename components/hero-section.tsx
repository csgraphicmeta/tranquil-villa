"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// A single image path for the dark, nature-focused hero
const heroImage = "/hero-image-tranquil-2.jpg" // Assuming this is a suitable dark, nature-focused image

// --- Navigation Component (to keep the header clean) ---
function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-6 flex justify-between items-center">
    </nav>
  )
}

// --- Hero Section Component ---
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    // Slight delay for initial fade-in effect
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [])

  const images = [
  "/album/album6.jpeg",
  "/album/album10.jpeg",
  "/gallery-images/gallery-images7.jpg",
]
  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000) // 6s per slide

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src={heroImage}
          alt="THE TRANQUIL Villa view of mountains and nature"
          className="w-full h-full object-cover object-[50%_70%] transition-opacity duration-1000" // Adjust object position for better composition
        /> */}
                {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="THE TRANQUIL Villa"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark overlay matching the reference image's mood */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
      </div>
      

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 pl-5 md:pl-16 pr-8">
        <div
          className={`transition-all duration-[1500ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } max-w-lg`} // max-w-lg to contain the text like in the reference
        >
          {/* Main Title */}
          <h1 className="font-serif text-3xl md:text-6xl text-white mb-4 tracking-normal drop-shadow">
            {/* Welcome to THE TRANQ<span className="text-primary">UIL</span> Villa */}
            Experience Timeless Luxury in Our Award-Winning Villa
          </h1>
          
          {/* Subtext */}
          <p className="font-serif text-lg text-gray-200 mb-8 font-light leading-relaxed">
            Experience serene comfort and modern elegance in the heart of nature.
            <br />
            Your perfect getaway starts here.
          </p>

          {/* Book Now Button (Styled to match the reference's link look) */}
          <Link href="/contact">
                      <Button
            variant="ghost"
            size="lg"
            className="font-serif text-white border border-white hover:bg-white/10 px-8 py-3 text-base font-normal tracking-wider group"
          >
            Book Now
            <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}