# Curie Biocosméticos — site novo

Site estático montado **em cima do mockup** (`mockup_novo/p-gina-30-eagle-main`,
rebuild do rose-maggie.com), com o conteúdo migrado do site antigo
(`curie-biocosmeticos-landing-page`, exportado do v0) e a **nova identidade
visual** aplicada (`brandguide`).

## Como rodar

Não precisa de build para abrir — só de um servidor estático (por causa dos
caminhos relativos e das fontes):

```bash
npx serve curie-site -l 5173
```

Depois abra `http://localhost:5173`.

Para mexer no CSS, edite os arquivos em `scss/` e recompile:

```bash
npx sass --no-source-map scss/main.scss css/style.css
```

Ou deixe observando enquanto trabalha:

```bash
npx sass --watch --no-source-map scss/main.scss css/style.css
```

## Estrutura

```
index.html              home (todas as seções do mockup, com conteúdo Curie)
produtos.html           catálogo com filtros + carrinho
sobre.html              história, a cientista, parceiros, reconhecimentos
sustentabilidade.html   biomas, comunidades, logística reversa, princípios

css/style.css           CSS compilado (não editar à mão)
scss/                   fonte do CSS
  _bass.scss            fontes, paleta e base  ← identidade visual fica aqui
  pages/_home.scss      seções originais do mockup
  pages/_curie.scss     seções novas + nav clara sobre foto
  pages/_internas.scss  páginas internas
  pages/_responsivo.scss  TODAS as regras de tablet e celular
  components/_loja.scss carrinho, modal e cards de produto

javascript/
  index.js              locomotive-scroll + GSAP + menu (base do mockup)
  loja.js               carrinho, modal, catálogo e avaliações
  produtos-data.js      ← os 13 produtos (nome, preço, ativos, modo de uso)

vendor/                 gsap, ScrollTrigger e locomotive-scroll (sem CDN)
fonts/                  canela + Chilton + Analog Typewriter
icons/                  logotipos da nova identidade
images/                 fotos migradas do site antigo
```

## Identidade visual (brandguide 2026)

Definida em `scss/_bass.scss`:

| Token     | Cor       | Uso                                  |
| --------- | --------- | ------------------------------------ |
| `$color`  | `#602b0d` | marrom Curie — cor principal         |
| `$dark`   | `#232323` | carvão — textos                      |
| `$soft`   | `#f1f2eb` | off-white — fundo                    |
| `$decor`  | `#e7ea98` | verde-limão — apoio, botões, destaque |
| `$strong` | `#3d1b08` | marrom escuro                        |

Tipografia: **Canela** (títulos, herdada do mockup), **Chilton** (textos) e
**Analog Typewriter** (rótulos em caixa alta). As duas últimas vêm do brandguide.

Logotipos em `icons/`: `logo.svg` (marca + assinatura), `wordmark.svg` (só
"CURIE"), `simbolo.svg` (só o símbolo, usado como favicon) e `selo.svg` (selo
"Autenticidade Curie"). Os arquivos `*-claro.svg` são as mesmas artes em
off-white, para uso sobre foto.

## Imagens

As fotos vieram do site antigo em tamanho de câmera (a do topo tinha 8000×6000px
e 3,4 MB). Todas foram redimensionadas e recomprimidas: a pasta caiu de **58 MB
para 5,8 MB** e a home pesa ~1,9 MB na primeira visita.

Regras para não perder isso ao trocar uma foto:

- fundo de tela cheia: no máximo 1800px de largura, JPEG qualidade ~70 (ficam
  atrás de um véu escuro, não precisam de mais);
- fotos de conteúdo e produtos: no máximo 1600px, qualidade ~78;
- selos e logos: no máximo 900px;
- as tirinhas dentro dos títulos da home usam versões `-tira.jpg` de 640px.

A foto do topo de cada página tem `<link rel="preload">` no `<head>` — é o que
faz ela começar a baixar junto com o HTML, sem esperar o CSS. As demais imagens
usam `loading="lazy"`. Se trocar a foto do topo, troque também o `href` do
preload.

## Loja

- Carrinho em `localStorage`, contador no topo, drawer lateral.
- Checkout pelo WhatsApp **5516982139630** (mesmo número do site antigo), com a
  lista de itens e o total no texto da mensagem.
- Clicar no card abre o modal com descrição completa, benefícios, ativos e modo
  de uso.
- Para mudar preço, foto ou texto de um produto, edite `javascript/produtos-data.js`.

## Responsivo

O mockup original era desktop-only. O site foi adaptado para celular e tablet
em `scss/pages/_responsivo.scss` — é o único lugar onde mexer nisso.

Breakpoints:

| Largura   | O que muda                                                       |
| --------- | ---------------------------------------------------------------- |
| ≤ 1200px  | container com respiro lateral, títulos em vw, 3 colunas de produto |
| ≤ 1060px  | 2 colunas de produto, seções texto+imagem em coluna, modal empilhado |
| ≤ 768px   | layout de celular completo (abaixo)                               |
| ≤ 480px   | ajuste fino de fotos e títulos                                    |

No celular (≤768px):

- menu hambúrguer ocupa a tela inteira, com links grandes;
- a barra do topo ganha fundo off-white depois do herói (sobre a foto ela
  continua transparente, com o logo claro);
- `intro`, `contato`, `juramento` e rodapé viram coluna;
- catálogo com 2 colunas e filtros que deslizam na horizontal;
- carrinho e modal de produto ocupam a tela inteira, com o scroll da página
  travado enquanto estão abertos;
- quebras de linha escritas para desktop (`<br>`) são ignoradas.

**Scroll:** no desktop continua o scroll suave do locomotive-scroll com
parallax. No celular e no tablet o site usa o scroll nativo do navegador — o
smooth do locomotive briga com o toque e com a barra de endereço. É a opção
`smartphone/tablet: { smooth: false }` em `javascript/index.js`.

## O que ainda não está pronto

- Avaliações e fotos são as mesmas do site antigo.
