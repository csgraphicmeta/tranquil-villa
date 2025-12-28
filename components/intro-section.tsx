"Use client"
import { motion } from 'framer-motion'
import { Bed, Sparkles, Waves, UtensilsCrossed, Fish, Trees } from "lucide-react"
import Link from 'next/link'
import React from 'react'
import { ExperienceCard } from './experience-card'
import FadeInSection from './animations/FadeInSection'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
}

const IntroSection = () => {
    const experiences = [
    {
      icon: Bed,
      title: "Luxury Rooms",
      description: "A private world of refined interiors and comfort.",
      image: "/gallery-images/gallery-images2.jpg",
    },
    {
      icon: Sparkles,
      title: "Ayurvedic Spa",
      description: "Healing and rejuvenation rooted in ancient wisdom.",
      image: "/ayurvedic-spa.jpg",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Tranquility by the water with serene poolside moments.",
      image: "/gallery-images/tranquil-villa5.jpg",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "A culinary journey of exquisite tastes.",
      image: "/gallery-images/tranquil-villa7.jpg",
    },
    {
      icon: Fish,
      title: "Foot Therapy with Fishes",
      description: "A unique blend of wellness and relaxation.",
      image: "/album/album12.jpeg",
    },
    {
      icon: Trees,
      title: "Garden Sanctuary",
      description: "Rest in beautifully curated landscapes.",
      image: "/gallery-images/tranquil-villa4.jpg",
    },
  ]
  return (
   <section
        className="py-20 md:py-32 px-6 font-serif"
      >
        <FadeInSection>
              <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl text-headline md:text-5xl mb-6 text-balance">
              Discover The Villa
            </h2>
            <p className=" text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
              Where architecture meets artistry, and luxury becomes a way of life. Experience serenity, sophistication,
            and timeless elegance in Sri Lanka&apos;s award-winning villa.
          </p>
        </div>
        </FadeInSection>


        {/* Discover The Villa - Video Section */}



        <section
          className="py-16 px-6 bg-card/50"
        >
          <div className="container mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-primary mb-12">
              Luxury Experience Highlights
            </h2>
            <Link href="/contact" className="text-sm text-primary  mb-6 inline-block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((experience, index) => (
                  <FadeInSection>
                                      <div
                    key={index}
                  >
                    <ExperienceCard {...experience} />
                  </div>
                  </FadeInSection>

                ))}
              </div>
            </Link>
          </div>
        </section>
      </section>
  )
}

export default IntroSection