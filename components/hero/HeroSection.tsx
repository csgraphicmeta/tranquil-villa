import HeroClient from "./HeroClient";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background + animations handled by client */}
      <HeroClient />

      {/* Static overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 pl-5 md:pl-16 pr-8">
        <div className="max-w-lg">
          <h1 className="font-serif text-3xl md:text-6xl text-white mb-4 drop-shadow">
            Experience Timeless Luxury in Our Award-Winning Villa
          </h1>

          <p className="font-serif text-lg text-gray-200 mb-8 leading-relaxed">
            Experience serene comfort and modern elegance in the heart of nature.
            <br />
            Your perfect getaway starts here.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 hover:bg-white/10 transition"
          >
            Book Now →
          </a>
        </div>
      </div>
    </section>
  )
}
