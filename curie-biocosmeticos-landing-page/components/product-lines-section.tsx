"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProductLinesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-balance animate-fade-in">Linhas Curie</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group space-y-6 animate-fade-in animate-delay-200">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-primary/20">
              <img
                src="/shampoo-waterless-product.jpg"
                alt="Linha Capilar Waterless"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Linha Capilar Waterless</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shampoo, condicionador e máscara em barra — hidratação sem desperdício, com eficácia real.
              </p>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Ver produto
                </Button>
              </Link>
            </div>
          </div>

          <div className="group space-y-6 animate-fade-in animate-delay-300">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-primary/20">
              <img
                src="/serums-kit-product.jpg"
                alt="Linha Facial Bioativa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Linha Facial Bioativa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Séruns naturais para pele acneica, madura e com melasma — o Cerrado em forma de cuidado.
              </p>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Ver produto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
