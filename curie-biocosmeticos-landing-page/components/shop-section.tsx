import { Button } from "@/components/ui/button"
import { Instagram, Send } from 'lucide-react'
import Link from "next/link"

export function ShopSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-balance">Compre Online</h2>

        <p className="text-lg text-muted-foreground">Transforme sua rotina em um ritual de consciência.</p>

        <Link href="/produtos">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
          >
            Acessar produtos
          </Button>
        </Link>

        {/* Social Media */}
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Pinterest"
          >
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
