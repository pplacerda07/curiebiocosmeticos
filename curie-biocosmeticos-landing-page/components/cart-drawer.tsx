"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, getTotalItems, clearCart } = useCart()

  if (getTotalItems() === 0) {
    return null
  }

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "5516982139630"
    let message = "Oie, fiz meu carrinho no site e escolhi esses produtos:"

    items.forEach((item) => {
      message += `%0A- ${item.name} (${item.quantity} ${item.quantity === 1 ? "unidade" : "unidades"})`
    })

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
            {getTotalItems()}
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-[400px] overflow-y-auto p-6">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-xl">Meu Carrinho</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
              <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm leading-tight truncate">{item.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{item.price}</p>

                <div className="flex items-center gap-1 mt-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>

                  <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>

                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center text-base font-semibold">
            <span>Total de itens:</span>
            <span>{getTotalItems()}</span>
          </div>

          <Button
            className="w-full h-10 text-sm font-semibold bg-green-600 hover:bg-green-700"
            onClick={handleWhatsAppCheckout}
          >
            Finalizar pelo WhatsApp
          </Button>

          <Button variant="outline" className="w-full h-9 text-sm bg-transparent" onClick={clearCart}>
            Limpar carrinho
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
