/* ---------------------------------------------------------
   Curie: scroll suave, parallax e menu
   (base: mockup awwwards, adaptado para GSAP 3 sem bundler)
   --------------------------------------------------------- */

gsap.registerPlugin(ScrollTrigger);

// scroll init
const scroll__container = document.getElementById("scroll__container");

const scroller = new LocomotiveScroll({
  el: scroll__container, // elemento do scroll
  smooth: true, // scroll suave
  getDirection: true, // direção do scroll (up & down)
  lerp: 0.08, // suavidade
  // no celular e no tablet usamos o scroll nativo:
  // o smooth do locomotive briga com o toque e com a barra do navegador
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: false,
    breakpoint: 1024,
  },
  offset: [0, 0],
  useKeyboard: true,
  getSpeed: true,
  class: "is-inview",
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  scrollFromAnywhere: false,
});

// exposto para o carrinho/modal pausarem o scroll
window.curieScroll = scroller;

window.addEventListener("load", function () {
  scroller.update();
});

scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger usa o proxy do Locomotive
ScrollTrigger.scrollerProxy(scroll__container, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".scroll__container").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

// imagens do catálogo mudam a altura da página
window.addEventListener("resize", () => scroller.update());

// hamb-animation

function hambAnimation() {
  const hamb__btn = document.getElementById("hamb__btn");
  const close__btn = document.getElementById("close-btn");
  const nav = document.getElementById("nav");

  if (!hamb__btn || !close__btn) return;

  hamb__btn.addEventListener("click", startIn);
  close__btn.addEventListener("click", endIn);

  function startIn() {
    nav.classList.add("active");

    gsap.to(".hamb__menu", {
      duration: 1,
      y: "0%",
      ease: "expo.in",
    });

    gsap.to(".hamb-btn", {
      duration: 0.5,
      delay: 0.2,
      x: "0%",
      opacity: 1,
      ease: "expo.in",
      stagger: 0.1,
    });

    gsap.to(".hamb-btn-two", {
      duration: 0.5,
      delay: 0.4,
      y: "0%",
      opacity: 1,
      ease: "expo.in",
      stagger: 0.1,
    });
  }

  function endIn() {
    nav.classList.remove("active");

    gsap.to(".hamb__menu", {
      duration: 1,
      y: "-100%",
      delay: 0.6,
      ease: "expo.out",
    });

    gsap.to(".hamb-btn", {
      duration: 0.5,
      x: "-50vw",
      opacity: 0,
      ease: "expo.out",
      stagger: 0.1,
    });

    gsap.to(".hamb-btn-two", {
      duration: 0.5,
      y: "4rem",
      opacity: 0,
      ease: "expo.out",
      stagger: 0.1,
    });
  }
}

hambAnimation();

// nav clara enquanto estiver sobre a foto do topo

const navEl = document.getElementById("nav");
const heroEl = document.querySelector(".banner, .page-hero");

function syncNav(y) {
  if (!navEl || !heroEl) return;
  const limit = heroEl.offsetHeight - 90;
  navEl.classList.toggle("light", y < limit);
}

if (heroEl) {
  syncNav(0);
  // scroll suave (desktop)
  scroller.on("scroll", function (obj) {
    syncNav(obj.scroll.y);
  });
  // scroll nativo (celular e tablet)
  window.addEventListener(
    "scroll",
    function () {
      syncNav(window.scrollY || document.documentElement.scrollTop || 0);
    },
    { passive: true }
  );
}

// logo volta para o topo

const logo__btn = document.getElementById("logo__btn");
const topAnchor = document.querySelector("[data-scroll-section]");

if (logo__btn && topAnchor && logo__btn.getAttribute("href") === "#banner") {
  logo__btn.addEventListener("click", function (e) {
    e.preventDefault();
    scroller.scrollTo(topAnchor);
  });
}

// links internos (#id) usam o scroll do Locomotive

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  const id = link.getAttribute("href");
  if (id === "#" || id === "#banner") return;
  const target = document.querySelector(id);
  if (!target) return;
  link.addEventListener("click", function (e) {
    e.preventDefault();
    scroller.scrollTo(target);
  });
});
