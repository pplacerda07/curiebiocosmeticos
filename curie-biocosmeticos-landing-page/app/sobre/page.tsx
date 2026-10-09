import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-balance">História</h1>
          </div>
        </section>

        <section className="py-16 px-6 bg-card">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-balance">Onde ciência, biomas e pele se encontram</h2>
              <p className="text-base leading-relaxed text-muted-foreground text-justify">
                A Curie Biocosméticos nasce do encontro entre pesquisa científica de ponta e a força dos biomas
                brasileiros. A partir do Cerrado e do Pantanal, territórios com uma das maiores biodiversidades do
                planeta, a marca surge com um propósito claro: transformar frutos nativos em cosméticos naturais de alta
                performance, preservando as histórias, os saberes e as comunidades que habitam esses lugares.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-justify">
                Com foco em ingredientes como acuri, bocaiúva, guavira e baru, a Curie enxerga esses frutos não apenas
                como matéria-prima, mas como concentrados de compostos bioativos capazes de regenerar, proteger e
                equilibrar a pele. Cada fórmula é desenvolvida para unir biotecnologia, respeito ao território e
                resultados concretos para quem usa, sempre com uma pergunta norteadora: como gerar impacto positivo na
                pele, nas pessoas e no bioma ao mesmo tempo?
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted shadow-soft">
              <Image
                src="/cerrado-biodiversity.jpg"
                alt="Biodiversidade do Cerrado em floração"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/20 px-2 py-1 rounded">
                © Luiz Felipe Mendes
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted order-2 md:order-1 shadow-soft">
                <Image
                  src="/lab-researcher.jpg"
                  alt="Dra. Daniely F. de Queiroz no laboratório"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-light text-balance">A cientista por trás das fórmulas</h2>
                <p className="text-base leading-relaxed text-muted-foreground text-justify">
                  A Curie Biocosméticos é liderada pela química Dra. Daniely F. de Queiroz, pesquisadora com mais de 10
                  anos de experiência em Pesquisa & Desenvolvimento. Formada em Química Tecnológica pela UFMS, possui
                  Mestrado em Química (Físico-Química) e Doutorado pelo Instituto de Química de São Carlos – USP, além
                  de pós-doutoramento (CAPES/PNPD) em biotecnologia e desenvolvimento de novos materiais.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground text-justify">
                  Sua trajetória acadêmica e profissional sempre esteve conectada ao uso inteligente da biodiversidade
                  brasileira. Hoje, ela atua integrando biotecnologia e nanotecnologia ao desenvolvimento de cosméticos
                  naturais, especialmente com ativos provenientes dos biomas Cerrado e Pantanal. Cada produto Curie
                  carrega esse rigor: fórmulas testadas, pensadas em detalhe e desenvolvidas para entregar eficácia
                  real, com responsabilidade social e ambiental.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-soft">
              <blockquote className="text-lg leading-relaxed text-foreground italic">
                "Comprometo-me a transformar ciência em impacto positivo, desenvolvendo cosméticos naturais de alta
                qualidade que promovem bem-estar, valorizam a biodiversidade do Cerrado e Pantanal e reafirmam o
                compromisso da Curie Biocosméticos com a responsabilidade social e ambiental."
              </blockquote>
              <p className="mt-4 text-sm font-medium text-muted-foreground">— Dra. Daniely F. de Queiroz</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance">Parceiros</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="relative w-full max-w-5xl h-80">
                <Image
                  src="/partners-logos.png"
                  alt="Parceiros: UFMS, Fundect, UCDB, SEBRAE e SEMADESC GOVMS"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-16 w-48">
                <Image
                  src="/logo-finep.png"
                  alt="Finep - Inovacao e Pesquisa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-balance">De ideia à startup reconhecida</h2>
              <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto text-justify">
                A Curie Biocosméticos é resultado de anos de pesquisa e de um movimento contínuo de transformação de
                conhecimento em soluções concretas para o mercado. Esse percurso vem sendo reconhecido em editais,
                programas de inovação e iniciativas que impulsionam negócios de base científica no Brasil.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">2024</span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Primeiro lugar
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Pitch – IDEATHON – Inova Cerrado</h3>
                    <p className="text-sm text-muted-foreground">
                      Reconhecimento do potencial inovador da Curie e da relevância do uso de frutos do Cerrado e
                      Pantanal em biocosméticos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">2024</span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Terceiro lugar
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Startup Inovadora – Edital Inova Ideação</h3>
                    <p className="text-sm text-muted-foreground">
                      Consolidação da Curie como startup em fase de ideação com base científica e foco em impacto
                      socioambiental.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">2025</span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Tração
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Entrada no Edital Inova Cerrado – Tração</h3>
                    <p className="text-sm text-muted-foreground">
                      Avanço para a etapa de tração, com fortalecimento do modelo de negócio e expansão da atuação da
                      marca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">2025</span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Top 1.000
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Prêmio Sebrae Startups</h3>
                    <p className="text-sm text-muted-foreground">
                      Premiação com participação no Startup Summit 2025, em Florianópolis, conectando a Curie ao
                      ecossistema nacional de inovação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border-l-4 border-primary shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">2025</span>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Aceleração
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Primeira Etapa FINEP (Ideação) – Mulheres Inovadoras 2025
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Seleção em programa voltado a mulheres à frente de negócios de base tecnológica, reforçando o
                      protagonismo feminino na ciência e no empreendedorismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-balance">Faça parte da nossa jornada</h2>
            <p className="text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
              Descubra produtos que combinam ciência, sustentabilidade e a riqueza da biodiversidade brasileira.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-soft transition-all-smooth"
                asChild
              >
                <a href="/produtos">Ver produtos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
