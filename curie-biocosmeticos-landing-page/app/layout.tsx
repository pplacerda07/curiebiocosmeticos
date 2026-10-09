import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Curie Biocosméticos | Ciência, natureza e propósito",
  description:
    "A Curie desenvolve cosméticos naturais a partir da biodiversidade do Cerrado e do Pantanal, combinando pesquisa acadêmica, inovação sustentável e saberes tradicionais.",
  keywords: [
    "biocosméticos",
    "cosméticos naturais",
    "cerrado",
    "pantanal",
    "sustentabilidade",
    "biotecnologia",
    "biodiversidade brasileira",
    "cosméticos sustentáveis",
  ],
  authors: [{ name: "Curie Biocosméticos" }],
  creator: "Curie Biocosméticos",
  publisher: "Curie Biocosméticos",
  generator: "v0.app",
  metadataBase: new URL("https://curiebiocosmeticos.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://curiebiocosmeticos.com.br",
    title: "Curie Biocosméticos | Ciência, natureza e propósito",
    description:
      "Cosméticos naturais que combinam biotecnologia, biodiversidade do Cerrado e Pantanal, e saberes tradicionais.",
    siteName: "Curie Biocosméticos",
    images: [
      {
        url: "/logo-curie.png",
        width: 1200,
        height: 630,
        alt: "Curie Biocosméticos - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curie Biocosméticos | Ciência, natureza e propósito",
    description:
      "Cosméticos naturais que combinam biotecnologia, biodiversidade do Cerrado e Pantanal, e saberes tradicionais.",
    images: ["/logo-curie.png"],
  },
  icons: {
    icon: [{ url: "/logo-curie.png", sizes: "any", type: "image/png" }],
    apple: [{ url: "/logo-curie.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo-curie.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
