"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus, Star } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"

interface Product {
  name: string
  description: string
  detailedDescription?: string
  image: string
  price: string
  benefits?: string[]
  ingredients?: string[]
  howToUse?: string[] // Added howToUse field to Product interface
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart() // Using correct function name from context

  if (!product || !isOpen) return null

  const images = [product.image, product.image, product.image, product.image]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.name.toLowerCase().replace(/\s+/g, "-"),
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    onClose()
    setQuantity(1) // Reset quantity after adding
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen w-full bg-background p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-50 rounded-full bg-background/90 backdrop-blur-sm p-3 shadow-lg hover:bg-background transition-colors"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar</span>
          </button>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-16 md:pt-8">
            <div className="space-y-4">
              {/* Imagem principal */}
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-secondary/30">
                <Image
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative rounded-lg overflow-hidden bg-secondary/30 border-2 transition-all ${
                      selectedImage === index ? "border-primary scale-95" : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground">Início / Produtos / {product.name}</div>

              {/* Título e avaliação */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-light text-balance">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(115)</span>
                </div>
              </div>

              {/* Preço */}
              <div className="space-y-1">
                <p className="text-4xl font-medium text-primary">{product.price}</p>
                <p className="text-sm text-muted-foreground">
                  3x de R$
                  {(Number.parseFloat(product.price.replace("R$ ", "").replace(",", ".")) / 3)
                    .toFixed(2)
                    .replace(".", ",")}{" "}
                  sem juros
                </p>
              </div>

              {/* Descrição detalhada */}
              {product.detailedDescription && (
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">{product.detailedDescription}</p>
                </div>
              )}

              {/* Benefícios */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="space-y-3 bg-secondary/20 p-4 rounded-xl">
                  <h4 className="font-medium">Benefícios</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredientes */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium">Ingredientes Principais</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.slice(0, 6).map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Como usar */}
              {product.howToUse && product.howToUse.length > 0 && (
                <div className="space-y-3 bg-secondary/20 p-4 rounded-xl">
                  <h4 className="font-medium">Como usar</h4>
                  <ol className="space-y-3">
                    {product.howToUse.map((step, index) => (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Quantidade e Comprar */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Quantidade:</span>
                  <div className="flex items-center border rounded-lg">
                    <button onClick={decrementQuantity} className="p-3 hover:bg-secondary transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-2 min-w-[60px] text-center">{quantity}</span>
                    <button onClick={incrementQuantity} className="p-3 hover:bg-secondary transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-primary font-medium">51 em estoque</p>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  onClick={handleAddToCart}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
