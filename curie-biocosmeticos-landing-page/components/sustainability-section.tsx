export function SustainabilitySection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-balance">
            Princípios de Sustentabilidade
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com o planeta e todos os seres vivos
          </p>
        </div>

        <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="relative w-full max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/sustainability-principles.png"
                alt="Princípios de Sustentabilidade: Plastic Free, Cruelty Free, Eco Friendly, Natural Ingredients"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
