"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 md:px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Desktop Navigation - agora à esquerda */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/produtos"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            História
          </Link>
          <Link
            href="/sustentabilidade"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Sustentabilidade
          </Link>
        </nav>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center px-8 md:px-12">
          <Image
            src="/logo-curie-black.png"
            alt="Curie Biocosméticos"
            width={240}
            height={80}
            className="h-14 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop CTA Button - à direita */}
        <Link href="/produtos" className="hidden md:block">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Comprar agora
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-8 mt-12">
              <Link
                href="/produtos"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors text-center"
              >
                Produtos
              </Link>
              <Link
                href="/sobre"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors text-center"
              >
                História
              </Link>
              <Link
                href="/sustentabilidade"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors text-center"
              >
                Sustentabilidade
              </Link>
              <Link href="/produtos" className="mt-6">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comprar agora
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
