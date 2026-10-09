"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HistorySection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-full">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 w-full max-w-full pr-0 md:pr-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-balance leading-tight max-w-full">
              Do pantanal e cerrado ao laboratório
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty max-w-full text-justify">
              Os ativos da Curie Biocosméticos nascem de frutos nativos que concentram uma das maiores potências
              biológicas do Brasil. O acuri e a bocaiúva oferecem óleos ricos em ácidos graxos, carotenoides e
              antioxidantes capazes de restaurar, nutrir e fortalecer a barreira cutânea. A guavira, símbolo do Cerrado,
              fornece vitamina C e flavonoides com ação revitalizante e antimicrobiana, enquanto o baru aporta
              proteínas, minerais e compostos fenólicos reconhecidos pela alta atividade antioxidante e proteção contra
              danos oxidativos. Esses insumos formam a base científica das formulações Curie: matérias-primas puras,
              sustentáveis e com eficácia comprovada na regeneração e no equilíbrio da pele.
            </p>

            <div className="pt-2 md:pt-4">
              <Link href="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg bg-transparent hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Saber mais
                </Button>
              </Link>
            </div>

            {/* Scientific Icons */}
            <div className="flex flex-wrap gap-3 md:gap-6 pt-2 md:pt-4">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M12 2v4m0 12v4M2 12h4m12 0h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Moléculas</span>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <path
                      d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Descoberta</span>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <path
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Laboratório</span>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-muted shadow-lg hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-primary/20 max-w-full">
            <Image
              src="/cerrado-fruits.jpg"
              alt="Frutos nativos do Cerrado: acuri, bocaiúva, guavira e baru"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
