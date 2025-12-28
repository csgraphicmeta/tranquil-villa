"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "An absolute sanctuary of peace and luxury. Every detail exceeded our expectations.",
    author: "Sophie Laurent",
    location: "Paris, France",
  },
  {
    quote: "The architecture is breathtaking, the service impeccable. A truly unforgettable experience.",
    author: "James Morrison",
    location: "London, UK",
  },
  {
    quote: "THE TRANQUIL is more than a villa—it's a masterpiece. We felt like royalty.",
    author: "Isabella Romano",
    location: "Milan, Italy",
  },
  {
    quote: "From the Ayurvedic spa to the fine dining, every moment was pure bliss.",
    author: "Henrik Andersson",
    location: "Stockholm, Sweden",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 text-balance">Guest Testimonials</h2>
          <p className="text-lg font-serif text-foreground/70 text-pretty">Voices of luxury from our distinguished guests</p>
        </div>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-20">
            <Quote className="w-24 h-24 text-primary" strokeWidth={1} />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[280px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="text-center px-6 md:px-12">
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary mb-8 leading-relaxed text-balance">
                    "{testimonial.quote}"
                  </p>
                  <div className="space-y-1">
                    <p className="text-lg font-serif font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm font-serif text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
