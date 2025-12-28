// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Award, Compass, Heart } from "lucide-react"

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="font-serif relative h-[60vh] flex items-center justify-center overflow-hidden ">
//         <div className="absolute inset-0">
//           <img src="/architectural-villa-exterior-modern-design.jpg" alt="About THE TRANQUIL" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center px-6 text-white">
//           <h1 className=" text-5xl md:text-7xl mb-4 ">About Us</h1>
//           <p className="text-xl  max-w-2xl mx-auto ">
//             An architectural landmark that redefines luxury living
//           </p>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="font-serif py-20 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className=" text-4xl text-headline mb-8 text-center">Our Story</h2>
//           <p className="text-lg text-foreground/80 leading-relaxed text-center mb-12">
//             THE TRANQUIL is more than a villa — it is an architectural landmark that redefines luxury living. Designed
//             to create harmony between structure and serenity, it stands as a beacon of cultural elegance blended with
//             modern minimalism.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ">
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
//                 <Award className="text-headline" size={32} />
//               </div>
//               <h3 className="font-serif text-xl text-headline mb-2">Award-Winning</h3>
//               <p className="text-sm text-foreground">Recognized globally for architectural excellence</p>
//             </div>
//             <div className="text-center text-headline">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
//                 <Compass className="" size={32} />
//               </div>
//               <h3 className="font-serif text-xl  mb-2">Visionary Design</h3>
//               <p className="text-sm text-foreground">Harmony between nature and architecture</p>
//             </div>
//             <div className="text-center text-headline">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
//                 <Heart className="" size={32} />
//               </div>
//               <h3 className="font-serif text-xl mb-2">Timeless Elegance</h3>
//               <p className="text-sm text-foreground">Cultural heritage meets modern luxury</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Architectural Excellence */}
//       <section className="py-20 px-6 bg-background1 font-serif">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className=" text-4xl text-headline mb-6">Architectural Excellence</h2>
//               <p className="text-lg text-foreground/80 leading-relaxed mb-6">
//                 Designed by <span className="text-primary font-semibold">Palinda Kannangara</span>, renowned for his
//                 artistry in blending natural landscapes with contemporary form.
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-headline mt-2" />
//                   <p className="text-foreground/80">Winner of prestigious Architectural Award</p>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-headline mt-2" />
//                   <p className="text-foreground/80">Celebrated globally for precision, balance, and innovation</p>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-headline mt-2" />
//                   <p className="text-foreground/80">Masterful integration of villa design with natural surroundings</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="relative h-[500px] overflow-hidden">
//               <img src="/Palinda-Kannangara.jpeg" alt="Architectural Award" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Philosophy */}
//       <section className="py-20 px-6 font-serif">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-4xl text-primary mb-8">Our Philosophy</h2>
//           <p className="text-xl text-foreground/80 leading-relaxed italic">
//             "Every element of <span className="text-headline">THE TRANQUIL</span> has been curated to inspire calmness, evoke grandeur, and immerse you in a
//             lifestyle that is both exclusive and timeless."
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Compass, Heart, Leaf, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay },
  }),
}

export default function AboutPage() {
  return (
    <div className="min-h-screen font-serif">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about-banner-2.jpg"
            alt="About THE TRANQUIL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-6 text-white font-serif">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-5xl md:text-7xl mb-4"
          >
            Our Story of Serenity & Excellence
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-xl max-w-2xl mx-auto"
          >
            An architectural landmark redefining luxury living in harmony with nature
          </motion.p>
        </div>
      </section>

      {/* The Story of THE TRANQUIL */}
      <motion.section
        className="py-20 px-6 text-center max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl text-headline mb-8">The Story of THE TRANQUIL</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          THE TRANQUIL is more than a villa, it is a philosophy. Born from a vision of serenity and cultural elegance,
          it embodies Sri Lanka's timeless heritage while offering the pinnacle of modern luxury. Every corner reflects
          artistry, balance, and a deep respect for nature.
        </p>
      </motion.section>

      {/* Architectural Excellence */}
      <motion.section
        className="py-20 px-6 bg-background1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-headline mb-6">Architectural Excellence</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 ">
              Designed by <span className="text-primary font-semibold">Palinda Kannangara</span>, celebrated globally for
              merging natural landscapes with contemporary forms. His mastery has earned <span>THE TRANQUIL</span>{" "}
              recognition as one of Sri Lanka's most iconic modern villas.
            </p>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-headline mt-2" />
                Winner of prestigious International Architectural Awards</li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-headline mt-2" />
                Integration of villa design with lush tropical surroundings</li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-headline mt-2" />
                Globally acclaimed for precision, minimalism, and innovation</li>
            </ul>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/Palinda-Kannangara.jpeg"
              alt="Palinda Kannangara"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Design Philosophy */}
      <motion.section
        className="py-28 bg-primary text-primary-foreground text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto italic leading-relaxed">
          “Every line, every detail, every curve of THE TRANQUIL reflects harmony, elegance, and timeless luxury.”
        </h2>
      </motion.section>

      {/* Legacy & Heritage */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-headline mb-8">Legacy & Heritage</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            From the lotus crown symbolizing purity, to curated gardens echoing Sri Lanka's cultural traditions, and
            wellness rooted in Ayurveda, every element of THE TRANQUIL connects heritage with luxury, offering guests an
            experience beyond time.
          </p>
        </div>
      </motion.section>

      {/* Awards & Press Mentions */}
      {/* <motion.section
        className="py-20 px-6 bg-card/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-headline mb-10">Awards & Press Mentions</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/award-seal.png" alt="Award Seal" className="h-16" />
            <img src="/press-logo-1.png" alt="Press Logo 1" className="h-12" />
            <img src="/press-logo-2.png" alt="Press Logo 2" className="h-12" />
            <img src="/press-logo-3.png" alt="Press Logo 3" className="h-12" />
          </div>
        </div>
      </motion.section> */}

      {/* Sustainability & Craftsmanship */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-headline mb-8">Sustainability & Craftsmanship</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Built with eco-conscious principles, THE TRANQUIL champions the use of natural materials, traditional
            craftsmanship, and sustainable architecture blending modern luxury with environmental harmony.
          </p>
        </div>
      </motion.section>

      {/* Our Promise */}
      <motion.section
        className="py-20 px-6 bg-background1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-headline mb-8">Our Promise</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We promise exclusivity, privacy, and experiences curated with care. Every guest who enters THE TRANQUIL
            becomes part of its story of serenity, luxury, and timeless elegance.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-28 relative text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <img
          src="/gallery-images/tranquil-villa5.jpg"
          alt="Book Your Stay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl mb-6">Experience the tranquility you deserve</h2>
        <Link href="/contact">
            <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-headline/70 hover:text-black transition">
              Book Your Stay
            </button>
        </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
