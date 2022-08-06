"use strict";
function l(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return n(e);
    })(e) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (e) {
        if ("string" == typeof e) return n(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" ===
          (o = "Object" === o && e.constructor ? e.constructor.name : o) ||
          "Set" === o
          ? Array.from(e)
          : "Arguments" === o ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? n(e, t)
          : void 0;
      }
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function n(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
  return n;
}
var t, o, r, a, e, s, c, i, u, d, m, y, p, g, f, v, h, S, b, _, k, w, L, q, E;
function x() {
  o.classList.remove("callback_open"),
    (t.style.overflow = "unset"),
    r.removeEventListener("click", x);
}
function M(e) {
  window.scroll({ left: 0, top: e.offsetTop, behavior: "smooth" });
}
"function" != typeof (m = window.Element.prototype).matches &&
  (m.matches =
    m.msMatchesSelector ||
    m.mozMatchesSelector ||
    m.webkitMatchesSelector ||
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
  "function" != typeof m.closest &&
    (m.closest = function (e) {
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
  (m = document.querySelector(".slide--parent")),
  new Flickity(m, {
    imagesLoaded: !0,
    wrapAround: !0,
    autoPlay: 3e3,
    pauseAutoPlayOnHover: !0,
    pageDots: !1,
  }),
  (t = document.querySelector("body")),
  (o = document.querySelector(".modal_js")),
  (m = document.querySelectorAll(".js-open-modal")),
  (r = document.querySelector(".js-modal-close")),
  (a = document.querySelector(".input-text-callback_js")),
  m.forEach(function (e) {
    e.addEventListener("click", function () {
      o.classList.add("callback_open"),
        (t.style.overflow = "hidden"),
        a.focus(),
        r.addEventListener("click", x),
        window.addEventListener("keydown", function (e) {
          "Escape" === e.code && x();
        }),
        o.addEventListener("click", function (e) {
          e.target === o && x();
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
  (s = document.querySelector("body")),
  (c = document.querySelector(".mobile-menu")),
  (m = document.querySelector(".button-open-menu_js")),
  (y = document.querySelector(".button-close-menu_js")),
  (i = document.querySelector(".mobile-menu-focus_js")),
  m.addEventListener("click", function () {
    c.classList.add("mobile-menu_open"),
      (s.style.overflow = "hidden"),
      i.focus();
  }),
  y.addEventListener("click", function () {
    c.classList.remove("mobile-menu_open"),
      (s.style.overflow = "unset"),
      i.focus();
  }),
  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (e) {
      var a;
      function t(e) {
        e.keyCode && (a = e.keyCode);
        this.selectionStart < 3 && e.preventDefault();
        var t = "+7 (___) ___ __ __",
          o = 0,
          n = t.replace(/\D/g, ""),
          r = this.value.replace(/\D/g, ""),
          l = t.replace(/[_\d]/g, function (e) {
            return o < r.length ? r.charAt(o++) || n.charAt(o) : e;
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
          (47 < a && a < 58)) &&
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
  (d = document.querySelector(".mobile-menu")),
  (m = document.querySelectorAll(".scroolToCatalog_js")),
  (y = document.querySelectorAll(".scroolToShowroom_js")),
  (p = document.querySelectorAll(".scroolToContacts_js")),
  (g = document.querySelector(".poster__button-catalog")),
  (f = document.querySelector("#catalog_js")),
  (v = document.querySelector("#showroom_js")),
  (h = document.querySelector("#contacts_js")),
  m.forEach(function (e) {
    e.addEventListener("click", function () {
      d.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        M(f);
    });
  }),
  y.forEach(function (e) {
    e.addEventListener("click", function () {
      d.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        M(v);
    });
  }),
  p.forEach(function (e) {
    e.addEventListener("click", function () {
      d.classList.remove("mobile-menu_open"),
        (u.style.overflow = "unset"),
        M(h);
    });
  }),
  g.addEventListener("click", function () {
    d.classList.remove("mobile-menu_open"), (u.style.overflow = "unset"), M(f);
  }),
  document
    .querySelector(".showroom__inner-play")
    .addEventListener("click", function () {
      fsLightboxInstances.video.open(0);
    }),
  (S = document.querySelector(".callback__form")),
  (b = S.querySelector('input[type="tel"]')),
  new Inputmask("+7 (999) 999-99-99").mask(b),
  new JustValidate(".callback__form")
    .addField(".input-text-callback_js", [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Должно быть более 2 символов!",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Должно быть менее 30 символов!",
      },
      { rule: "required", value: !0, errorMessage: "Введите имя!" },
    ])
    .addField(".input-tel-callback_js", [
      { rule: "required", value: !0, errorMessage: "Телефон обязателен" },
      {
        rule: "function",
        validator: function () {
          console.log("Вот он = ", b);
          var e = b.inputmask.unmaskedvalue();
          return console.log(S), 10 === e.length;
        },
        errorMessage: "Введите корректный телефон",
      },
    ])
    .onSuccess(function (e) {
      console.log("Validation passes and form submitted", e);
      var t,
        o = document.createElement("div"),
        n =
          ((o.style.width = "60px"),
          (o.style.height = "60px"),
          (o.style.margin = "0 auto"),
          (o.style.background = "url('images/load.gif')"),
          (o.style.backgroundSize = "cover"),
          (o.style.backgroundPosition = "center center"),
          (o.style.backgroundRepeat = "no-repeat"),
          S.append(o),
          new FormData(e.target)),
        r = ((t = console).log.apply(t, l(n)), new XMLHttpRequest());
      (r.onreadystatechange = function () {
        var e;
        4 === r.readyState &&
          200 === r.status &&
          (console.log("Отправлено"),
          o.remove(),
          ((e = document.createElement("div")).innerHTML =
            "Ваша заявка успешно отправлена!"),
          (e.style.margin = "0 auto"),
          (e.style.color = "#1da108"),
          (e.style.fontStyle = "normal"),
          (e.style.fontWeight = "500"),
          (e.style.fontSize = "24px"),
          (e.style.lineHeight = "23px"),
          (e.style.marginTop = "10px"),
          (e.style.textAlign = "center"),
          S.append(e),
          console.log("Отправлено"),
          setTimeout(function () {
            e.remove();
          }, 1e4));
      }),
        r.open("POST", "mail.php", !0),
        r.send(n),
        e.target.reset();
    }),
  (_ = document.querySelector(".design__form")),
  (k = _.querySelector('input[type="tel"]')),
  new Inputmask("+7 (999) 999-99-99").mask(k),
  new JustValidate(".design__form")
    .addField(".design__form-input", [
      { rule: "required", value: !0, errorMessage: "Телефон обязателен" },
      {
        rule: "function",
        validator: function () {
          console.log("Вот он = ", k);
          var e = k.inputmask.unmaskedvalue();
          return console.log(_), 10 === e.length;
        },
        errorMessage: "Введите корректный телефон",
      },
    ])
    .onSuccess(function (e) {
      console.log("Validation passes and form submitted", e);
      var t,
        o = document.createElement("div"),
        n =
          ((o.style.width = "60px"),
          (o.style.height = "60px"),
          (o.style.margin = "0 auto"),
          (o.style.background = "url('images/load.gif')"),
          (o.style.backgroundSize = "cover"),
          (o.style.backgroundPosition = "center center"),
          (o.style.backgroundRepeat = "no-repeat"),
          _.append(o),
          new FormData(e.target)),
        r = ((t = console).log.apply(t, l(n)), new XMLHttpRequest());
      (r.onreadystatechange = function () {
        var e;
        4 === r.readyState &&
          200 === r.status &&
          (console.log("Отправлено"),
          o.remove(),
          ((e = document.createElement("div")).innerHTML =
            "Ваша заявка успешно отправлена!"),
          (e.style.margin = "0 auto"),
          (e.style.color = "#1da108"),
          (e.style.fontStyle = "normal"),
          (e.style.fontWeight = "500"),
          (e.style.fontSize = "24px"),
          (e.style.lineHeight = "23px"),
          (e.style.marginTop = "10px"),
          (e.style.textAlign = "center"),
          _.append(e),
          console.log("Отправлено"),
          setTimeout(function () {
            e.remove();
          }, 1e4));
      }),
        r.open("POST", "mail.php", !0),
        r.send(n),
        e.target.reset();
    }),
  (w = document.querySelector(".showroom__feedback-form")),
  (L = w.querySelector('input[type="tel"]')),
  new Inputmask("+7 (999) 999-99-99").mask(L),
  new JustValidate(".showroom__feedback-form")
    .addField(".showroom__feedback-input", [
      { rule: "required", value: !0, errorMessage: "Телефон обязателен" },
      {
        rule: "function",
        validator: function () {
          console.log("Вот он = ", L);
          var e = L.inputmask.unmaskedvalue();
          return console.log(w), 10 === e.length;
        },
        errorMessage: "Введите корректный телефон",
      },
    ])
    .onSuccess(function (e) {
      console.log("Validation passes and form submitted", e);
      var t,
        o = document.createElement("div"),
        n =
          ((o.style.width = "60px"),
          (o.style.height = "60px"),
          (o.style.margin = "0 auto"),
          (o.style.background = "url('images/load.gif')"),
          (o.style.backgroundSize = "cover"),
          (o.style.backgroundPosition = "center center"),
          (o.style.backgroundRepeat = "no-repeat"),
          w.append(o),
          new FormData(e.target)),
        r = ((t = console).log.apply(t, l(n)), new XMLHttpRequest());
      (r.onreadystatechange = function () {
        var e;
        4 === r.readyState &&
          200 === r.status &&
          (console.log("Отправлено"),
          o.remove(),
          ((e = document.createElement("div")).innerHTML =
            "Ваша заявка успешно отправлена!"),
          (e.style.margin = "0 auto"),
          (e.style.color = "#1da108"),
          (e.style.fontStyle = "normal"),
          (e.style.fontWeight = "500"),
          (e.style.fontSize = "24px"),
          (e.style.lineHeight = "23px"),
          (e.style.marginTop = "10px"),
          (e.style.textAlign = "center"),
          w.append(e),
          console.log("Отправлено"),
          setTimeout(function () {
            e.remove();
          }, 1e4));
      }),
        r.open("POST", "mail.php", !0),
        r.send(n),
        e.target.reset();
    }),
  (q = document.querySelector(".contacts__form")),
  (E = q.querySelector('input[type="tel"]')),
  new Inputmask("+7 (999) 999-99-99").mask(E),
  new JustValidate(".form")
    .addField(".contacts__form-input--name", [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Должно быть более 2 символов!",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Должно быть менее 30 символов!",
      },
      { rule: "required", value: !0, errorMessage: "Введите имя!" },
    ])
    .addField(".contacts__form-input--phone", [
      { rule: "required", value: !0, errorMessage: "Телефон обязателен" },
      {
        rule: "function",
        validator: function () {
          return (
            console.log("Вот он телефон = ", E),
            10 === E.inputmask.unmaskedvalue().length
          );
        },
        errorMessage: "Введите корректный телефон",
      },
    ])
    .onSuccess(function (e) {
      console.log("Validation passes and form submitted", e);
      var t,
        o = document.createElement("div"),
        n =
          ((o.style.width = "60px"),
          (o.style.height = "60px"),
          (o.style.margin = "0 auto"),
          (o.style.background = "url('images/load.gif')"),
          (o.style.backgroundSize = "cover"),
          (o.style.backgroundPosition = "center center"),
          (o.style.backgroundRepeat = "no-repeat"),
          q.append(o),
          new FormData(e.target)),
        r = ((t = console).log.apply(t, l(n)), new XMLHttpRequest());
      (r.onreadystatechange = function () {
        var e;
        4 === r.readyState &&
          200 === r.status &&
          (console.log("Отправлено"),
          o.remove(),
          ((e = document.createElement("div")).innerHTML =
            "Ваша заявка успешно отправлена!"),
          (e.style.margin = "0 auto"),
          (e.style.color = "#1da108"),
          (e.style.fontStyle = "normal"),
          (e.style.fontWeight = "500"),
          (e.style.fontSize = "24px"),
          (e.style.lineHeight = "23px"),
          (e.style.marginTop = "10px"),
          (e.style.textAlign = "center"),
          q.append(e),
          setTimeout(function () {
            e.remove();
          }, 1e4));
      }),
        r.open("POST", "mail.php", !0),
        r.send(n),
        e.target.reset();
    });
