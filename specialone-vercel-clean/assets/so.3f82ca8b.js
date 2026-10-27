(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var guardar = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var leer = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var WA = "34614806029";

  /* Cabecera con borde al hacer scroll */
  var cabecera = $(".cabecera");
  var alScroll = function () { if (cabecera) cabecera.classList.toggle("con-scroll", window.scrollY > 8); };
  window.addEventListener("scroll", alScroll, { passive: true });
  alScroll();

  /* Menú móvil */
  var boton = $(".boton-menu"), menu = $("#menu-principal");
  if (boton && menu) {
    var cerrar = function () { boton.setAttribute("aria-expanded", "false"); menu.classList.remove("abierto"); };
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      menu.classList.toggle("abierto", !abierto);
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", cerrar); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });
  }

  /* Franja de inscripciones */
  var aviso = $(".aviso");
  if (aviso) {
    if (leer("soAvisoCerrado") === "1") aviso.hidden = true;
    var x = $("button", aviso);
    if (x) x.addEventListener("click", function () { aviso.hidden = true; guardar("soAvisoCerrado", "1"); });
  }

  /* Cookies y consentimiento de Google Analytics */
  var banner = $(".cookies");
  var aplicar = function (valor) {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: valor === "accepted" ? "granted" : "denied" });
    }
  };
  var previa = leer("soaCookies");
  if (previa) { aplicar(previa); }
  else if (banner) { banner.hidden = false; document.body.classList.add("cookies-visibles"); }
  $$("[data-cookie]").forEach(function (b) {
    b.addEventListener("click", function () {
      guardar("soaCookies", b.dataset.cookie);
      aplicar(b.dataset.cookie);
      if (banner) banner.hidden = true;
      document.body.classList.remove("cookies-visibles");
    });
  });

  /* "Solicitar información" preselecciona el programa en el formulario */
  $$("[data-programa]").forEach(function (a) {
    a.addEventListener("click", function () {
      var sel = $("#programa");
      if (sel) sel.value = a.dataset.programa;
    });
  });

  /* Formulario de contacto: abre WhatsApp con el mensaje preparado */
  var form = $("#formulario-contacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var msg = "Hola Special One Academy, soy " + d.get("nombre") + ". Programa: " + d.get("programa") + ". " + d.get("mensaje");
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
  }

  /* Vídeo de Manager: carga perezosa al acercarse a la pantalla */
  var video = $("#video-manager");
  if (video) {
    var reducir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var modal = $("#modal-video"), boton = $("#ver-pantalla-completa");
    var mv = modal ? $("video", modal) : null;

    var inyectarFuentes = function (v) {
      if (v.dataset.webm) {
        var webm = document.createElement("source");
        webm.src = v.dataset.webm; webm.type = "video/webm";
        v.appendChild(webm);
      }
      if (v.dataset.mp4) {
        var mp4 = document.createElement("source");
        mp4.src = v.dataset.mp4; mp4.type = "video/mp4";
        v.appendChild(mp4);
      }
    };

    var cargado = false;
    var cargarVideo = function () {
      if (cargado) return;
      cargado = true;
      inyectarFuentes(video);
      video.load();
      if (!reducir) { video.muted = true; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    };

    if ("IntersectionObserver" in window) {
      var ioVideo = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) { cargarVideo(); ioVideo.disconnect(); }
        });
      }, { rootMargin: "200px" });
      ioVideo.observe(video);
    } else {
      cargarVideo();
    }

    var mvCargado = false;
    if (modal && boton && modal.showModal) {
      var cerrarModal = function () { mv.pause(); modal.close(); };
      boton.addEventListener("click", function () {
        cargarVideo();
        video.pause();
        if (!mvCargado) { mvCargado = true; inyectarFuentes(mv); mv.load(); }
        modal.showModal();
        mv.currentTime = 0; mv.muted = false;
        var q = mv.play(); if (q && q.catch) q.catch(function () {});
      });
      $(".cerrar-modal", modal).addEventListener("click", cerrarModal);
      modal.addEventListener("click", function (e) { if (e.target === modal) cerrarModal(); });
      modal.addEventListener("close", function () { mv.pause(); if (!reducir) { var r = video.play(); if (r && r.catch) r.catch(function () {}); } });
    }
  }

  /* Animaciones de entrada al hacer scroll */
  var reducirMov = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducirMov && "IntersectionObserver" in window) {
    var selector = ".cabeza, .programa-fila > div:last-child, .mini-funciones li, .tarjeta-precio, .escaparate h2, .escaparate .sub, .metodo figure, .metodo h2, .metodo p, .galeria picture, .equipacion .caja, .contacto h2, .datos li, .formulario, .paso-sistema, .funciones-4 > div, .preguntas details, .ficha .cuerpo > *, .ficha aside, .tabla-precios, .cierre h2";
    var items = $$(selector);
    doc.classList.add("anim");
    items.forEach(function (el) {
      el.setAttribute("data-reveal", "");
      var hermanos = el.parentElement ? $$(":scope > [data-reveal]", el.parentElement) : [];
      el.style.setProperty("--d", (Math.min(hermanos.indexOf(el), 6) * 80) + "ms");
    });
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0 });
    items.forEach(function (el) { io.observe(el); });
    $$("[data-deco]").forEach(function (sec) {
      var iod = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { sec.classList.add("deco-visible"); iod.disconnect(); }
      }, { threshold: 0.15 });
      iod.observe(sec);
    });
    $$(".programa-fila").forEach(function (fila) {
      fila.classList.add("foto-oculta");
      var iof = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { fila.classList.add("foto-visible"); iof.disconnect(); }
      }, { threshold: 0.05 });
      iof.observe(fila);
    });
  }

  /* Lanzamiento de Manager (assets/so-config.js) */
  var cfg = window.SO_CONFIG || {};
  var lista = cfg.launched && cfg.appUrl && cfg.appUrl.indexOf("http") === 0;
  $$("[data-estado]").forEach(function (el) {
    el.textContent = cfg.launched ? el.dataset.lanzado : el.dataset.estado;
  });
  $$("[data-app-link]").forEach(function (el) {
    if (lista) { el.href = cfg.appUrl; el.hidden = false; } else { el.hidden = true; }
  });
  $$("[data-solo-antes]").forEach(function (el) { el.hidden = !!lista; });

  var anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
