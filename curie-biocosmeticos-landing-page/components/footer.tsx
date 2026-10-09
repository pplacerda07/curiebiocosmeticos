import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  const links = {
    institutional: [
      { label: "Sobre", href: "#" },
      { label: "Produtos", href: "#" },
      { label: "Sustentabilidade", href: "#" },
      { label: "Contato", href: "#" },
    ],
  }

  return (
    <footer className="relative py-8 px-6 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-09%20at%2017.03.17-VN5hljqyweULGwhvJgVcjWutvZE4mO.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          
        </div>

        {/* Links */}
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          {links.institutional.map((link) => (
            <a key={link.label} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center mb-6">
          <a
            href="https://www.instagram.com/curie.biocosmeticos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-center text-sm text-white/80 mb-2">CNPJ: 56.616.169/0001-25</p>

        {/* Copyright */}
        <p className="text-center text-sm text-white/80">© Curie Biocosméticos 2024 – Ciência, Beleza e Propósito.</p>
      </div>
    </footer>
  )
}
