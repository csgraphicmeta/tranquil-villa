// "use client";
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { useState } from "react"
// import { motion } from "framer-motion"

// export default function FacilitiesPage() {
//   const facilities = [
//     {
//       title: "Luxury Rooms",
//       description: "Elegantly designed spaces with modern comforts, offering you a private retreat of pure indulgence.",
//       image: "/gallery-images/gallery-images1.jpg",
//     },
//     {
//       title: "Fine Dining",
//       description:
//         "Gourmet cuisine crafted to perfection, blending international flavors with Sri Lankan culinary artistry.",
//       image: "/gallery-images/gallery-images2.jpg",
//     },
//     {
//       title: "Ayurvedic Spa",
//       description:
//         "Rejuvenate your body and soul with ancient therapies, personalized treatments, and soothing aromas.",
//       image: "/gallery-images/gallery-images3.jpg",
//     },
//     {
//       title: "Swimming Pools",
//       description: "Dive into tranquility with pristine waters, serene surroundings, and luxury poolside relaxation.",
//       image: "/gallery-images/gallery-images4.jpg",
//     },
//     {
//       title: "Foot Therapy with Fishes",
//       description: "An extraordinary spa experience where nature itself provides gentle healing and revitalization.",
//       image: "/gallery-images/gallery-images5.jpg",
//     },
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/gallery-images6.jpg",
//     },
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/gallery-images7.jpg",
//     },
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/gallery-images8.jpg",
//     }, 
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa1.jpg",
//     },     
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa2.jpg",
//     },   
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa3.jpg",
//     },  
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa4.jpg",
//     },      
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa5.jpg",
//     },         
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa6.jpg",
//     },             
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa7.jpg",
//     },      
//     {
//       title: "Gardening Area",
//       description:
//         "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
//       image: "/gallery-images/tranquil-villa8.jpg",
//     },      
//   ]


//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.9, delay },
//     }),
//   }

//   // Pagination setup
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 8
//   const totalPages = Math.ceil(facilities.length / itemsPerPage)

//   const startIndex = (currentPage - 1) * itemsPerPage
//   const currentFacilities = facilities.slice(startIndex, startIndex + itemsPerPage)

//   return (
//     // <div className="min-h-screen">
//     //   <Navigation />

//     //   {/* Hero Section */}
//     //   <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//     //     <div className="absolute inset-0">
//     //       <img src="/gallery/tranquil-gallery3.jpg" alt="Facilities" className="w-full h-full object-cover" />
//     //       <div className="absolute inset-0 bg-black/60" />
//     //     </div>
        // <div className="relative z-10 text-center px-6 text-white">
        //   <motion.h1
        //     initial="hidden"
        //     animate="visible"
        //     custom={0}
        //     variants={fadeUp}
        //     className="font-serif text-5xl md:text-7xl  mb-4">
        //     Facilities
        //   </motion.h1>
        //   <motion.p
        //     initial="hidden"
        //     animate="visible"
        //     custom={0.2}
        //     variants={fadeUp}
        //     className="font-serif  text-xl  max-w-2xl mx-auto">
        //     Discover world-class amenities designed for your ultimate comfort
        //   </motion.p>
        // </div>
//     //   </section>
//     //   <section
//     //     className="mt-20 md:mt-24 font-serif">
//     //       <div className="container mx-auto max-w-4xl text-center">
//     //         <motion.h2 
//     //           initial="hidden"
//     //           animate="visible"
//     //           custom={0.2}
//     //           variants={fadeUp}
//     //           className=" text-3xl md:text-4xl lg:text-6xl text-primary leading-tight text-balance mb-2">
//     //             DISCOVER THE BEAUTY OF OUR VILLA
//     //         </motion.h2>
//     //         <motion.p 
//     //           initial="hidden"
//     //           animate="visible"
//     //           custom={0.2}
//     //           variants={fadeUp}
//     //           className=" text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
//     //           Our villa is more than just a destination. It is a work of art. Recognized for its exceptional architectural design, the property harmoniously blends contemporary luxury with natural beauty. Every detail, from the handcrafted interiors to the panoramic views, has been thoughtfully designed to provide a truly luxurious experience.
//     //           We take pride in offering personalized hospitality, ensuring that each guest enjoys comfort, privacy, and indulgence at its finest. Whether you seek relaxation, cultural immersion, or a private getaway, our villa is your perfect retreat.
//     //         </motion.p>
//     //       </div>
//     //   </section>
//     //   {/* Facilities Grid */}
//     //   <motion.section
//     //     initial="hidden"
//     //     whileInView="visible"
//     //     custom={0.2}
//     //     viewport={{ once: true }}
//     //     className="py-20 px-6">
//     //     <div className="container mx-auto">
//     //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     //         {facilities.map((facility, index) => (
//     //           <motion.div
//     //             key={index}
//     //             custom={index * 0.3}
//     //             initial="hidden"
//     //             whileInView="visible"
//     //             viewport={{ once: true }}
//     //             variants={fadeUp}
//     //             className="group relative overflow-hidden bg-card border rounded-sm border-border hover:border-primary transition-all duration-500"
//     //           >
//     //             <div className="aspect-[16/10] overflow-hidden">
//     //               <img
//     //                 src={facility.image || "/placeholder.svg"}
//     //                 alt={facility.title}
//     //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//     //               />
//     //             </div>
//     //             {/* <div className="p-8">
//     //               <h3 className="font-serif text-2xl text-primary mb-4">{facility.title}</h3>
//     //               <p className="text-foreground/80 leading-relaxed">{facility.description}</p>
//     //             </div> */}
//     //           </motion.div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </motion.section>

//     //   <Footer />
//     // </div>
//     <div className="min-h-screen">
//       <Navigation />

      // {/* Hero Section */}
      // <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      //   <div className="absolute inset-0">
      //     <img src="/gallery/tranquil-gallery3.jpg" alt="Facilities" className="w-full h-full object-cover" />
      //     <div className="absolute inset-0 bg-black/60" />
      //   </div>
      //   <div className="relative z-10 text-center px-6 text-white">
      //     <motion.h1
      //       initial="hidden"
      //       animate="visible"
      //       custom={0}
      //       variants={fadeUp}
      //       className="font-serif text-5xl md:text-7xl  mb-4">
      //       Facilities
      //     </motion.h1>
      //     <motion.p
      //       initial="hidden"
      //       animate="visible"
      //       custom={0.2}
      //       variants={fadeUp}
      //       className="font-serif  text-xl  max-w-2xl mx-auto">
      //       Discover world-class amenities designed for your ultimate comfort
      //     </motion.p>
      //   </div>
      // </section>

//       {/* Villa Intro */}
//       <section className="mt-20 md:mt-24 font-serif">
//         <div className="container mx-auto max-w-4xl text-center">
//           <motion.h2 
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             variants={fadeUp}
//             className=" text-3xl md:text-4xl lg:text-6xl text-primary leading-tight text-balance mb-2">
//               DISCOVER THE BEAUTY OF OUR VILLA
//           </motion.h2>
//           <motion.p 
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             variants={fadeUp}
//             className=" text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
//             Our villa is more than just a destination...
//           </motion.p>
//         </div>
//       </section>

//       {/* Facilities Grid */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         custom={0.2}
//         viewport={{ once: true }}
//         className="py-20 px-6">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {currentFacilities.map((facility, index) => (
//               <motion.div
//                 key={index}
//                 custom={index * 0.3}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 className="group relative overflow-hidden bg-card border rounded-sm border-border hover:border-primary transition-all duration-500"
//               >
//                 <div className="aspect-[16/10] overflow-hidden">
//                   <img
//                     src={facility.image || "/placeholder.svg"}
//                     alt={facility.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

// {/* Pagination */}
// <div className="flex justify-center items-center gap-4 mt-10">
//   {Array.from({ length: totalPages }, (_, i) => (
//     <button
//       key={i}
//       onClick={() => setCurrentPage(i + 1)}
//       className={`px-4 py-2 border rounded transition-transform duration-300 ${
//         currentPage === i + 1
//           ? "scale-125 bg-primary text-headline border-primary"
//           : "hover:scale-110"
//       }`}
//     >
//       {i + 1}
//     </button>
//   ))}
// </div>
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   )
// }

"use client";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { motion } from "framer-motion"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Luxury Rooms",
      description: "Elegantly designed spaces with modern comforts, offering you a private retreat of pure indulgence.",
      image: "/gallery-images/gallery-images2.jpg",
    },
    {
      title: "Fine Dining",
      description:
        "Gourmet cuisine crafted to perfection, blending international flavors with Sri Lankan culinary artistry.",
      image: "/gallery-images/tranquil-villa7.jpg",
    },
    {
      title: "Ayurvedic Spa",
      description:
        "Rejuvenate your body and soul with ancient therapies, personalized treatments, and soothing aromas.",
      image: "/luxury-spa-candles.png",
    },
    {
      title: "Swimming Pools",
      description: "Dive into tranquility with pristine waters, serene surroundings, and luxury poolside relaxation.",
      image: "/gallery-images/tranquil-villa5.jpg",
    },
    {
      title: "Billiord Table",
      description:
        " Enjoy friendly competition and leisure time with our well-maintained billiard table, perfect for all skill levels.",
      image: "/album/album2.jpeg",
    },
    {
      title: "Bird Feeding Area",
      description: "Experience the joy of nature up close in our dedicated bird feeding area, where vibrant local and migratory birds gather.",
      image: "gallery-images/gallery-images8.jpg",
    },
    {
      title: "Gardening Area",
      description:
        "Breathe in serenity as you stroll through lush landscapes designed for rest, reflection, and connection with nature.",
      image: "/gallery-images/tranquil-villa4.jpg",
    },
    {
      title: "Movie Room",
      description:
        "Enjoy a cinematic experience in our cozy movie room, equipped with comfortable seating and a wide selection of films.",
      image: "/album/album1.jpeg",
    },
  ]

    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay },
    }),
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery/tranquil-gallery3.jpg" alt="Facilities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl  mb-4">
            Facilities
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="font-serif  text-xl  max-w-2xl mx-auto">
            Discover world-class amenities designed for your ultimate comfort
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-card border rounded-sm border-headline hover:border-primary transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-primary mb-4">{facility.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
