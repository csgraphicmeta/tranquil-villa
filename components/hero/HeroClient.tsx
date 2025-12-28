"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  "/album/album6.webp",
  "/gallery-images/gallery-images7.webp",
]

export default function HeroClient() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          fill
          alt="The Tranquil Villa"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
    </div>
  )
}
