"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };


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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luxury-infinity-pool-overlooking-nature.jpg" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl  mb-4">
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-xl  max-w-2xl mx-auto font-serif">
            Let us bring you closer to a world of tranquility
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.h2
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
                className="font-serif text-3xl text-primary mb-6">Get in Touch</motion.h2>
              <motion.p
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
                className="text-foreground/80 mb-8 leading-relaxed font-serif">
                Connect with us to begin your journey into luxury. We're here to answer your questions and help plan
                your perfect stay.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-serif">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-serif">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 font-serif">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-serif">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card border-border text-foreground min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif">
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <h2 className="font-serif text-3xl text-primary mb-6">Visit Us</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1 font-serif">Location</h3>
                    <p className="text-foreground/80 font-serif">No: 194 / 1 , Makola South, Makola, Sri Lanka</p>
                  </div>
                </div>

                <div className="font-serif flex items-start gap-4">
                  <Phone className="font-serif text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif font-semibold mb-1">Phone</h3>
                    <p className="font-serif text-foreground/80">+94 11 2 962 856</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-serif font-semibold mb-1">Email</h3>
                    <p className="font-serif text-foreground/80">info@thetranquils.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-card border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2420.9936112387!2d79.93483028348113!3d6.977519438454714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257dd12a49773%3A0x2a9bb1ff3922547b!2s194%2C%201%20Makola%20Rd%2C%20Kiribathgoda!5e0!3m2!1sen!2slk!4v1759437558223!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
