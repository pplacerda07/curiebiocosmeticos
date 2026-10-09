/* =========================================================
   Curie: plataforma de curso (protótipo)
   JS só de interface: abas, acordeões, menu, calculadora.
   Nada aqui conversa com servidor, é maquete visual.
   ========================================================= */

(function () {
  /* ---------- telas do protótipo (barra de demonstração) ---------- */
  var TELAS = [
    { id: "vendas", nome: "Página de vendas", url: "/webcurso/index.html" },
    { id: "aluno", nome: "Área do aluno", url: "/webcurso/aluno.html" },
    { id: "aula", nome: "Sala de aula", url: "/webcurso/aula.html" },
    { id: "laboratorio", nome: "Laboratório", url: "/webcurso/laboratorio.html" },
    { id: "comunidade", nome: "Comunidade", url: "/webcurso/comunidade.html" },
    { id: "certificado", nome: "Avaliação e certificado", url: "/webcurso/certificado.html" },
  ];

  /* ---------- menu da área do aluno ---------- */
  var ico = {
    inicio: '<path d="M3 9.5 10 4l7 5.5V16a1 1 0 0 1-1 1h-4v-4H8v4H4a1 1 0 0 1-1-1z"/>',
    curso: '<path d="M3 5h6a2 2 0 0 1 2 2v9a2 2 0 0 0-2-2H3zM17 5h-6a2 2 0 0 0-2 2v9a2 2 0 0 1 2-2h6z"/>',
    lab: '<path d="M8 3v5L3.5 15.5A1.5 1.5 0 0 0 4.8 18h10.4a1.5 1.5 0 0 0 1.3-2.5L12 8V3M7 3h6M6.5 13h7"/>',
    comunidade:
      '<path d="M7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM13.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2.5 16c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4M13 12c2 0 4 1.2 4 3.5"/>',
    agenda:
      '<path d="M3 5h14v12H3zM3 8.5h14M7 3v3M13 3v3"/><circle cx="7" cy="12" r="1"/>',
    certificado:
      '<path d="M10 3l1.9 3.9 4.3.6-3.1 3 .7 4.3L10 12.8 6.2 14.8l.7-4.3-3.1-3 4.3-.6z"/>',
    biblioteca: '<path d="M4 4h4v12H4zM9 4h3v12H9zM13.2 4.6l3 .8-3 11-3-.8z"/>',
    ajuda:
      '<circle cx="10" cy="10" r="7"/><path d="M8 8a2 2 0 1 1 2.6 1.9c-.4.2-.6.6-.6 1V12"/><circle cx="10" cy="14.5" r=".6" fill="currentColor"/>',
  };

  function svg(d) {
    return (
      '<svg class="ico" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' +
      d +
      "</svg>"
    );
  }

  var MENU = [
    {
      grupo: "Meu curso",
      itens: [
        { id: "aluno", nome: "Início", url: "/webcurso/aluno.html", ico: ico.inicio },
        { id: "aula", nome: "Sala de aula", url: "/webcurso/aula.html", ico: ico.curso },
        { id: "laboratorio", nome: "Laboratório", url: "/webcurso/laboratorio.html", ico: ico.lab },
      ],
    },
    {
      grupo: "Comunidade",
      itens: [
        {
          id: "comunidade",
          nome: "Fórum",
          url: "/webcurso/comunidade.html",
          ico: ico.comunidade,
          contador: "12",
        },
        { id: "mentorias", nome: "Mentorias ao vivo", url: "/webcurso/comunidade.html#mentorias", ico: ico.agenda },
      ],
    },
    {
      grupo: "Conquistas",
      itens: [
        {
          id: "certificado",
          nome: "Avaliação e certificado",
          url: "/webcurso/certificado.html",
          ico: ico.certificado,
        },
      ],
    },
  ];

  /* ---------- monta a casca do app ---------- */
  function montarApp(tela) {
    var lateral = document.createElement("aside");
    lateral.className = "lateral";
    lateral.id = "lateral";

    var html =
      '<div class="lateral__logo">' +
      '<img src="/icons/logo-claro.svg" alt="Curie" />' +
      "<em>Escola de biocosmética</em>" +
      "</div>";

    MENU.forEach(function (g) {
      html += '<div class="lateral__grupo"><span>' + g.grupo + "</span>";
      g.itens.forEach(function (i) {
        html +=
          '<a href="' +
          i.url +
          '" class="' +
          (i.id === tela ? "ativo" : "") +
          '">' +
          svg(i.ico) +
          i.nome +
          (i.contador ? '<em class="contador">' + i.contador + "</em>" : "") +
          "</a>";
      });
      html += "</div>";
    });

    html +=
      '<div class="lateral__rodape">' +
      '<div class="progresso-curso"><span>Seu progresso</span><span>62%</span></div>' +
      '<div class="barra barra--limao"><span style="width:62%"></span></div>' +
      '<a href="/webcurso/index.html" style="padding:1.2rem 0 0">' +
      svg(ico.ajuda) +
      "Central de ajuda</a>" +
      "</div>";

    lateral.innerHTML = html;

    var velo = document.createElement("div");
    velo.className = "velo";
    velo.id = "velo";

    var topo = document.createElement("header");
    topo.className = "topo-app";
    topo.innerHTML =
      '<button class="menu-app" id="abrir-menu" aria-label="Abrir menu">' +
      '<svg viewBox="0 0 20 20" width="18" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 6h14M3 10h14M3 14h14"/></svg>' +
      "</button>" +
      '<div class="busca">' +
      '<svg viewBox="0 0 20 20" width="15" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="9" r="5.5"/><path d="M13 13l4 4"/></svg>' +
      '<input type="text" placeholder="Buscar aula, ativo ou formulação" />' +
      "<kbd>⌘K</kbd>" +
      "</div>" +
      '<div class="topo-app__acoes">' +
      '<div class="ofensiva" title="Dias seguidos estudando">' +
      '<svg viewBox="0 0 20 20" width="14" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M10 2s4 4 4 8a4 4 0 0 1-8 0c0-1.5.7-2.8 1.4-3.7C8 8.6 9 9.5 9 11c0-3 1-5 1-9z"/></svg>' +
      "9 dias</div>" +
      '<button class="sino" aria-label="Notificações">' +
      '<svg viewBox="0 0 20 20" width="17" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M10 3a4 4 0 0 1 4 4v3l1.5 3h-11L6 10V7a4 4 0 0 1 4-4zM8.5 16a1.5 1.5 0 0 0 3 0"/></svg>' +
      "<span></span></button>" +
      '<div class="usuario">' +
      '<div class="avatar avatar--marrom">MR</div>' +
      "<div><strong>Marina Rocha</strong><em>Turma 01 · 2026</em></div>" +
      "</div></div>";

    var grade = document.createElement("div");
    grade.className = "app__grade";

    var principal = document.createElement("div");
    principal.style.minWidth = "0";

    // move o conteúdo existente para dentro da área principal
    while (document.body.firstChild) {
      principal.appendChild(document.body.firstChild);
    }

    principal.insertBefore(topo, principal.firstChild);
    grade.appendChild(lateral);
    grade.appendChild(principal);
    document.body.appendChild(grade);
    document.body.appendChild(velo);

    var abrir = document.getElementById("abrir-menu");
    abrir.addEventListener("click", function () {
      lateral.classList.add("aberta");
      velo.classList.add("ativo");
    });
    velo.addEventListener("click", function () {
      lateral.classList.remove("aberta");
      velo.classList.remove("ativo");
    });
  }

  /* ---------- barra de demonstração ---------- */
  function montarDemo(tela) {
    var barra = document.createElement("nav");
    barra.className = "demo";
    var html = '<span class="demo__titulo">Protótipo · telas</span>';
    TELAS.forEach(function (t) {
      html +=
        '<a href="' +
        t.url +
        '" class="' +
        (t.id === tela ? "ativo" : "") +
        '">' +
        t.nome +
        "</a>";
    });
    barra.innerHTML = html;
    document.body.appendChild(barra);
  }

  /* ---------- acordeões (currículo e faq) ---------- */
  function acordeoes() {
    document.addEventListener("click", function (e) {
      var cab = e.target.closest(".modulo__cabeca, .faq__pergunta");
      if (!cab) return;
      var item = cab.parentElement;
      var irmaos = item.parentElement.querySelectorAll(".modulo.aberto, .faq__item.aberto");
      var jaAberto = item.classList.contains("aberto");
      irmaos.forEach(function (i) {
        if (i !== item) i.classList.remove("aberto");
      });
      item.classList.toggle("aberto", !jaAberto);
    });
  }

  /* ---------- abas ---------- */
  function abas() {
    document.addEventListener("click", function (e) {
      var aba = e.target.closest(".aba");
      if (!aba) return;
      var grupo = aba.parentElement;
      var alvo = aba.getAttribute("data-painel");
      grupo.querySelectorAll(".aba").forEach(function (a) {
        a.classList.toggle("ativa", a === aba);
      });
      document.querySelectorAll(".painel").forEach(function (p) {
        p.classList.toggle("ativo", p.id === alvo);
      });
    });
  }

  /* ---------- quiz (só feedback visual) ---------- */
  function quiz() {
    document.addEventListener("click", function (e) {
      var alt = e.target.closest(".alternativa");
      if (!alt) return;
      var caixa = alt.parentElement;
      caixa.querySelectorAll(".alternativa").forEach(function (a) {
        a.classList.remove("certa");
      });
      alt.classList.add("certa");
      var fb = caixa.parentElement.querySelector(".feedback");
      if (fb) fb.style.display = "block";
    });
  }

  /* ---------- calculadora de formulação ---------- */
  function calculadora() {
    var tabela = document.getElementById("formulacao");
    if (!tabela) return;

    function recalcular() {
      var lote = parseFloat(document.getElementById("lote").value) || 0;
      var soma = 0;
      tabela.querySelectorAll("tbody tr[data-item]").forEach(function (tr) {
        var pct = parseFloat(tr.querySelector(".pct").value) || 0;
        soma += pct;
        tr.querySelector(".gramas").textContent = ((pct / 100) * lote).toFixed(1) + " g";
      });
      var total = document.getElementById("total-pct");
      total.textContent = soma.toFixed(1) + "%";
      var aviso = document.getElementById("aviso-total");
      var ok = Math.abs(soma - 100) < 0.05;
      aviso.textContent = ok ? "fórmula fechada em 100%" : "ajuste para fechar 100%";
      aviso.style.opacity = ok ? "0.6" : "1";
      document.getElementById("total-g").textContent = lote.toFixed(0) + " g";
    }

    tabela.addEventListener("input", recalcular);
    var lote = document.getElementById("lote");
    if (lote) lote.addEventListener("input", recalcular);
    recalcular();
  }

  /* ---------- marcar aula como concluída ---------- */
  function concluir() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-concluir]");
      if (!b) return;
      b.classList.toggle("btn-limao");
      b.classList.toggle("btn-linha");
      var feito = b.classList.contains("btn-limao");
      b.querySelector("span").textContent = feito
        ? "Aula concluída"
        : "Marcar como concluída";
      var atual = document.querySelector(".trilha__aula.atual");
      if (atual) atual.classList.toggle("concluida", feito);
    });
  }

  /* ---------- player falso ---------- */
  function player() {
    var linha = document.querySelector(".player__linha");
    if (!linha) return;
    linha.addEventListener("click", function (e) {
      var r = linha.getBoundingClientRect();
      var p = ((e.clientX - r.left) / r.width) * 100;
      linha.querySelector("i").style.width = Math.max(2, Math.min(100, p)) + "%";
    });
  }

  /* ---------- início ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var tela = document.body.getAttribute("data-tela") || "";
    if (document.body.classList.contains("app")) montarApp(tela);
    montarDemo(tela);
    acordeoes();
    abas();
    quiz();
    calculadora();
    concluir();
    player();
  });
})();
