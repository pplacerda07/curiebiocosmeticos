# Curie Biocosméticos

Site institucional e protótipo da plataforma de curso da Curie Biocosméticos,
biocosméticos formulados com ativos do Cerrado e do Pantanal.

## O que tem aqui

| pasta | o que é |
| --- | --- |
| `curie-site/` | **O site novo.** É o que roda. HTML, SCSS e JavaScript puros, sem build de framework. |
| `curie-site/webcurso/` | Protótipo visual da plataforma de curso (6 telas). |
| `apresentacao/` | Deck de mercado, preço e plataforma, em PDF, mais o roteiro da reunião. |
| `brandguide/` | Identidade visual nova: logos em SVG e tipografia de apoio. |
| `mockup_novo/` | Template de referência que deu a forma do site. Fonte, não entra na publicação. |
| `curie-biocosmeticos-landing-page/` | Site antigo exportado do v0. Fonte de conteúdo, fotos e textos. Não entra na publicação. |

Só `curie-site/` vai para o ar. As outras três pastas são material de origem,
guardadas aqui para não se perderem.

## Rodando o site

```bash
npx serve curie-site -l 5173
```

Abre em `http://localhost:5173`. Não precisa de instalação: o site é estático e
as bibliotecas (locomotive-scroll e GSAP) estão versionadas em `curie-site/vendor/`.

## Mexendo no CSS

O CSS é compilado de SCSS. Nunca edite `curie-site/css/style.css` à mão, ele é gerado.

```bash
cd curie-site
npx sass scss/main.scss css/style.css --no-source-map --watch
```

Organização do SCSS:

```
scss/
  abstracts/    variáveis, cores, tipografia, utilitários
  base/         reset e tipografia base
  components/   nav, botões, carrinho, loja
  pages/
    _home.scss       camada do mockup, preservada como veio
    _curie.scss      seções novas e correções sobre o mockup
    _internas.scss   produtos, história, sustentabilidade
    _responsivo.scss todas as regras de mobile e tablet, centralizadas aqui
```

A regra é essa: o mockup fica intacto em `_home.scss` e tudo que é da Curie
entra por cima em `_curie.scss`. Assim dá para ver o que foi alterado e por quê.

## Páginas

| arquivo | endereço |
| --- | --- |
| `index.html` | `/` |
| `produtos.html` | `/produtos.html` |
| `sobre.html` | `/sobre.html` |
| `sustentabilidade.html` | `/sustentabilidade.html` |
| `webcurso/index.html` | `/webcurso/` |

## Catálogo e carrinho

Os 13 produtos ficam em `curie-site/javascript/produtos-data.js`. Para mudar
preço, foto ou descrição, é só esse arquivo.

O carrinho guarda o estado em `localStorage` na chave `curie-cart` e fecha o
pedido pelo WhatsApp, montando a mensagem com a lista de itens. Não há gateway
de pagamento no site.

## Tipografia

- **Canela** nos títulos
- **Chilton** no texto corrido
- **Analog Typewriter** nos rótulos e legendas
- **IBM Plex Sans** em `/webcurso`, porque é onde o aluno lê por muito tempo

As fontes estão em `curie-site/fonts/`.

## Convenções

- Sem travessão em nenhuma copy, do site ou do curso.
- Imagens otimizadas antes de entrar em `curie-site/images/`.
- Breakpoints: 1200, 1060, 768 e 480. Todas as regras ficam em `_responsivo.scss`.
