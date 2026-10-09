/* ---------------------------------------------------------
   Curie: loja (carrinho, modal de produto, catálogo)
   Vanilla JS, sem dependências. Funciona em todas as páginas.
   --------------------------------------------------------- */

(function () {
  var PRODUCTS = window.CURIE_PRODUCTS || [];
  var WHATSAPP = "5516982139630";
  var STORAGE_KEY = "curie-cart";

  /* ---------- helpers ---------- */

  function slug(str) {
    return str
      .normalize("NFD")
      .replace(new RegExp("[\u0300-\u036f]", "g"), "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function priceToNumber(price) {
    return parseFloat(String(price).replace(/[^0-9,]/g, "").replace(",", "."));
  }

  function formatBRL(value) {
    return "R$ " + value.toFixed(2).replace(".", ",");
  }

  function byName(name) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].name === name) return PRODUCTS[i];
    }
    return null;
  }

  function pauseScroll(stop) {
    // trava o scroll nativo (celular/tablet)
    document.documentElement.classList.toggle("is-locked", !!stop);
    var s = window.curieScroll;
    if (!s) return;
    if (stop && s.stop) s.stop();
    if (!stop && s.start) s.start();
  }

  /* ---------- estado do carrinho ---------- */

  var cart = [];

  function loadCart() {
    try {
      cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
  }

  function totalItems() {
    return cart.reduce(function (t, i) {
      return t + i.quantity;
    }, 0);
  }

  function totalPrice() {
    return cart.reduce(function (t, i) {
      return t + priceToNumber(i.price) * i.quantity;
    }, 0);
  }

  function addToCart(product) {
    var found = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === product.name) found = cart[i];
    }
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({
        id: product.name,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
    saveCart();
    renderCart();
    openCart();
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) return removeFromCart(id);
    cart = cart.map(function (item) {
      return item.id === id ? Object.assign({}, item, { quantity: quantity }) : item;
    });
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) {
      return item.id !== id;
    });
    saveCart();
    renderCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
    renderCart();
  }

  function checkout() {
    var message = "Oie, fiz meu carrinho no site e escolhi esses produtos:";
    cart.forEach(function (item) {
      message +=
        "\n- " +
        item.name +
        " (" +
        item.quantity +
        " " +
        (item.quantity === 1 ? "unidade" : "unidades") +
        ")";
    });
    message += "\n\nTotal estimado: " + formatBRL(totalPrice());
    window.open(
      "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message),
      "_blank"
    );
  }

  /* ---------- markup injetado (carrinho + modal) ---------- */

  function injectShell() {
    var shell = document.createElement("div");
    shell.innerHTML = [
      '<div class="drawer__overlay" id="drawer__overlay"></div>',
      '<aside class="drawer" id="drawer">',
      '  <div class="drawer__head row">',
      '    <p class="paragraph p-one">MEU CARRINHO</p>',
      '    <a class="btn hover-btn" id="drawer__close">FECHAR</a>',
      "  </div>",
      '  <div class="drawer__body" id="drawer__body"></div>',
      '  <div class="drawer__foot" id="drawer__foot"></div>',
      "</aside>",
      '<div class="modal" id="modal">',
      '  <div class="modal__overlay" id="modal__overlay"></div>',
      '  <div class="modal__box" id="modal__box"></div>',
      "</div>",
    ].join("");
    while (shell.firstChild) document.body.appendChild(shell.firstChild);
  }

  /* ---------- carrinho: render ---------- */

  function renderCart() {
    var count = document.querySelectorAll(".cart-count");
    for (var i = 0; i < count.length; i++) {
      count[i].textContent = totalItems();
      count[i].classList.toggle("is-empty", totalItems() === 0);
    }

    var body = document.getElementById("drawer__body");
    var foot = document.getElementById("drawer__foot");
    if (!body || !foot) return;

    if (!cart.length) {
      body.innerHTML =
        '<p class="paragraph drawer__empty">Seu carrinho está vazio.<br />Que tal começar pelos nossos destaques?</p>';
      foot.innerHTML =
        '<a href="./produtos.html" class="btn center-item" data-name="CATÁLOGO"><span>VER PRODUTOS</span></a>';
      return;
    }

    body.innerHTML = cart
      .map(function (item) {
        return [
          '<div class="drawer__item row" data-id="' + item.id + '">',
          '  <div class="img-box"><img src="' + item.image + '" alt="' + item.name + '" /></div>',
          '  <div class="drawer__info">',
          '    <h4 class="paragraph">' + item.name + "</h4>",
          '    <p class="paragraph price">' + item.price + "</p>",
          '    <div class="qty row">',
          '      <button class="qty__btn" data-action="minus">-</button>',
          '      <span class="qty__value">' + item.quantity + "</span>",
          '      <button class="qty__btn" data-action="plus">+</button>',
          '      <button class="qty__remove" data-action="remove">remover</button>',
          "    </div>",
          "  </div>",
          "</div>",
        ].join("");
      })
      .join("");

    foot.innerHTML = [
      '<div class="drawer__total row">',
      '  <p class="paragraph">TOTAL</p>',
      '  <p class="paragraph">' + formatBRL(totalPrice()) + "</p>",
      "</div>",
      '<a class="btn center-item" id="drawer__checkout" data-name="WHATSAPP"><span>FINALIZAR PEDIDO</span></a>',
      '<a class="btn hover-btn drawer__clear" id="drawer__clear">limpar carrinho</a>',
    ].join("");
  }

  function openCart() {
    var d = document.getElementById("drawer");
    var o = document.getElementById("drawer__overlay");
    if (!d) return;
    d.classList.add("active");
    o.classList.add("active");
    pauseScroll(true);
  }

  function closeCart() {
    var d = document.getElementById("drawer");
    var o = document.getElementById("drawer__overlay");
    if (!d) return;
    d.classList.remove("active");
    o.classList.remove("active");
    pauseScroll(false);
  }

  /* ---------- modal de produto ---------- */

  function openModal(product) {
    var modal = document.getElementById("modal");
    var box = document.getElementById("modal__box");
    if (!modal || !product) return;

    box.innerHTML = [
      '<a class="btn hover-btn modal__close" id="modal__close">FECHAR</a>',
      '<div class="modal__grid flex">',
      '  <div class="modal__pic"><img src="' + product.image + '" alt="' + product.name + '" /></div>',
      '  <div class="modal__content">',
      '    <p class="paragraph p-one">' + product.category.toUpperCase() + "</p>",
      '    <h2 class="title-2 modal__title">' + product.name + "</h2>",
      '    <p class="paragraph modal__price">' + product.price + "</p>",
      '    <p class="paragraph">' + product.detailedDescription + "</p>",
      '    <div class="modal__cols row">',
      "      <div>",
      '        <p class="paragraph p-one">BENEFÍCIOS</p>',
      "        <ul>" +
        product.benefits
          .map(function (b) {
            return '<li class="paragraph">' + b + "</li>";
          })
          .join("") +
        "</ul>",
      "      </div>",
      "      <div>",
      '        <p class="paragraph p-one">ATIVOS</p>',
      "        <ul>" +
        product.ingredients
          .map(function (b) {
            return '<li class="paragraph">' + b + "</li>";
          })
          .join("") +
        "</ul>",
      "      </div>",
      "    </div>",
      '    <p class="paragraph p-one">MODO DE USO</p>',
      "    <ol>" +
        product.howToUse
          .map(function (b) {
            return '<li class="paragraph">' + b + "</li>";
          })
          .join("") +
        "</ol>",
      '    <a class="btn center-item modal__add" data-name="ADICIONAR" data-product="' +
        product.name +
        '"><span>ADICIONAR AO CARRINHO</span></a>',
      "  </div>",
      "</div>",
    ].join("");

    modal.classList.add("active");
    pauseScroll(true);
  }

  function closeModal() {
    var modal = document.getElementById("modal");
    if (!modal) return;
    modal.classList.remove("active");
    pauseScroll(false);
  }

  /* ---------- cards de produto ---------- */

  function cardMarkup(product) {
    return [
      '<article class="product-card" data-product="' + product.name + '">',
      '  <div class="img-box">',
      '    <img src="' +
        product.image +
        '" alt="' +
        product.name +
        '" loading="lazy" decoding="async" />',
      '    <span class="product-card__tag">' + product.category + "</span>",
      "  </div>",
      '  <h3 class="product-card__name">' + product.name + "</h3>",
      '  <p class="paragraph product-card__desc">' + product.description + "</p>",
      '  <div class="product-card__foot row">',
      '    <span class="product-card__price">' + product.price + "</span>",
      '    <button class="product-card__add" data-add="' + product.name + '">ADICIONAR</button>',
      "  </div>",
      "</article>",
    ].join("");
  }

  function renderFeatured() {
    var grid = document.getElementById("featured__grid");
    if (!grid) return;
    var picks = [
      "Shampoo Sólido Fortalecedor",
      "Sérum ThriHalo",
      "Sérum Blend Oil",
      "Hidratante Facial",
    ];
    grid.innerHTML = picks
      .map(function (name) {
        var p = byName(name);
        return p ? cardMarkup(p) : "";
      })
      .join("");
  }

  function renderCatalog(category) {
    var grid = document.getElementById("catalog__grid");
    if (!grid) return;
    var list =
      !category || category === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(function (p) {
            return p.category === category;
          });
    grid.innerHTML = list.map(cardMarkup).join("");

    var filters = document.querySelectorAll("[data-filter]");
    for (var i = 0; i < filters.length; i++) {
      filters[i].classList.toggle(
        "active",
        filters[i].getAttribute("data-filter") === (category || "Todos")
      );
    }
    if (window.curieScroll && window.curieScroll.update) {
      setTimeout(function () {
        window.curieScroll.update();
      }, 100);
    }
  }

  /* ---------- avaliações ---------- */

  var REVIEWS = [
    {
      name: "Ana Paula Silva",
      location: "São Paulo, SP",
      comment:
        "Produtos maravilhosos! Minha pele nunca esteve tão hidratada e saudável. Amo saber que são sustentáveis e feitos com ingredientes brasileiros.",
    },
    {
      name: "Mariana Costa",
      location: "Brasília, DF",
      comment:
        "O sérum revitalizante transformou minha rotina de skincare. A textura é incrível e os resultados aparecem em poucas semanas.",
    },
    {
      name: "Juliana Oliveira",
      location: "Cuiabá, MT",
      comment:
        "Fiquei impressionada com a qualidade dos produtos. É reconfortante usar cosméticos com propósito científico e social.",
    },
    {
      name: "Carla Mendes",
      location: "Campo Grande, MS",
      comment:
        "Adoro a filosofia da marca! Produtos eficientes, sustentáveis e que valorizam nossa biodiversidade. Recomendo muito!",
    },
  ];

  var reviewIndex = 0;

  function renderReview() {
    var slider = document.getElementById("review__slider");
    if (!slider) return;
    var r = REVIEWS[reviewIndex];
    slider.innerHTML = [
      '<h1 class="title-3 review__text">“' + r.comment + '”</h1>',
      '<p class="paragraph review__author">' + r.name + ", " + r.location + "</p>",
      '<p class="paragraph review__count">' +
        String(reviewIndex + 1).padStart(2, "0") +
        " / " +
        String(REVIEWS.length).padStart(2, "0") +
        "</p>",
    ].join("");
  }

  /* ---------- eventos ---------- */

  function bindEvents() {
    document.addEventListener("click", function (e) {
      var t = e.target;

      // abrir carrinho
      if (t.closest("#cart__btn")) {
        e.preventDefault();
        return openCart();
      }
      if (t.closest("#drawer__close") || t.closest("#drawer__overlay")) {
        return closeCart();
      }
      if (t.closest("#drawer__checkout")) {
        return checkout();
      }
      if (t.closest("#drawer__clear")) {
        return clearCart();
      }

      // quantidades no carrinho
      var action = t.getAttribute && t.getAttribute("data-action");
      if (action) {
        var row = t.closest(".drawer__item");
        if (!row) return;
        var id = row.getAttribute("data-id");
        var item = cart.filter(function (i) {
          return i.id === id;
        })[0];
        if (!item) return;
        if (action === "plus") return updateQuantity(id, item.quantity + 1);
        if (action === "minus") return updateQuantity(id, item.quantity - 1);
        if (action === "remove") return removeFromCart(id);
      }

      // adicionar direto do card
      var addName = t.getAttribute && t.getAttribute("data-add");
      if (addName) {
        e.preventDefault();
        e.stopPropagation();
        var prod = byName(addName);
        if (prod) addToCart(prod);
        return;
      }

      // adicionar pelo modal
      var modalAdd = t.closest(".modal__add");
      if (modalAdd) {
        var mp = byName(modalAdd.getAttribute("data-product"));
        if (mp) {
          addToCart(mp);
          closeModal();
        }
        return;
      }

      // abrir modal pelo card
      var card = t.closest(".product-card");
      if (card) {
        var cp = byName(card.getAttribute("data-product"));
        if (cp) openModal(cp);
        return;
      }

      if (t.closest("#modal__close") || t.closest("#modal__overlay")) {
        return closeModal();
      }

      // filtros do catálogo
      var filter = t.getAttribute && t.getAttribute("data-filter");
      if (filter) {
        e.preventDefault();
        renderCatalog(filter);
        history.replaceState(null, "", "?cat=" + encodeURIComponent(slug(filter)));
        return;
      }

      // avaliações
      if (t.closest("#review__next")) {
        reviewIndex = (reviewIndex + 1) % REVIEWS.length;
        return renderReview();
      }
      if (t.closest("#review__prev")) {
        reviewIndex = (reviewIndex - 1 + REVIEWS.length) % REVIEWS.length;
        return renderReview();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
        closeCart();
      }
    });
  }

  /* ---------- init ---------- */

  function init() {
    injectShell();
    loadCart();
    renderCart();
    renderFeatured();
    renderReview();

    var grid = document.getElementById("catalog__grid");
    if (grid) {
      var param = new URLSearchParams(window.location.search).get("cat");
      var initial = "Todos";
      if (param) {
        PRODUCTS.forEach(function (p) {
          if (slug(p.category) === slug(param)) initial = p.category;
        });
      }
      renderCatalog(initial);
    }

    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.curieLoja = {
    addToCart: addToCart,
    openCart: openCart,
    openModal: openModal,
    products: PRODUCTS,
  };
})();
