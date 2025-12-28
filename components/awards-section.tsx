"use client"
import { motion } from "framer-motion"

export function AwardsSection() {
  const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
}
  return (
    <motion.section className="py-20 md:py-32 px-6 bg-background1 font-serif ">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  mb-6 text-balance text-headline">Awards & Recognition</h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Celebrated for architectural excellence and unparalleled luxury
          </p>
        </div>
        </motion.div>
 

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Award Badge */}
          <div className="flex justify-center">
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative bg-card border-2 border-primary/30 rounded-full w-64 h-64 flex flex-col items-center justify-center p-8 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105">
                <Award className="w-20 h-20 text-primary mb-4" strokeWidth={1.5} />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-xl text-primary text-center leading-tight">Award-Winning Villa</p>
                <p className="text-sm text-foreground/60 text-center mt-2">2024</p>
              </div>
            </div> */}
            <img
              src="/gallery-images/tranquil-villa3.jpg"
              width={600}
              height={300}
            />
          </div>

          {/* Recognition Text */}
          <div className="space-y-6">
            <div className="border-l-2 border-primary/30 pl-6 py-4 hover:border-primary/60 transition-colors duration-300">
              <h3 className="font-serif text-2xl text-primary mb-2">Architectural Masterpiece</h3>
              <p className="text-foreground/70 leading-relaxed">
                An award-winning architectural marvel that seamlessly blends contemporary design with Sri Lankan
                heritage.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-4 hover:border-primary/60 transition-colors duration-300">
              <h3 className="font-serif text-2xl text-primary mb-2">Designed by Palinda Kannangara</h3>
              <p className="text-foreground/70 leading-relaxed">
                Crafted by renowned architect Palinda Kannangara, THE TRANQUIL represents the pinnacle of luxury villa
                design in Sri Lanka.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 py-4 hover:border-primary/60 transition-colors duration-300">
              <h3 className="font-serif text-2xl text-primary mb-2">European Excellence</h3>
              <p className="text-foreground/70 leading-relaxed">
                Recognized internationally for setting new standards in luxury hospitality and architectural innovation.
              </p>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
