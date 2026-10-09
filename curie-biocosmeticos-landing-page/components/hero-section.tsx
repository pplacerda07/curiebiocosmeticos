"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const carouselSlides = [
  {
    image: "/hero-product-serum.jpg",
    title: "Ciência, Experiência Sensorial e Propósito em cada formulação",
    subtitle:
      "Biocosméticos que unem nanotecnologia e biodiversidade para pele e cabelo. Usamos ativos do Pantanal e Cerrado (naturais, veganos, biodegradáveis) com foco na preservação. Menos água e menos plástico.",
  },
  {
    image: "/hero-carousel-1.jpg",
    title: "Força, Brilho e Sustentabilidade: O Poder da Natureza para Seus Cabelos.",
    subtitle:
      "Nossas formulações são isentas de plásticos e têm baixo consumo hídrico. Com ativos nobres do Pantanal e Cerrado, oferecem alta performance capilar. Unimos eficácia a um profundo compromisso ambiental e à bioeconomia nacional.",
  },
  {
    image: "/hero-carousel-2.jpg",
    title: "Equilíbrio e Regeneração com Ciência da Natureza",
    subtitle:
      "A linha facial e corporal da Curie combina nanotecnologia com ativos nativos do Cerrado e do Pantanal para hidratar, restaurar a barreira cutânea e promover luminosidade natural. Fórmulas seguras, eficazes e alinhadas ao cuidado diário.",
  },
  {
    image: "/hero-cerrado-aerial.jpg",
    title: "A Potência da Biodiversidade Brasileira no Seu Cuidado",
    subtitle:
      "A Curie utiliza acuri, bocaiúva, guavira, tarumã e outros frutos do Pantanal e Cerrado em cosméticos que unem desempenho, sustentabilidade e respeito socioambiental. Ingredientes regionais, ciência aplicada e impacto positivo.",
  },
  {
    image: "/hero-lagoon-aerial.jpg",
    title: "Da Nossa Terra para o Seu Cuidado Diário",
    subtitle:
      "A Curie integra ciência, educação e biodiversidade brasileira para criar cosméticos que respeitam sua pele e o meio ambiente. Cada fórmula carrega o propósito de valorizar o território, apoiar comunidades locais e promover um cuidado verdadeiramente sustentável.",
  },
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentSlide = carouselSlides[currentImageIndex]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 pt-20">
        <h1
          key={`title-${currentImageIndex}`}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance text-white drop-shadow-lg animate-fade-up px-4"
        >
          {currentSlide.title}
        </h1>

        <p
          key={`subtitle-${currentImageIndex}`}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto text-pretty drop-shadow-md animate-fade-up animate-delay-200 px-4"
        >
          {currentSlide.subtitle}
        </p>

        <div className="animate-scale-fade animate-delay-400 px-4">
          <Link href="/produtos">
            <Button
              size="lg"
              className="mt-4 md:mt-8 bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-medium rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              Conheça nossos produtos
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-80">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
