"use strict";
var t, o, n, c, e, l, r, s, u, i, a, d, m, v, f, y, h;
function p() {
  o.classList.remove("callback_open"),
    (t.style.overflow = "unset"),
    n.removeEventListener("click", p);
}
function _(e) {
  window.scroll({ left: 0, top: e.offsetTop, behavior: "smooth" });
}
"function" != typeof (a = window.Element.prototype).matches &&
  (a.matches =
    a.msMatchesSelector ||
    a.mozMatchesSelector ||
    a.webkitMatchesSelector ||
    function (e) {
      for (
        var t = this,
          o = (t.document || t.ownerDocument).querySelectorAll(e),
          n = 0;
        o[n] && o[n] !== t;

      )
        ++n;
      return Boolean(o[n]);
    }),
  "function" != typeof a.closest &&
    (a.closest = function (e) {
      for (var t = this; t && 1 === t.nodeType; ) {
        if (t.matches(e)) return t;
        t = t.parentNode;
      }
      return null;
    }),
  document.querySelectorAll(".js-tab-trigger").forEach(function (n) {
    n.addEventListener("click", function () {
      var e = this.getAttribute("data-tab"),
        e = document.querySelector('.js-tab-content[data-tab="' + e + '"]'),
        t = document.querySelector(".js-tab-trigger.active"),
        o = document.querySelector(".js-tab-content.active");
      t.classList.remove("active"),
        n.classList.add("active"),
        o.classList.remove("active"),
        e.classList.add("active");
    });
  }),
  (a = document.querySelector(".slide--parent")),
  new Flickity(a, {
    imagesLoaded: !0,
    wrapAround: !0,
    autoPlay: 3e3,
    pauseAutoPlayOnHover: !0,
    pageDots: !1,
  }),
  (t = document.querySelector("body")),
  (o = document.querySelector(".modal_js")),
  (a = document.querySelectorAll(".js-open-modal")),
  (n = document.querySelector(".js-modal-close")),
  (c = document.querySelector(".input-text-callback_js")),
  a.forEach(function (e) {
    e.addEventListener("click", function () {
      o.classList.add("callback_open"),
        (t.style.overflow = "hidden"),
        c.focus(),
        n.addEventListener("click", p),
        window.addEventListener("keydown", function (e) {
          "Escape" === e.code && p();
        }),
        o.addEventListener("click", function (e) {
          e.target === o && p();
        });
    });
  }),
  (e = document.querySelector(".btn-top__js")) &&
    (e.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }),
    window.addEventListener("scroll", function () {
      1e3 < window.pageYOffset
        ? e.classList.remove("visually-hidden")
        : e.classList.add("visually-hidden");
    })),
  (l = document.querySelector("body")),
  (r = document.querySelector(".mobile-menu")),
  (a = document.querySelector(".button-open-menu_js")),
  (d = document.querySelector(".button-close-menu_js")),
  (s = document.querySelector(".mobile-menu-focus_js")),
  a.addEventListener("click", function () {
    r.classList.add("mobile-menu_open"),
      (l.style.overflow = "hidden"),
      s.focus();
  }),
  d.addEventListener("click", function () {
    r.classList.remove("mobile-menu_open"),
      (l.style.overflow = "unset"),
      s.focus();
  }),
  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (e) {
      var r;
      function t(e) {
        e.keyCode && (r = e.keyCode);
        this.selectionStart < 3 && e.preventDefault();
        var t = "+7 (___) ___ __ __",
          o = 0,
          n = t.replace(/\D/g, ""),
          c = this.value.replace(/\D/g, ""),
          l = t.replace(/[_\d]/g, function (e) {
            return o < c.length ? c.charAt(o++) || n.charAt(o) : e;
          }),
          t =
            (-1 != (o = l.indexOf("_")) &&
              (o < 5 && (o = 3), (l = l.slice(0, o))),
            t
              .substr(0, this.value.length)
              .replace(/_+/g, function (e) {
                return "\\d{1," + e.length + "}";
              })
              .replace(/[+()]/g, "\\$&"));
        (!(t = new RegExp("^" + t + "$")).test(this.value) ||
          this.value.length < 5 ||
          (47 < r && r < 58)) &&
          (this.value = l),
          "blur" == e.type && this.value.length < 5 && (this.value = "");
      }
      e.addEventListener("input", t, !1),
        e.addEventListener("focus", t, !1),
        e.addEventListener("blur", t, !1),
        e.addEventListener("keydown", t, !1);
    });
  }),
  (u = document.querySelector("body")),
  (i = document.querySelector(".mobile-menu")),
  (a = document.querySelectorAll(".scroolToCatalog_js")),
  (d = document.querySelectorAll(".scroolToShowroom_js")),
  (m = document.querySelectorAll(".scroolToContacts_js")),
  (v = document.querySelector(".poster__button-catalog")),
  (f = document.querySelector("#catalog_js")),
  (y = document.querySelector("#showroom_js")),
  (h = document.querySelector("#contacts_js")),
  console.log(v),
  a.forEach(function (e) {
    e.addEventListener("click", function () {
      i.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        _(f);
    });
  }),
  d.forEach(function (e) {
    e.addEventListener("click", function () {
      i.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        _(y);
    });
  }),
  m.forEach(function (e) {
    e.addEventListener("click", function () {
      i.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        _(h);
    });
  }),
  v.addEventListener("click", function () {
    i.classList.remove("mobile-menu_open"), (u.style.overflow = "unset"), _(f);
  }),
  document
    .querySelector(".showroom__inner-play")
    .addEventListener("click", function () {
      fsLightboxInstances.video.open(0);
    });

fsLightboxInstances["gallery"].props.onOpen = () => {
  const body = (document.querySelector("body").style.paddingRight = "7px");
  console.log(body.style.marginRight);
};
