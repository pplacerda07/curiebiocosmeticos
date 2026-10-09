# Escola Curie — protótipo da plataforma de curso

Maquete **visual** de uma plataforma de webcurso com a identidade da Curie.
São seis telas navegáveis, feitas para apresentação: **não há back-end, banco de
dados, login, pagamento nem vídeo de verdade**. Nada aqui salva informação.

## Como abrir

Precisa de servidor (os caminhos são absolutos a partir da raiz do site):

```bash
npx serve curie-site -l 5173
```

Depois: `http://localhost:5173/webcurso/`

Abrir o arquivo com dois cliques (file://) **não funciona** — o CSS não carrega.

No rodapé de toda tela existe uma **barra preta de protótipo** para pular entre
as telas durante a demonstração. É a única coisa que não faz parte do produto:
some quando o projeto virar site de verdade.

## As seis telas

| Arquivo               | Tela                     | O que demonstra |
| --------------------- | ------------------------ | --------------- |
| `index.html`          | Página de vendas         | herói, credenciais, para quem é, o que aprende, currículo em acordeão com 10 módulos, professora, diferenciais da plataforma, depoimentos, 3 planos, FAQ, garantia |
| `aluno.html`          | Área do aluno            | continuar de onde parou, progresso por módulo e geral, métricas, ofensiva de dias, próxima mentoria ao vivo, trilha com módulos bloqueados, conquistas, materiais, mural da professora |
| `aula.html`           | Sala de aula             | player com capítulos marcados na linha do tempo, velocidade, legendas, marcar como concluída, abas de visão geral / materiais / anotações com marcação de tempo / transcrição buscável / perguntas respondidas pela professora, e a trilha do curso na lateral |
| `laboratorio.html`    | Laboratório              | biblioteca de ativos nativos com ficha técnica, calculadora de formulação por fases (funciona de verdade) e caderno de bancada |
| `comunidade.html`     | Comunidade               | fórum com filtros e destaque para respostas da professora, agenda de mentorias, gravações, ranking da turma |
| `certificado.html`    | Avaliação e certificado  | quiz com feedback, certificado com selo e código de validação, conquistas e histórico de notas |

## O que foi pesquisado e incluído

O que as boas plataformas de curso oferecem hoje, traduzido para a linguagem da
Curie:

- continuar de onde parou, progresso por aula/módulo/curso
- marcar aula como concluída e liberação progressiva de módulos
- player com capítulos, velocidade, legenda e transcrição buscável
- anotações presas ao minuto do vídeo
- perguntas por aula, com resposta da professora em destaque
- materiais para download (ficha de bancada, planilha, dossiê)
- mentorias ao vivo com agenda e gravações
- comunidade com filtros e combinados de convivência
- gamificação: ofensiva de dias, conquistas, ranking
- avaliação por módulo com feedback e link para revisar a aula
- certificado com código de validação e compartilhamento
- busca global e notificações

E três coisas que **não existem nas plataformas genéricas** — foram desenhadas
para essa marca:

1. **Biblioteca de ativos nativos** — ficha técnica de acuri, bocaiúva, guavira,
   baru e outros: INCI, faixa de uso, fase da formulação, ponto de fusão, origem.
2. **Calculadora de formulação** — a aluna edita os percentuais por fase, escolhe
   o tamanho do lote e a plataforma devolve a pesagem em gramas, avisando quando
   a fórmula não fecha 100%. (Essa parte funciona no protótipo — pode testar.)
3. **Caderno de bancada** — histórico de experimentos com data, lote e o que deu
   errado, como um caderno de laboratório.

## Identidade

Mesmas cores do site, nos tokens do topo de `css/app.css`:

```css
--marrom: #602b0d;  --carvao: #232323;
--creme:  #f1f2eb;  --limao:  #e7ea98;
```

Tipografia: **IBM Plex Sans** em toda a plataforma (arquivo local em
`fonts/ibm-plex-sans.woff2`, sem depender de internet). A hierarquia vem de peso
e espaçamento, não de troca de fonte. As fontes da marca — Canela e Analog
Typewriter — seguem no site institucional; aqui elas saíram porque o aluno lê
transcrição, fórum e ficha técnica por muito tempo, e fonte de display cansa
nesse volume. A identidade continua pelas cores, pelo logo e pelo selo. Trocar uma cor nos tokens muda as seis telas.

## Conteúdo de exemplo — atenção

Tudo que é texto de curso neste protótipo é **preenchimento para a maquete
parecer real**: nomes de módulos e aulas, preços, depoimentos, perguntas do
fórum, dados técnicos dos ativos e o quiz. Nada foi aprovado nem revisado pela
Dra. Daniely.

Antes de qualquer publicação, o conteúdo real precisa entrar no lugar — em
especial as **fichas técnicas dos ativos e o quiz**, que trazem informação
técnica e não podem sair errados. As credenciais dela (UFMS, USP, CAPES/PNPD e
os prêmios) são as mesmas do site atual, essas estão corretas.

## Se o projeto for aprovado

Esta pasta é a referência visual, não a base de código final. Para virar produto
é preciso escolher o caminho: plataforma pronta (Hotmart, Kiwify, Memberkit),
LMS instalado, ou desenvolvimento próprio. As três ferramentas exclusivas
(biblioteca, calculadora e caderno) provavelmente vão exigir desenvolvimento
próprio, mesmo que o resto rode em plataforma pronta.
