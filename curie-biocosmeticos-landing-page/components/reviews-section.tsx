"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: "Ana Paula Silva",
      rating: 5,
      comment:
        "Produtos maravilhosos! Minha pele nunca esteve tão hidratada e saudável. Amo saber que são sustentáveis e feitos com ingredientes brasileiros.",
      location: "São Paulo, SP",
      date: "Outubro 2024",
    },
    {
      name: "Mariana Costa",
      rating: 5,
      comment:
        "O sérum revitalizante transformou minha rotina de skincare. A textura é incrível e os resultados aparecem em poucas semanas.",
      location: "Brasília, DF",
      date: "Outubro 2024",
    },
    {
      name: "Juliana Oliveira",
      rating: 5,
      comment:
        "Fiquei impressionada com a qualidade dos produtos. É reconfortante usar cosméticos com propósito científico e social.",
      location: "Cuiabá, MT",
      date: "Novembro 2024",
    },
    {
      name: "Carla Mendes",
      rating: 5,
      comment:
        "Adoro a filosofia da marca! Produtos eficientes, sustentáveis e que valorizam nossa biodiversidade. Recomendo muito!",
      location: "Campo Grande, MS",
      date: "Novembro 2024",
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-background relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/cerrado-aerial.jpg')",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in animate-delay-100">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-balance">O que dizem nossas clientes</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experiências reais de quem confia na ciência e na natureza
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto animate-fade-in animate-delay-200">
          {/* Carousel Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Review anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Próxima review"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-6 max-w-3xl mx-auto shadow-lg border border-border/50">
                    {/* Rating Stars */}
                    <div className="flex gap-1 justify-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Review Comment */}
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center text-pretty">
                      "{review.comment}"
                    </p>

                    {/* Author Info */}
                    <div className="pt-6 border-t border-border/40 text-center">
                      <p className="font-medium text-foreground text-lg">{review.name}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                        <span>{review.location}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-border/70"
                }`}
                aria-label={`Ir para review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-in animate-delay-300" style={{ animationDelay: "0.3s" }}>
          <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-border/50">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-sm font-medium">
              Avaliação média: <span className="text-primary">5.0</span> de 5 estrelas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
