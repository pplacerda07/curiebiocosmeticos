import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsShowcaseSection } from "@/components/products-showcase-section"
import { ReviewsSection } from "@/components/reviews-section"
import { HistorySection } from "@/components/history-section"
import { ProductLinesSection } from "@/components/product-lines-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { ShopSection } from "@/components/shop-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProductsShowcaseSection />
        <ReviewsSection />
        <HistorySection />
        <ProductLinesSection />
        <ManifestoSection />
        <SustainabilitySection />
        <ShopSection />
        <Footer />
      </main>
    </>
  )
}
