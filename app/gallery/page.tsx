// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";

// export default function GalleryPage() {
//   const albums = [
//     { title: "2000 Pop Rock", description: "Portrait Collection June 2025", image: "/gallery-images/gallery-images1.jpg" },
//     { title: "Forest Nymph", description: "Portrait Collection June 2025", image: "/gallery-images/gallery-images2.jpg" },
//     { title: "Dark Siren Call", description: "Portrait Collection June 2025", image: "/gallery-images/gallery-images3.jpg" },
//     { title: "Transcendence", description: "Portrait Collection March 2025", image: "/gallery-images/gallery-images4.jpg" },
//     { title: "Two Hearts Beat As One", description: "Couple Shoot December 2024", image: "/gallery-images/gallery-images5.jpg" },
//     { title: "Stepping into Golden Hour", description: "Portrait Collection November 2024", image: "/gallery-images/gallery-images6.jpg" },
//     { title: "I Belong to the Sun", description: "Portrait Collection October 2024", image: "/gallery-images/gallery-images7.jpg" },
//     { title: "Anastasia", description: "Portrait Collection February 2023", image: "/gallery-images/gallery-images8.jpg" },
//     { title: "Golden Hour with Niki", description: "Portrait Collection September 2024", image: "/gallery-images/gallery-images9.jpg" },
//     { title: "முடிவிலி", description: "Portrait Collections August 2024", image: "/gallery-images/gallery-images10.jpg" },
//     { title: "Summer Nostalgia", description: "Portrait Collection June 2024", image: "/gallery-images/gallery-images11.jpg" },
//     { title: "Harmony in Frames", description: "Portrait Collection May 2024", image: "/gallery-images/gallery-images12.jpg" },
//   ];

//   const itemsPerPage = 8;
//   const totalPages = Math.ceil(albums.length / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const currentAlbums = albums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src="/gallery/tranquil-gallery3.jpg" alt="Gallery" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center px-6 text-white">
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0 } } }}
//             className="font-serif text-5xl md:text-7xl mb-4"
//           >
//             Gallery
//           </motion.h1>
//           <motion.p
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 } } }}
//             className="font-serif text-xl max-w-2xl mx-auto"
//           >
//             Explore our curated collections capturing timeless moments.
//           </motion.p>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         custom={0.2}
//         viewport={{ once: true }}
//         className="py-20 px-6"
//       >
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentAlbums.map((album, index) => (
//               <motion.div
//                 key={index}
//                 custom={index * 0.3}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: index * 0.3 } },
//                 }}
//                 className="group relative overflow-hidden bg-card border rounded-sm border-border hover:border-primary transition-all duration-500"
//               >
//                 <div className="aspect-[16/10] overflow-hidden">
//                   <img
//                     src={album.image || "/placeholder.svg"}
//                     alt={album.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
//                   <div className="text-center text-white">
//                     <h3 className="text-2xl font-semibold">{album.title}</h3>
//                     <p className="mt-2">{album.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center items-center gap-4 mt-10">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={`px-4 py-2 border rounded transition-transform duration-300 ${
//                   currentPage === i + 1
//                     ? "scale-125 bg-primary text-white border-primary"
//                     : "hover:scale-110"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  const albums = [
    { title: "Luxury Bed Rooms", description: "Modern comfort & private retreat", image: "/gallery-images/gallery-images1.jpg" },
    { title: "Swimming Pool", description: "Tranquil waters & relaxation", image: "/album/album5.jpeg" },
    { title: "Billiard Table", description: "Fun & friendly competition", image: "/album/album2.jpeg" },
    { title: "Swimming Pool", description: "Tranquil waters & relaxation", image: "/album/album10.jpeg" },
    { title: "Luxury Bed Rooms", description: "Modern comfort & private retreat", image: "/gallery-images/gallery-images2.jpg" },
    { title: "Luxury Bathroom", description: "Elegant design with modern comforts", image: "/album/album8.jpeg" },
    { title: "Luxury Bed Rooms", description: "Modern comfort & private retreat", image: "/gallery-images/gallery-images3.jpg" },
    { title: "Roof top", description: "Breathtaking views & serenity", image: "/album/album3.jpeg" },
    { title: "Living Area", description: "Spacious comfort with stylish design", image: "/gallery-images/gallery-images5.jpg" },
    { title: "Bedroom View", description: "Relax with stunning scenery", image: "/album/album4.jpeg" },
    { title: "Infinity Pool", description: "Endless water & stunning views", image: "/album/album6.jpeg" },
    { title: "Living Area", description: "Spacious comfort with stylish design", image: "/gallery-images/gallery-images6.jpg" },
    { title: "Garden", description: "Peaceful lush landscapes", image: "/gallery-images/gallery-images7.jpg" },
    { title: "Bird Feeding Area", description: "Connect with nature", image: "/gallery-images/gallery-images8.jpg" },
    { title: "Luxury Bathroom", description: "Elegant design with modern comforts", image: "/album/album7.jpeg" },
    { title: "Luxury Bathroom", description: "Elegant design with modern comforts", image: "/album/album9.jpeg" },
    { title: "Luxury Bed Rooms", description: "Modern comfort & private retreat", image: "/gallery-images/gallery-images4.jpg" },
    { title: "Movie Room", description: "Cinematic entertainment", image: "/album/album1.jpeg" },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(albums.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const currentAlbums = albums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/album/album11.jpeg"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif text-xl max-w-2xl mx-auto"
          >
            Explore our curated collections capturing timeless moments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentAlbums.map((album, index) => (
              <motion.div
                key={index}
                custom={index * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:border-primary transition-all duration-500"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <div className="text-center text-white px-4">
                    <h3 className="text-2xl font-semibold">{album.title}</h3>
                    <p className="mt-2">{album.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded-full transition-transform duration-300 ${
                  currentPage === i + 1
                    ? "scale-125 bg-primary text-white border-primary"
                    : "hover:scale-110"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
