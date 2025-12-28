import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AwardsSection } from "@/components/awards-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactTeaser } from "@/components/contact-teaser"
import { motion } from "framer-motion"


import VideoSection from "@/components/videoSection/VideoSection"
import HeroSection from "@/components/hero/HeroSection"
import IntroSection from "@/components/intro-section"


export default function HomePage() {


  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection />

      <VideoSection />

      {/* Intro Section */}
      <IntroSection/>

      {/* Luxury Experience Highlights */}


      {/* Awards & Recognition section */}
        <AwardsSection />
    

      {/* Guest Testimonials section with slider */}
      
        <TestimonialsSection />
     

      {/* Gallery section with parallax hover effects */}
      
        <GallerySection />
     

      {/* Contact Teaser banner with CTA */}
      
        <ContactTeaser />
      

      <Footer />
    </div>
  )
}






