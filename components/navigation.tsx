"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-border " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-white  tracking-wider">
            {/* THE TRANQUIL */}
            <img
              src="/logo-tranquil.png"
              alt="The Tranquil Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-24 ${isScrolled ? "text-white" : "text-white"}`}>
            <Link href="/" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              ABOUT
            </Link>
            <Link href="/facilities" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              FACILITIES
            </Link>
            <Link href="/gallery" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              GALLERY
            </Link>
            <Link href="/contact" className="text-sm tracking-wider hover:text-muted-foreground transition-colors border border-white px-4 py-2 rounded hover:bg-white ">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className=" md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-white text-sm tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-white text-sm tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/facilities"
              className="text-white text-sm tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FACILITIES
            </Link>
                       <Link href="/gallery" className="text-sm tracking-wider hover:text-muted-foreground transition-colors">
              GALLERY
            </Link> 
            <Link
              href="/contact"
              className="text-white text-sm tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
