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

  /* Vídeo de Manager */
  var video = $("#video-manager");
  if (video) {
    var reducir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducir) { video.muted = true; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    var full = $("#ver-pantalla-completa");
    if (full) full.addEventListener("click", function () {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      video.muted = false; video.play();
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
