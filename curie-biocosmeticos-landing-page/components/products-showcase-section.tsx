"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ProductModal } from "@/components/product-modal"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Shampoo Sólido Fortalecedor",
    description: "Um toque de natureza para nutrir e realçar a vitalidade dos seus cabelos",
    detailedDescription:
      "Um shampoo sólido fortalecedor desenvolvido para aumentar a resistência dos fios e estimular a vitalidade capilar. Sua fórmula reúne argila vermelha, extratos de chá verde, alecrim e aloe vera, além de óleos vegetais nutritivos como abacate, acuri, bocaiúva, macadâmia e manteiga de rosa mosqueta.",
    image: "/shampoo-vermelha.png",
    price: "R$ 45,00",
    benefits: [
      "Fortalece os fios",
      "Nutrição profunda",
      "Realça a vitalidade natural dos cabelos",
      "Fórmula vegana e sustentável",
    ],
    ingredients: [
      "Argila Vermelha",
      "Extrato de Cenoura",
      "Essência de Amora",
      "Jaborandi",
      "Queratina Vegetal",
      "Vitamina E",
      "Óleo Vegetal de Acuri",
      "Óleo Vegetal de Bocaiúva",
    ],
    howToUse: [
      "Molhe bem os cabelos e umedeça o shampoo sólido até formar a espuma.",
      "Aplique diretamente no couro cabeludo, fazendo movimentos circulares até obter uma espuma abundante.",
      "Massageie e enxágue, repetindo se necessário; deixe o shampoo secar em local arejado após o uso.",
    ],
  },
  {
    name: "Sérum ThriHalo",
    description: "Anti-aging com triplo ácido hialurônico para hidratação profunda e rejuvenescimento",
    detailedDescription:
      "Um sérum facial anti-aging formulado com tecnologia de triplo ácido hialurônico que atua em diferentes camadas da pele para proporcionar hidratação profunda, preenchimento e redução de linhas de expressão.",
    image: "/serum-trihalo.png",
    price: "R$ 89,00",
    benefits: [
      "Hidratação profunda em múltiplas camadas",
      "Reduz linhas de expressão e rugas",
      "Promove firmeza e elasticidade",
      "Textura leve e rápida absorção",
    ],
    ingredients: [
      "Ácido Hialurônico de Alto Peso Molecular",
      "Ácido Hialurônico de Médio Peso Molecular",
      "Nano Ácido Hialurônico",
      "D-Pantenol",
      "Hidrolato de Alecrim",
    ],
    howToUse: [
      "Aplique de 3 a 5 gotas do sérum na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos ascendentes até completa absorção.",
      "Use pela manhã e à noite antes do hidratante para potencializar os resultados.",
    ],
  },
  {
    name: "Hidratante Facial",
    description: "Hidratação balanceada com extratos botânicos e vitaminas para pele saudável e luminosa",
    detailedDescription:
      "Um hidratante facial desenvolvido para proporcionar hidratação equilibrada e conforto imediato à pele. Sua fórmula reúne extrato de aveia para suavizar e acalmar, D-Pantenol para reparação, vitamina E como poderoso antioxidante, extrato de aloe vera para hidratação profunda e vitamina A para renovação celular.",
    image: "/hidratante-facial.png",
    price: "R$ 67,00",
    benefits: [
      "Hidratação equilibrada e duradoura",
      "Acalma e suaviza a pele",
      "Proteção antioxidante",
      "Textura leve e não oleosa",
    ],
    ingredients: ["Extrato de Aveia", "D-Pantenol", "Vitamina E", "Extrato de Aloe Vera", "Vitamina A"],
    howToUse: [
      "Aplique o hidratante na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos circulares ascendentes até completa absorção.",
      "Use pela manhã e à noite para melhores resultados.",
    ],
  },
  {
    name: "Sabonete Facial em Pó",
    description: "Limpeza suave e purificante com argila branca para pele equilibrada e revitalizada",
    detailedDescription:
      "Um sabonete facial em pó inovador desenvolvido para proporcionar limpeza profunda e suave sem agredir a pele. Sua fórmula única combina argila branca purificante que remove impurezas e oleosidade excessiva, tapioca para textura sedosa e essência de violeta para aroma delicado e relaxante.",
    image: "/sabonete-facial-po.png",
    price: "R$ 52,00",
    benefits: [
      "Limpeza profunda e suave",
      "Remove impurezas sem ressecar",
      "Equilibra a oleosidade natural",
      "Aroma delicado de violeta",
    ],
    ingredients: ["Argila Branca", "Essência de Violeta", "Tapioca"],
    howToUse: [
      "Umedeça o rosto com água.",
      "Coloque uma pequena quantidade do pó na palma da mão e adicione água até formar uma pasta cremosa.",
      "Aplique no rosto com movimentos circulares suaves e enxágue abundantemente.",
    ],
  },
]

export function ProductsShowcaseSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product: (typeof products)[0], e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart({
      id: product.name,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <>
      <section className="py-12 md:py-20 lg:py-32 px-3 md:px-6 bg-secondary/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4 animate-fade-in">
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-balance px-2">
              Nossos Produtos
            </h2>
            <p className="text-xs md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-2">
              Cada produto é resultado de pesquisa científica e respeito pela biodiversidade brasileira
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8 w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-background rounded-xl md:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-primary/20 animate-fade-in animate-delay-${(index + 1) * 100} w-full`}
                onClick={() => handleProductClick(product)}
              >
                <div className="aspect-square relative overflow-hidden bg-secondary/50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-2 md:p-6 space-y-1.5 md:space-y-3">
                  <h3 className="text-xs md:text-lg lg:text-xl font-medium text-balance leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground text-pretty leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <div className="pt-1.5 md:pt-3 space-y-1.5 md:space-y-2">
                    <span className="text-xs md:text-lg font-medium text-primary block">{product.price}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-lg bg-transparent text-[10px] md:text-sm flex-1 hover:scale-105 transition-transform duration-300 shadow-soft hover:shadow-hover h-7 md:h-9"
                      >
                        Ver mais
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 h-7 md:h-9 px-2 md:px-3"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12 animate-fade-in animate-delay-500 w-full px-2">
            <Link href="/produtos" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-6 md:px-8 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm md:text-base"
              >
                Ver todos os produtos
              </Button>
            </Link>
            <Link
              href="https://wa.me/5567999999999?text=Olá! Gostaria de personalizar meu produto Curie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-6 md:px-8 bg-transparent hover:scale-105 transition-all duration-300 hover:bg-primary/5 shadow-soft hover:shadow-hover w-full sm:w-auto text-sm md:text-base"
              >
                Personalizar o meu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
