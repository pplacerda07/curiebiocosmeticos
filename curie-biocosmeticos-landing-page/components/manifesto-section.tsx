export function ManifestoSection() {
  return (
    <section className="relative py-16 px-6 bg-primary overflow-hidden animate-fade-in">
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/botanical-ingredients.png)",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in animate-delay-200">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-primary-foreground text-balance text-center">
          <p className="mb-6">
            "Um cientista em seu laboratório não é apenas um técnico; é também uma criança diante de fenômenos naturais
            que o impressionam como contos de fadas."
          </p>
          <footer className="text-xl md:text-2xl font-normal">— Marie Curie</footer>
        </blockquote>
      </div>
    </section>
  )
}
