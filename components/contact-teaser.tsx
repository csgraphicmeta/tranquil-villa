import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactTeaser() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-card/50 to-background font-serif ">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
            Your journey into a luxury kingdom begins here
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty max-w-2xl mx-auto">
            Experience the pinnacle of Sri Lankan hospitality in an architectural masterpiece designed for those who
            appreciate the finest things in life.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-headline px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 hover:gap-4 group"
            >
              Book Your Stay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-headline" />
              <span>Award-Winning Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-headline" />
              <span>Exclusive Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-headline" />
              <span>Unparalleled Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
