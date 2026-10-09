import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SustentabilidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-b from-secondary/30 via-background to-background">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">Sustentabilidade</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unindo ciência, comunidades e biomas em uma cadeia ética de beleza e conservação
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                  Biomas que sustentam vida, ciência e futuro
                </h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    O Cerrado e o Pantanal estão entre os biomas mais ricos do mundo, abrigando uma biodiversidade única
                    que sustenta espécies, regula o clima e mantém modos de vida inteiros. Preservar esses ecossistemas
                    é essencial para garantir equilíbrio ambiental e continuidade dos recursos naturais, incluindo uma
                    vasta variedade de frutos nativos ainda pouco explorados, mas com enorme potencial biológico e
                    econômico.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    Na Curie, esses biomas não são apenas cenário: são fonte de inspiração e de ativos. Acuri, bocaiúva,
                    guavira e baru são exemplos de frutos que concentram ácidos graxos de alta qualidade, carotenoides,
                    vitamina C, flavonoides e compostos fenólicos com intensa ação antioxidante, anti-inflamatória e
                    reparadora. Integrar esses ativos em cosméticos naturais é uma forma de gerar valor para a pele e,
                    ao mesmo tempo, reforçar a importância de conservar os biomas que os originam.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-soft">
                <Image
                  src="/pantanal-lake.jpg"
                  alt="Biodiversidade do Cerrado e Pantanal"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/20 px-2 py-1 rounded">
                  © Luiz Felipe Mendes
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-soft">
                <Image src="/cerrado-forest.jpg" alt="Biocosmética com frutos nativos" fill className="object-cover" />
                <div className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/20 px-2 py-1 rounded">
                  © Luiz Felipe Mendes
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                  Quando cuidar da pele também é cuidar do bioma
                </h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    Ao transformar frutos nativos em ativos cosméticos, a Curie adota um modelo de biocosmética que vai
                    além da estética. Cada fórmula é pensada para proporcionar hidratação, regeneração, proteção celular
                    e equilíbrio microbiológico da pele, mas sempre conectada a uma pergunta central: qual o impacto
                    disso no território?
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    A valorização desses frutos reforça a necessidade de conservar Cerrado e Pantanal, ao mesmo tempo em
                    que gera oportunidades sustentáveis para as comunidades locais. Ao apoiar cadeias produtivas
                    baseadas em manejo responsável, a marca contribui para que a biodiversidade se torne aliada do
                    desenvolvimento regional, e não vítima da exploração predatória. O objetivo é claro: usar ciência e
                    inovação para impulsionar uma economia que respeita ciclos naturais e fortalece quem vive nesses
                    territórios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                  Pessoas no centro da cadeia produtiva
                </h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    Na Curie Biocosméticos, sustentabilidade não é apenas um conceito técnico, mas uma relação concreta
                    com quem está na base da cadeia produtiva. A marca constrói suas operações junto a comunidades
                    indígenas, quilombolas e pequenos produtores que atuam na coleta e no manejo sustentável de frutos
                    nativos do Pantanal e do Cerrado.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-justify">
                    Essa parceria fortalece a economia local, gera renda e promove inclusão social, valorizando o
                    trabalho de agricultores familiares, mulheres coletoras e jovens empreendedores. Ao integrar saberes
                    tradicionais ao desenvolvimento de cosméticos naturais, a Curie respeita práticas culturais,
                    preserva o bioma e incentiva a permanência das famílias em seus territórios.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">ALDEIA TERENA – LALIMA</p>
                      <p className="text-sm text-muted-foreground">MIRANDA – MS</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">PROJETO BENEFICENTE – FREI JONAS</p>
                      <p className="text-sm text-muted-foreground">COMUNIDADE LAGEADO, CAMPO GRANDE – MS</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">PROJETO MEU QUINTAL É MAIOR QUE O MUNDO</p>
                      <p className="text-sm text-muted-foreground">ASSENTAMENTO 72, CORUMBÁ – MS</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">ASSENTAMENTO 72</p>
                      <p className="text-sm text-muted-foreground">CORUMBÁ – MS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-soft">
                <Image
                  src="/meu-quintal-logo.jpg"
                  alt="Projeto Meu Quintal é Maior Que o Mundo - Parceiro da Curie"
                  fill
                  className="object-contain bg-[#e8e4dc] p-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                Do frasco de volta à natureza: logística reversa em prática
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                A sustentabilidade da Curie também passa pelas embalagens. A logística reversa é o conjunto de ações e
                procedimentos que permitem fazer o caminho inverso do produto após o uso: em vez de virar lixo, a
                embalagem retorna para o fabricante ou para a cadeia produtiva de forma ambientalmente correta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-8 rounded-lg border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-4">Benefícios da Logística Reversa</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Evita o acúmulo de resíduos sólidos urbanos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduz a extração de recursos naturais necessários para fabricar novos frascos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Diminui emissões associadas à produção e ao transporte de novas embalagens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Contribui diretamente para metas de descarbonização de empresas alinhadas ao ESG</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-4">Programas de Retorno de Embalagens</h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  A Curie estrutura programas de retorno de embalagens que incentivam a participação ativa de quem
                  consome os produtos. O cliente devolve frascos vazios e pode receber descontos, brindes ou pontos em
                  programas de fidelidade.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Cada embalagem devolvida gera um crédito ambiental que pode ser convertido em apoio a projetos
                  ambientais e ações de conservação. Dessa forma, o frasco deixa de ser apenas um resíduo e passa a ser
                  um instrumento de impacto positivo, conectando o cuidado diário com a pele a uma cadeia mais ampla de
                  responsabilidade socioambiental.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
              Beleza que protege histórias e territórios
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Valorizar Cerrado e Pantanal por meio da biocosmética é proteger seus frutos, suas histórias e suas
              riquezas. Ao escolher um produto Curie, a pessoa não está apenas optando por um cosmético natural de alta
              performance, mas participando de uma rede que envolve ciência, comunidades locais, manejo consciente,
              logística reversa e conservação de biomas.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              A beleza que nasce desses territórios não é apenas visual: é a beleza de uma cadeia ética, que pretende
              seguir florescendo para as próximas gerações.
            </p>
            <div>
              <Link href="/produtos">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all-smooth"
                >
                  Conheça nossos produtos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
