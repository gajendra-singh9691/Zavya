"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const slides = [
  {
    id: 1,
    title: "Beautiful Landscape",
    description: "Discover amazing natural wonders",
    image: "https://wallpaperaccess.com/full/1913670.jpg",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "City Skyline",
    description: "Modern architecture and urban life",
    image: "https://wallpapercave.com/wp/wp8149661.jpg",
    bgColor: "bg-purple-500",
  },
  {
    id: 3,
    title: "Ocean View",
    description: "Peaceful waters and endless horizons",
    image: "https://i.etsystatic.com/8556953/r/il/556ffc/663740398/il_fullxfull.663740398_i8a9.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 4,
    title: "Mountain Peak",
    description: "Adventure awaits at great heights",
    image: "https://wallpaperaccess.com/full/1913616.jpg",
    bgColor: "bg-green-500",
  },
]

export default function AutoSlider() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start at 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef(null)

  // Create extended slides array with duplicates for infinite loop
  const extendedSlides = [
    slides[slides.length - 1], // Last slide duplicate at beginning
    ...slides,
    slides[0], // First slide duplicate at end
  ]

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }, [isTransitioning])

  // Handle infinite loop logic
  useEffect(() => {
    if (!isTransitioning) return

    const timer = setTimeout(() => {
      setIsTransitioning(false)

      // If we're at the duplicate first slide (at the end), jump to real first slide
      if (currentSlide === extendedSlides.length - 1) {
        setCurrentSlide(1)
      }
      // If we're at the duplicate last slide (at the beginning), jump to real last slide
      else if (currentSlide === 0) {
        setCurrentSlide(slides.length)
      }
    }, 500) // Match transition duration

    return () => clearTimeout(timer)
  }, [currentSlide, isTransitioning, extendedSlides.length, slides.length])

  // Auto-play functionality - always running
  useEffect(() => {
    if (isTransitioning) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [isTransitioning, nextSlide])

  return (
      <div className="w-full h-full mx-auto py-4">
        <div className="relative w-full h-140 rounded-lg overflow-hidden shadow-2xl">
          {/* Slides Container */}
          <div
            ref={sliderRef}
            className={`flex h-full ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`} style={{backgroundImage : `url(${slide.image}`}}
                className={`min-w-full h-full flex items-end p-8 relative bg-center bg-cover`}
              >
                <div className="text-white z-10">
                  <h2 className="text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl opacity-90">{slide.description}</p>
                </div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
