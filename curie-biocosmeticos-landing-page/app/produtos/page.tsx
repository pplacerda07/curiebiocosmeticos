"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ProductModal } from "@/components/product-modal"
import { Sparkles, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const allProducts = [
  {
    name: "Shampoo Sólido Fortalecedor",
    description: "Um toque de natureza para nutrir e realçar a vitalidade dos seus cabelos",
    detailedDescription:
      "Um shampoo sólido fortalecedor desenvolvido para aumentar a resistência dos fios e estimular a vitalidade capilar. Sua fórmula reúne argila vermelha, extratos de chá verde, alecrim e aloe vera, além de óleos vegetais nutritivos como abacate, acuri, bocaiúva, macadâmia e manteiga de rosa mosqueta. Esses ativos trabalham em conjunto para promover limpeza equilibrada, reduzir quebra, melhorar a textura e favorecer o crescimento saudável. O resultado são cabelos mais fortes, densos e com aparência naturalmente revitalizada.",
    image: "/shampoo-vermelha.png",
    price: "R$ 45,00",
    category: "Shampoo",
    benefits: [
      "Fortalece os fios",
      "Nutrição profunda",
      "Realça a vitalidade natural dos cabelos",
      "Fórmula vegana e sustentável",
    ],
    ingredients: [
      "Argila Vermelha",
      "Extrato de Cenoura",
      "Essência de Amora",
      "Jaborandi",
      "Queratina Vegetal",
      "Vitamina E",
      "Óleo Vegetal de Acuri",
      "Óleo Vegetal de Bocaiúva",
      "Óleo Vegetal de Macadâmia",
      "Óleo Vegetal de Argan",
      "Manteiga de Rosa Mosqueta",
    ],
    howToUse: [
      "Molhe bem os cabelos e umedeça o shampoo sólido até formar a espuma.",
      "Aplique diretamente no couro cabeludo, fazendo movimentos circulares até obter uma espuma abundante.",
      "Massageie e enxágue, repetindo se necessário; deixe o shampoo secar em local arejado após o uso.",
    ],
  },
  {
    name: "Shampoo Sólido Nutrição",
    description: "Um blend cítrico e nutritivo para restaurar a maciez e o brilho dos seus fios",
    detailedDescription:
      "Um shampoo sólido formulado para devolver maciez, brilho e vitalidade aos fios. A combinação de argila amarela, manteiga de manga, óleos vegetais de acuri e bocaiúva e extrato glicerinado de maracujá cria um tratamento nutritivo que fortalece a fibra capilar enquanto limpa de forma suave. Sua fragrância cítrica proporciona sensação de frescor, enquanto os ativos botânicos favorecem a hidratação profunda e a recuperação da textura natural dos cabelos.",
    image: "/shampoo-amarela.png",
    price: "R$ 45,00",
    category: "Shampoo",
    benefits: [
      "Restaura a maciez dos fios",
      "Proporciona brilho intenso",
      "Aroma cítrico revigorante",
      "Fórmula vegana com óleos do Cerrado",
    ],
    ingredients: [
      "Argila Amarela",
      "Manteiga de Manga",
      "Manteiga",
      "Queratina Vegetal",
      "Vitamina E",
      "Acuri (Óleo Vegetal)",
      "Bocaiúva (Óleo Vegetal)",
      "Maracujá (Extrato/Manteiga)",
      "Laranja (Extrato/Manteiga)",
      "Óleo Essencial de Laranja",
      "Óleo Essencial de Capim-Limão",
    ],
    howToUse: [
      "Molhe bem os cabelos e umedeça o shampoo sólido até formar a espuma.",
      "Aplique diretamente no couro cabeludo, fazendo movimentos circulares até obter uma espuma abundante.",
      "Massageie e enxágue, repetindo se necessário; deixe o shampoo secar em local arejado após o uso.",
    ],
  },
  {
    name: "Shampoo Sólido Neutro",
    description: "A pureza e o equilíbrio da natureza para uma limpeza suave e o cuidado diário dos seus cabelos",
    detailedDescription:
      "Um shampoo sólido desenvolvido para proporcionar limpeza delicada e eficaz, ideal para o uso diário e para todos os tipos de cabelo. Sua fórmula combina agentes suaves de limpeza com argila branca, óleos vegetais de acuri e bocaiúva, manteiga de aloe vera e extratos botânicos que preservam a hidratação natural dos fios. O resultado é um cuidado equilibrado, que mantém o couro cabeludo saudável, reduz o ressecamento e deixa os cabelos mais leves, macios e com aspecto naturalmente renovado.",
    image: "/shampoo-branca.png",
    price: "R$ 45,00",
    category: "Shampoo",
    benefits: [
      "Limpeza suave e equilibrada",
      "Ideal para uso diário",
      "Respeita o pH natural dos cabelos",
      "Fórmula neutra e calmante",
    ],
    ingredients: [
      "Argila Branca",
      "Manteiga de Aloe Vera",
      "Queratina Vegetal",
      "Vitamina E",
      "Bocaiúva (Óleo Vegetal)",
      "Acuri (Óleo Vegetal)",
      "Óleo de Coco",
      "Aloe Vera (Extrato)",
      "Extrato de Alecrim",
    ],
    howToUse: [
      "Molhe bem os cabelos e umedeça o shampoo sólido até formar a espuma.",
      "Aplique diretamente no couro cabeludo, fazendo movimentos circulares até obter uma espuma abundante.",
      "Massageie e enxágue, repetindo se necessário; deixe o shampoo secar em local arejado após o uso.",
    ],
  },
  {
    name: "Shampoo Sólido Detox",
    description:
      "O poder purificante da argila preta e dos óleos da floresta para um detox revigorante e uma fragrância marcante",
    detailedDescription:
      "Um shampoo sólido purificante formulado para remover impurezas, oleosidade excessiva e acúmulos do dia a dia sem agredir os fios. A presença de argila preta, manteiga de karité e óleos vegetais da biodiversidade amazônica promove um detox profundo e restaurador. Sua composição une limpeza eficiente, hidratação equilibrada e fragrância marcante, entregando uma sensação de frescor e revitalização que deixa o cabelo mais solto, leve e com brilho natural.",
    image: "/shampoo-preta.png",
    price: "R$ 45,00",
    category: "Shampoo",
    benefits: [
      "Detox profundo do couro cabeludo",
      "Remove impurezas e resíduos",
      "Revigora e fortalece os fios",
      "Fragrância marcante e duradoura",
    ],
    ingredients: [
      "Argila Preta",
      "Manteiga de Karité",
      "Queratina Vegetal",
      "Vitamina E",
      "Licuri (Óleo Vegetal)",
      "Pracaxi (Óleo Vegetal)",
      "Bocaiúva (Óleo Vegetal)",
      "Acuri (Óleo Vegetal)",
    ],
    howToUse: [
      "Molhe bem os cabelos e umedeça o shampoo sólido até formar a espuma.",
      "Aplique diretamente no couro cabeludo, fazendo movimentos circulares até obter uma espuma abundante.",
      "Massageie e enxágue, repetindo se necessário; deixe o shampoo secar em local arejado após o uso.",
    ],
  },
  {
    name: "Sérum ThriHalo",
    description: "Anti-aging com triplo ácido hialurônico para hidratação profunda e rejuvenescimento",
    detailedDescription:
      "Um sérum facial anti-aging formulado com tecnologia de triplo ácido hialurônico que atua em diferentes camadas da pele para proporcionar hidratação profunda, preenchimento e redução de linhas de expressão. A combinação de ácido hialurônico de alto, médio e baixo peso molecular (nano) garante absorção completa e resultados visíveis. Enriquecido com D-Pantenol para reparação e hidrolato de alecrim para tonificação, este sérum promove uma pele mais firme, lisa e radiante.",
    image: "/serum-trihalo.png",
    price: "R$ 89,00",
    category: "Séruns",
    benefits: [
      "Hidratação profunda em múltiplas camadas",
      "Reduz linhas de expressão e rugas",
      "Promove firmeza e elasticidade",
      "Textura leve e rápida absorção",
    ],
    ingredients: [
      "Ácido Hialurônico de Alto Peso Molecular",
      "Ácido Hialurônico de Médio Peso Molecular",
      "Nano Ácido Hialurônico",
      "D-Pantenol",
      "Hidrolato de Alecrim",
    ],
    howToUse: [
      "Aplique de 3 a 5 gotas do sérum na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos ascendentes até completa absorção.",
      "Use pela manhã e à noite antes do hidratante para potencializar os resultados.",
    ],
  },
  {
    name: "Sérum Blend Oil",
    description: "Blend de óleos vegetais com toque seco para nutrição e luminosidade",
    detailedDescription:
      "Um sérum facial oleoso desenvolvido com blend exclusivo de óleos vegetais nativos do Cerrado e nutrientes essenciais. Sua fórmula de toque seco proporciona nutrição profunda sem deixar a pele oleosa, ideal para todos os tipos de pele, inclusive as oleosas. Rico em vitamina E e óleos de bocaiúva, acuri, jojoba e semente de uva, este sérum promove luminosidade natural, proteção antioxidante e hidratação balanceada. O óleo essencial de laranja adiciona frescor e benefícios revitalizantes.",
    image: "/serum-blend-oil.png",
    price: "R$ 89,00",
    category: "Séruns",
    benefits: [
      "Nutrição profunda com toque seco",
      "Luminosidade natural instantânea",
      "Proteção antioxidante",
      "Absorção rápida sem oleosidade",
    ],
    ingredients: [
      "Vitamina E",
      "Óleo Vegetal de Bocaiúva",
      "Óleo Vegetal de Acuri",
      "Óleo Vegetal de Jojoba",
      "Óleo Vegetal de Semente de Uva",
      "Óleo Essencial de Laranja",
    ],
    howToUse: [
      "Aplique de 3 a 5 gotas do sérum na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos ascendentes até completa absorção.",
      "Use pela manhã e à noite antes do hidratante para potencializar os resultados.",
    ],
  },
  {
    name: "Sérum MultVit",
    description: "Multivitamínico para pele acneica e manchas com niacinamida, vitamina C e óleos essenciais",
    detailedDescription:
      "Um sérum facial multivitamínico desenvolvido especialmente para peles acneicas e com manchas. Sua fórmula concentrada reúne vitaminas essenciais como B5 (D-Pantenol), B3 (Niacinamida) e C (Ácido Ascórbico) que trabalham em sinergia para controlar oleosidade, reduzir inflamações, uniformizar o tom da pele e clarear manchas. Os hidrolatos de alecrim e gerânio promovem equilíbrio e tonificação, enquanto os óleos essenciais de alecrim e melaleuca oferecem ação purificante e antibacteriana. Resultados visíveis na redução de acne e manchas em uso contínuo.",
    image: "/serum-multvit.png",
    price: "R$ 89,00",
    category: "Séruns",
    benefits: [
      "Controle de oleosidade e acne",
      "Uniformiza o tom da pele",
      "Clareamento de manchas",
      "Ação antibacteriana e purificante",
    ],
    ingredients: [
      "D-Pantenol (Vitamina B5)",
      "Niacinamida (Vitamina B3)",
      "Ácido Ascórbico (Vitamina C)",
      "Hidrolato de Alecrim",
      "Hidrolato de Gerânio",
      "Óleo Essencial de Alecrim",
      "Óleo Essencial de Melaleuca",
    ],
    howToUse: [
      "Aplique de 3 a 5 gotas do sérum na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos ascendentes até completa absorção.",
      "Use pela manhã e à noite antes do hidratante para potencializar os resultados.",
    ],
  },
  {
    name: "Hidratante Facial",
    description: "Hidratação balanceada com extratos botânicos e vitaminas para pele saudável e luminosa",
    detailedDescription:
      "Um hidratante facial desenvolvido para proporcionar hidratação equilibrada e conforto imediato à pele. Sua fórmula reúne extrato de aveia para suavizar e acalmar, D-Pantenol para reparação, vitamina E como poderoso antioxidante, extrato de aloe vera para hidratação profunda e vitamina A para renovação celular. Esta combinação de ativos botânicos e vitaminas essenciais promove uma pele mais saudável, macia, protegida e com luminosidade natural. Textura leve e não oleosa, ideal para uso diário.",
    image: "/hidratante-facial.png",
    price: "R$ 67,00",
    category: "Outros",
    benefits: [
      "Hidratação equilibrada e duradoura",
      "Acalma e suaviza a pele",
      "Proteção antioxidante",
      "Textura leve e não oleosa",
    ],
    ingredients: ["Extrato de Aveia", "D-Pantenol", "Vitamina E", "Extrato de Aloe Vera", "Vitamina A"],
    howToUse: [
      "Aplique o hidratante na pele limpa e seca do rosto e pescoço.",
      "Massageie suavemente com movimentos circulares ascendentes até completa absorção.",
      "Use pela manhã e à noite para melhores resultados.",
    ],
  },
  {
    name: "Hidratante Corporal",
    description: "Nutrição profunda com manteigas e óleos nativos do Cerrado para pele macia e perfumada",
    detailedDescription:
      "Um hidratante corporal desenvolvido para proporcionar nutrição profunda e hidratação intensa para todo o corpo. Sua fórmula exclusiva combina manteiga de karité para nutrição, óleos vegetais de acuri e bocaiúva do Cerrado brasileiro, vitamina E antioxidante, manteiga de aloe vera hidratante, pantenol reparador e um blend harmonioso de óleos essenciais que perfumam delicadamente a pele. Esta composição rica em ativos naturais deixa a pele extremamente macia, nutrida, protegida e com fragrância envolvente. Textura cremosa de fácil espalhabilidade e absorção.",
    image: "/hidratante-corporal.png",
    price: "R$ 78,00",
    category: "Outros",
    benefits: [
      "Nutrição profunda e hidratação intensa",
      "Pele macia e sedosa",
      "Fragrância natural envolvente",
      "Ingredientes nativos do Cerrado",
    ],
    ingredients: [
      "Manteiga de Karité",
      "Óleo Vegetal de Acuri",
      "Óleo Vegetal de Bocaiúva",
      "Vitamina E",
      "Manteiga de Aloe Vera",
      "Mix de Óleos Essenciais",
      "Pantenol",
    ],
    howToUse: [
      "Aplique o hidratante generosamente em todo o corpo após o banho com a pele ainda úmida.",
      "Massageie suavemente até completa absorção.",
      "Use diariamente para manter a pele nutrida e protegida.",
    ],
  },
  {
    name: "Sabonete Facial em Pó",
    description: "Limpeza suave e purificante com argila branca para pele equilibrada e revitalizada",
    detailedDescription:
      "Um sabonete facial em pó inovador desenvolvido para proporcionar limpeza profunda e suave sem agredir a pele. Sua fórmula única combina argila branca purificante que remove impurezas e oleosidade excessiva, tapioca para textura sedosa e essência de violeta para aroma delicado e relaxante. Este produto transforma-se em uma espuma cremosa ao entrar em contato com água, proporcionando uma experiência de limpeza refrescante e eficaz. Ideal para todos os tipos de pele, especialmente as sensíveis.",
    image: "/sabonete-facial-po.png",
    price: "R$ 52,00",
    category: "Outros",
    benefits: [
      "Limpeza profunda e suave",
      "Remove impurezas sem ressecar",
      "Equilibra a oleosidade natural",
      "Aroma delicado de violeta",
    ],
    ingredients: ["Argila Branca", "Essência de Violeta", "Tapioca"],
    howToUse: [
      "Umedeça o rosto com água.",
      "Coloque uma pequena quantidade do pó na palma da mão e adicione água até formar uma pasta cremosa.",
      "Aplique no rosto com movimentos circulares suaves e enxágue abundantemente.",
    ],
  },
  {
    name: "Sabonete Líquido de Açaí",
    description: "Limpeza antioxidante com extrato de açaí para pele protegida e nutrida",
    detailedDescription:
      "Um sabonete líquido desenvolvido com a poderosa ação antioxidante do açaí amazônico. Sua fórmula enriquecida combina extrato de açaí rico em antocianinas, extrato glicerinado de aloe vera para hidratação, óleo de bocaiúva do Cerrado para nutrição e pó de açaí que oferece suave esfoliação e coloração natural. Este sabonete promove limpeza eficaz enquanto protege a pele dos radicais livres, mantendo-a macia, nutrida e com sensação de frescor. Sua cor escura característica vem naturalmente do açaí, sem corantes artificiais.",
    image: "/sabonete-acai.png",
    price: "R$ 58,00",
    category: "Outros",
    benefits: [
      "Limpeza eficaz e antioxidante",
      "Protege contra radicais livres",
      "Nutre e hidrata a pele",
      "Cor natural do açaí",
    ],
    ingredients: ["Extrato de Açaí", "Extrato Glicerinado de Aloe Vera", "Bocaiúva", "Pó de Açaí"],
    howToUse: [
      "Aplique uma quantidade adequada nas mãos úmidas ou diretamente na pele.",
      "Massageie suavemente até formar espuma.",
      "Enxágue abundantemente com água.",
    ],
  },
  {
    name: "Condicionador Sólido Cabelo Oleoso",
    description: "Fórmula leve e equilibrada com jaborandi para cabelos oleosos, promovendo leveza e brilho natural",
    detailedDescription:
      "Um condicionador sólido especialmente desenvolvido para cabelos oleosos que necessitam de nutrição sem pesar. Sua fórmula combina manteiga de karité e manga para nutrição equilibrada, óleo essencial de jaborandi que ajuda a controlar a oleosidade, vitamina E antioxidante e óleos vegetais de acuri e bocaiúva do Cerrado. A proteína hidrolisada de arroz fortalece e dá corpo aos fios. Este condicionador proporciona desembaraço fácil, controle da oleosidade e brilho natural sem deixar os cabelos pesados.",
    image: "/condicionador-oleoso.jpg",
    price: "R$ 48,00",
    category: "Condicionador",
    benefits: [
      "Controla a oleosidade dos fios",
      "Proporciona leveza e brilho",
      "Desembaraça sem pesar",
      "Fórmula sólida sustentável",
    ],
    ingredients: [
      "Manteiga de Karité",
      "Óleo Essencial de Jaborandi",
      "Manteiga de Manga",
      "Vitamina E",
      "Óleo Vegetal de Acuri",
      "Óleo Vegetal de Bocaiúva",
      "Proteína Hidrolisada de Arroz",
    ],
    howToUse: [
      "Após lavar os cabelos, aplique o condicionador sólido nos fios úmidos, do comprimento às pontas.",
      "Deslize o produto nos cabelos ou esfregue nas mãos até formar uma camada cremosa.",
      "Deixe agir por 2-3 minutos e enxágue bem; guarde em local seco após o uso.",
    ],
  },
  {
    name: "Condicionador Sólido Cabelos Secos",
    description: "Tratamento intensivo com macadâmia e abacate para cabelos secos e quimicamente tratados",
    detailedDescription:
      "Um condicionador sólido de tratamento intensivo formulado para cabelos secos, ressecados e quimicamente tratados que necessitam de reparação profunda. A combinação de manteiga de macadâmia e abacate proporciona nutrição intensa, enquanto os óleos essenciais de alecrim e laranja doce estimulam a vitalidade capilar. Enriquecido com vitamina E, óleos vegetais de acuri e bocaiúva do Cerrado e proteína hidrolisada de arroz que reconstrói a fibra capilar. Este condicionador devolve maciez, brilho e força aos fios danificados.",
    image: "/condicionador-secos.jpg",
    price: "R$ 48,00",
    category: "Condicionador",
    benefits: [
      "Reparação profunda dos fios",
      "Nutrição intensa para cabelos secos",
      "Ideal para cabelos quimicamente tratados",
      "Restaura maciez e brilho",
    ],
    ingredients: [
      "Manteiga de Macadâmia",
      "Óleo Essencial de Alecrim",
      "Óleo Essencial de Laranja Doce",
      "Manteiga de Abacate",
      "Vitamina E",
      "Óleo Vegetal de Acuri",
      "Proteína Hidrolisada de Arroz",
      "Óleo Vegetal de Bocaiúva",
    ],
    howToUse: [
      "Após lavar os cabelos, aplique o condicionador sólido nos fios úmidos, do comprimento às pontas.",
      "Deslize o produto nos cabelos ou esfregue nas mãos até formar uma camada cremosa.",
      "Deixe agir por 3-5 minutos para tratamento intensivo e enxágue bem; guarde em local seco após o uso.",
    ],
  },
]

export default function ProdutosPage() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const { addToCart } = useCart()

  const categories = ["Todos", "Shampoo", "Condicionador", "Séruns", "Outros"]

  const filteredProducts =
    selectedCategory === "Todos" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  const handleProductClick = (product: (typeof allProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart({
      id: product.name,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <>
      {/* Header component for site navigation */}
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary/30 via-background to-background">
          <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
            <div className="text-center space-y-3">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Nossos Produtos
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-balance">Catálogo de Produtos</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Descubra nossa linha completa de cosméticos naturais desenvolvidos com ingredientes do Cerrado e
                Pantanal brasileiro
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-full font-medium text-sm md:text-base transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary/50 text-foreground hover:bg-secondary hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/50"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="aspect-square relative overflow-hidden bg-secondary/50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] md:text-xs font-medium">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-3 md:p-6 space-y-2 md:space-y-3">
                    <h3 className="text-sm md:text-lg lg:text-xl font-medium text-balance leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[10px] md:text-sm text-muted-foreground text-pretty line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="pt-2 md:pt-3 flex items-center justify-between gap-2">
                      <span className="text-base md:text-lg font-medium text-primary">{product.price}</span>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 gap-1.5 text-[10px] md:text-sm h-8 md:h-9 px-3"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
                        <span className="hidden sm:inline">Adicionar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer />

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
