"use strict";
function k(e) {
  return (k =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function e() {
  return (
    (n = [
      function (F, e, t) {
        t.r(e);
        var $ = "fslightbox-",
          t = "".concat($, "styles"),
          c = "".concat($, "cursor-grabbing"),
          K = "".concat($, "full-dimension"),
          Q = "".concat($, "flex-centered"),
          h = "".concat($, "open"),
          Z = "".concat($, "transform-transition"),
          ee = "".concat($, "absoluted"),
          s = "".concat($, "slide-btn"),
          a = "".concat(s, "-container"),
          p = "".concat($, "fade-in"),
          f = "".concat($, "fade-out"),
          te = p + "-strong",
          d = f + "-strong",
          e = "".concat($, "opacity-"),
          u = "".concat(e, "1"),
          l = "".concat($, "source");
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == k(Symbol.iterator)
              ? function (e) {
                  return k(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : k(e);
                })(e);
        }
        function ne(e) {
          var r,
            e = e.props,
            s = 0,
            c = {},
            t =
              ((this.getSourceTypeFromLocalStorageByUrl = function (e) {
                return r[e] || t(e);
              }),
              (this.handleReceivedSourceTypeForUrl = function (e, t) {
                if (
                  !1 === c[t] &&
                  (s--, "invalid" !== e ? (c[t] = e) : delete c[t], 0 === s)
                ) {
                  var n,
                    o = r,
                    i = c;
                  for (n in i) o[n] = i[n];
                  localStorage.setItem("fslightbox-types", JSON.stringify(r));
                }
              }),
              function (e) {
                s++, (c[e] = !1);
              });
          e.disableLocalStorage
            ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
              (this.handleReceivedSourceTypeForUrl = function () {}))
            : (r = JSON.parse(localStorage.getItem("fslightbox-types"))) ||
              ((r = {}), (this.getSourceTypeFromLocalStorageByUrl = t));
        }
        function m(e, t, n, o) {
          var i = e.data,
            r = e.elements.sources,
            s = n / o,
            c = 0,
            a =
              ((this.adjustSize = function () {
                if ((c = i.maxSourceWidth / s) < i.maxSourceHeight)
                  return n < i.maxSourceWidth && (c = o), a();
                (c = o > i.maxSourceHeight ? i.maxSourceHeight : o), a();
              }),
              function () {
                (r[t].style.width = c * s + "px"),
                  (r[t].style.height = c + "px");
              });
        }
        function g(e, n) {
          var o = this,
            i = e.collections.sourceSizers,
            t = e.elements,
            r = t.sourceAnimationWrappers,
            s = t.sourceMainWrappers,
            c = t.sources,
            a = e.resolve;
          function l(e, t) {
            (i[n] = a(m, [n, e, t])), i[n].adjustSize();
          }
          this.runActions = function (e, t) {
            c[n].classList.add(u),
              r[n].classList.add(te),
              s[n].removeChild(s[n].firstChild),
              l(e, t),
              (o.runActions = l);
          };
        }
        function b(e, t) {
          var n,
            o = this,
            i = e.elements.sources,
            r = e.props,
            s = (0, e.resolve)(g, [t]);
          (this.handleImageLoad = function (e) {
            var e = e.target,
              t = e.naturalWidth,
              e = e.naturalHeight;
            s.runActions(t, e);
          }),
            (this.handleVideoLoad = function (e) {
              var e = e.target,
                t = e.videoWidth,
                e = e.videoHeight;
              (n = !0), s.runActions(t, e);
            }),
            (this.handleNotMetaDatedVideoLoad = function () {
              n || o.handleYoutubeLoad();
            }),
            (this.handleYoutubeLoad = function () {
              var e = 1920,
                t = 1080;
              r.maxYoutubeDimensions &&
                ((e = r.maxYoutubeDimensions.width),
                (t = r.maxYoutubeDimensions.height)),
                s.runActions(e, t);
            }),
            (this.handleCustomLoad = function () {
              setTimeout(function () {
                var e = i[t];
                s.runActions(e.offsetWidth, e.offsetHeight);
              });
            });
        }
        function v(e, t, n) {
          var o = e.elements.sources,
            e = e.props.customClasses,
            e = e[t] || "";
          o[t].className = n + " " + e;
        }
        function x(e, t) {
          var n,
            o = e.elements.sources,
            i = e.props.customAttributes;
          for (n in i[t]) o[t].setAttribute(n, i[t][n]);
        }
        function y(e, t) {
          var n = e.collections.sourceLoadHandlers,
            o = e.elements,
            i = o.sources,
            o = o.sourceAnimationWrappers,
            r = e.props.sources;
          (i[t] = document.createElement("img")),
            v(e, t, l),
            (i[t].src = r[t]),
            (i[t].onload = n[t].handleImageLoad),
            x(e, t),
            o[t].appendChild(i[t]);
        }
        function A(e, t) {
          var n = e.collections.sourceLoadHandlers,
            o = e.elements,
            i = o.sources,
            o = o.sourceAnimationWrappers,
            r = e.props,
            s = r.sources,
            r = r.videosPosters,
            e =
              ((i[t] = document.createElement("video")),
              v(e, t, l),
              (i[t].src = s[t]),
              (i[t].onloadedmetadata = function (e) {
                n[t].handleVideoLoad(e);
              }),
              (i[t].controls = !0),
              x(e, t),
              r[t] && (i[t].poster = r[t]),
              document.createElement("source"));
          (e.src = s[t]),
            i[t].appendChild(e),
            setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3),
            o[t].appendChild(i[t]);
        }
        function E(e, t) {
          var n = e.collections.sourceLoadHandlers,
            o = e.elements,
            i = o.sources,
            o = o.sourceAnimationWrappers,
            r = e.props.sources;
          (i[t] = document.createElement("iframe")),
            v(e, t, "".concat(l, " ").concat($, "youtube-iframe")),
            (i[t].src = "https://www.youtube.com/embed/".concat(
              r[t].match(
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
              )[2]
            )),
            (i[t].allowFullscreen = !0),
            x(e, t),
            o[t].appendChild(i[t]),
            n[t].handleYoutubeLoad();
        }
        function I(e, t) {
          var n = e.collections.sourceLoadHandlers,
            o = e.elements,
            i = o.sources,
            o = o.sourceAnimationWrappers,
            r = e.props.sources;
          (i[t] = r[t]),
            v(e, t, "".concat(i[t].className, " ").concat(l)),
            o[t].appendChild(i[t]),
            n[t].handleCustomLoad();
        }
        function T(e, t) {
          var n = e.elements,
            o = n.sources,
            i = n.sourceAnimationWrappers,
            n = n.sourceMainWrappers;
          e.props.sources,
            (o[t] = document.createElement("div")),
            (o[t].className = "".concat($, "invalid-file-wrapper ").concat(Q)),
            (o[t].innerHTML = "Invalid source"),
            i[t].classList.add(te),
            i[t].appendChild(o[t]),
            n[t].removeChild(n[t].firstChild);
        }
        function ce(o) {
          var e = o.collections,
            i = e.sourceLoadHandlers,
            r = e.sourcesRenderFunctions,
            s = o.core.sourceDisplayFacade,
            c = o.resolve;
          this.runActionsForSourceTypeAndIndex = function (e, t) {
            var n;
            switch (("invalid" !== e && (i[t] = c(b, [t])), e)) {
              case "image":
                n = y;
                break;
              case "video":
                n = A;
                break;
              case "youtube":
                n = E;
                break;
              case "custom":
                n = I;
                break;
              default:
                n = T;
            }
            (r[t] = function () {
              return n(o, t);
            }),
              s.displaySourcesWhichShouldBeDisplayed();
          };
        }
        function W() {
          var t,
            n,
            o,
            i = function (e) {
              var t = document.createElement("a");
              return (t.href = e), "www.youtube.com" === t.hostname;
            },
            r = function (e) {
              return e.slice(0, e.indexOf("/"));
            };
          function s() {
            if (4 !== o.readyState) {
              if (2 === o.readyState) {
                var e;
                switch (r(o.getResponseHeader("content-type"))) {
                  case "image":
                    e = "image";
                    break;
                  case "video":
                    e = "video";
                    break;
                  default:
                    e = "invalid";
                }
                (o.onreadystatechange = null), o.abort(), n(e);
              }
            } else n("invalid");
          }
          (this.setUrlToCheck = function (e) {
            t = e;
          }),
            (this.getSourceType = function (e) {
              if (i(t)) return e("youtube");
              (n = e),
                ((o = new XMLHttpRequest()).onreadystatechange = s),
                o.open("GET", t, !0),
                o.send();
            });
        }
        function ae(e, n, o) {
          var t = e.props,
            i = t.types,
            r = t.type,
            s = t.sources,
            c = e.resolve;
          (this.getTypeSetByClientForIndex = function (e) {
            var t;
            return i && i[e] ? (t = i[e]) : r && (t = r), t;
          }),
            (this.retrieveTypeWithXhrForIndex = function (t) {
              var e = c(W);
              e.setUrlToCheck(s[t]),
                e.getSourceType(function (e) {
                  n.handleReceivedSourceTypeForUrl(e, s[t]),
                    o.runActionsForSourceTypeAndIndex(e, t);
                });
            });
        }
        function S(e, t, n, o) {
          var i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            t =
              (i.setAttributeNS(null, "width", t),
              i.setAttributeNS(null, "height", t),
              i.setAttributeNS(null, "viewBox", n),
              document.createElementNS("http://www.w3.org/2000/svg", "path"));
          return (
            t.setAttributeNS(null, "class", "".concat($, "svg-path")),
            t.setAttributeNS(null, "d", o),
            i.appendChild(t),
            e.appendChild(i),
            i
          );
        }
        function w(e, t) {
          var n = document.createElement("div");
          return (
            (n.className = "".concat($, "toolbar-button ").concat(Q)),
            (n.title = t),
            e.appendChild(n),
            n
          );
        }
        function le(e) {
          var t,
            n,
            o,
            i,
            r,
            s,
            c,
            a,
            l,
            u,
            d = e.props.sources,
            p = e.elements.container,
            f = document.createElement("div");
          (f.className = "".concat($, "nav")),
            p.appendChild(f),
            (p = e),
            (i = f),
            ((u = document.createElement("div")).className = "".concat(
              $,
              "toolbar"
            )),
            i.appendChild(u),
            (i = p.componentsServices),
            (r = p.core.fullscreenToggler),
            (s = p.data),
            (c =
              "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"),
            ((a = w(u)).title = "Enter fullscreen"),
            (l = S(a, "20px", "0 0 18 18", c)),
            (i.enterFullscreen = function () {
              (s.isFullscreenOpen = !0),
                (a.title = "Exit fullscreen"),
                l.setAttributeNS(null, "width", "24px"),
                l.setAttributeNS(null, "height", "24px"),
                l.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                l.firstChild.setAttributeNS(
                  null,
                  "d",
                  "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"
                );
            }),
            (i.exitFullscreen = function () {
              (s.isFullscreenOpen = !1),
                (a.title = "Enter fullscreen"),
                l.setAttributeNS(null, "width", "20px"),
                l.setAttributeNS(null, "height", "20px"),
                l.setAttributeNS(null, "viewBox", "0 0 18 18"),
                l.firstChild.setAttributeNS(null, "d", c);
            }),
            (a.onclick = function () {
              s.isFullscreenOpen ? r.exitFullscreen() : r.enterFullscreen();
            }),
            (i = p),
            ((p = w(u, "Close")).onclick = i.core.lightboxCloser.closeLightbox),
            S(
              p,
              "20px",
              "0 0 24 24",
              "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
            ),
            1 < d.length &&
              ((u = f),
              (i = e.componentsServices),
              (p = e.props.sources),
              e.stageIndexes,
              ((t = document.createElement("div")).className = "".concat(
                $,
                "slide-number-container"
              )),
              ((n = document.createElement("div")).className = Q),
              (o = document.createElement("span")),
              (i.setSlideNumber = function (e) {
                return (o.innerHTML = e);
              }),
              ((i = document.createElement("span")).className = "".concat(
                $,
                "slash"
              )),
              ((d = document.createElement("div")).innerHTML = p.length),
              t.appendChild(n),
              n.appendChild(o),
              n.appendChild(i),
              n.appendChild(d),
              u.appendChild(t),
              setTimeout(function () {
                55 < n.offsetWidth && (t.style.justifyContent = "flex-start");
              }));
        }
        function ue(e, t) {
          var n = this,
            o = e.elements.sourceMainWrappers,
            i = e.props,
            r = 0,
            s =
              ((this.byValue = function (e) {
                return (r = e), n;
              }),
              (this.negative = function () {
                s(-c());
              }),
              (this.zero = function () {
                s(0);
              }),
              (this.positive = function () {
                s(c());
              }),
              function (e) {
                (o[t].style.transform = "translateX(".concat(e + r, "px)")),
                  (r = 0);
              }),
            c = function () {
              return (1 + i.slideDistance) * innerWidth;
            };
        }
        function oe(e, t, n, o) {
          var e = e.elements.container,
            i = n.charAt(0).toUpperCase() + n.slice(1),
            r = document.createElement("div");
          (r.className = "".concat(a, " ").concat(a, "-").concat(n)),
            (r.title = "".concat(i, " slide")),
            (r.onclick = t),
            (n = r),
            (i = o),
            ((t = document.createElement("div")).className = ""
              .concat(s, " ")
              .concat(Q)),
            S(t, "20px", "0 0 20 20", i),
            n.appendChild(t),
            e.appendChild(r);
        }
        function ie(e, t) {
          e = e.classList;
          e.contains(t) && e.remove(t);
        }
        function de(e) {
          var t = this,
            n = e.core,
            o = n.eventsDispatcher,
            i = n.fullscreenToggler,
            r = n.globalEventsController,
            s = n.scrollbarRecompensor,
            c = e.data,
            a = e.elements,
            l = e.props,
            u = e.slideSwipingProps;
          (this.isLightboxFadingOut = !1),
            (this.runActions = function () {
              (t.isLightboxFadingOut = !0),
                a.container.classList.add(d),
                r.removeListeners(),
                l.exitFullscreenOnClose &&
                  c.isFullscreenOpen &&
                  i.exitFullscreen(),
                setTimeout(function () {
                  (t.isLightboxFadingOut = !1),
                    (u.isSwiping = !1),
                    a.container.classList.remove(d),
                    document.documentElement.classList.remove(h),
                    s.removeRecompense(),
                    document.body.removeChild(a.container),
                    o.dispatch("onClose");
                }, 220);
            });
        }
        function pe(e) {
          var n,
            o,
            i = e.collections.sourceMainWrappersTransformers,
            t = e.componentsServices,
            r = e.core,
            s = r.classFacade,
            c = r.slideIndexChanger,
            a = r.sourceDisplayFacade,
            l = r.stageManager,
            u = e.elements.sourceAnimationWrappers,
            d = e.stageIndexes;
          (n = function () {
            s.removeFromEachElementClassIfContains(
              "sourceAnimationWrappers",
              f
            );
          }),
            (o = []);
          (c.changeTo = function (e) {
            (d.current = e),
              l.updateStageIndexes(),
              t.setSlideNumber(e + 1),
              a.displaySourcesWhichShouldBeDisplayed();
          }),
            (c.jumpTo = function (e) {
              var t = d.current;
              c.changeTo(e),
                s.removeFromEachElementClassIfContains("sourceMainWrappers", Z),
                ie(u[t], te),
                ie(u[t], p),
                u[t].classList.add(f),
                ie(u[e], te),
                ie(u[e], f),
                u[e].classList.add(p),
                o.push(!0),
                setTimeout(function () {
                  o.pop(), o.length || n();
                }, 250),
                i[e].zero(),
                setTimeout(function () {
                  t !== d.current && i[t].negative();
                }, 220);
            });
        }
        function re(e) {
          return (e.touches ? e.touches[0] : e).clientX;
        }
        function fe(e) {
          var e = e.core,
            t = e.lightboxCloser,
            n = e.fullscreenToggler,
            o = e.slideChangeFacade;
          this.listener = function (e) {
            switch (e.key) {
              case "Escape":
                t.closeLightbox();
                break;
              case "ArrowLeft":
                o.changeToPrevious();
                break;
              case "ArrowRight":
                o.changeToNext();
                break;
              case "F11":
                e.preventDefault(), n.enterFullscreen();
            }
          };
        }
        function N(e) {
          var n = e.collections.sourceMainWrappersTransformers,
            o = e.elements,
            i = e.slideSwipingProps,
            r = e.stageIndexes,
            s =
              ((this.runActionsForEvent = function (e) {
                var t, n;
                o.container.contains(o.slideSwipingHoverer) ||
                  o.container.appendChild(o.slideSwipingHoverer),
                  (n = o.container.classList).contains((t = c)) || n.add(t),
                  (i.swipedX = re(e) - i.downClientX),
                  s(r.current, "zero"),
                  void 0 !== r.previous && 0 < i.swipedX
                    ? s(r.previous, "negative")
                    : void 0 !== r.next &&
                      i.swipedX < 0 &&
                      s(r.next, "positive");
              }),
              function (e, t) {
                n[e].byValue(i.swipedX)[t]();
              });
        }
        function he(e) {
          var t,
            n = e.props.sources,
            o = e.resolve,
            i = e.slideSwipingProps,
            r = o(N);
          t = !1;
          1 === n.length
            ? (this.listener = function () {
                i.swipedX = 1;
              })
            : (this.listener = function (e) {
                !i.isSwiping ||
                  t ||
                  ((t = !0),
                  requestAnimationFrame(function () {
                    t = !1;
                  }),
                  0) ||
                  r.runActionsForEvent(e);
              });
        }
        function z(e) {
          var t = e.collections.sourceMainWrappersTransformers,
            n = e.core.slideIndexChanger,
            o = e.elements.sourceMainWrappers,
            i = e.stageIndexes,
            r =
              ((this.runPositiveSwipedXActions = function () {
                void 0 !== i.previous &&
                  (r("positive"), n.changeTo(i.previous)),
                  r("zero");
              }),
              (this.runNegativeSwipedXActions = function () {
                void 0 !== i.next && (r("negative"), n.changeTo(i.next)),
                  r("zero");
              }),
              function (e) {
                o[i.current].classList.add(Z), t[i.current][e]();
              });
        }
        function L(e, t) {
          e.contains(t) && e.removeChild(t);
        }
        function M(e) {
          var t = e.core.lightboxCloser,
            n = e.elements,
            o = e.resolve,
            i = e.slideSwipingProps,
            r = o(z);
          (this.runNoSwipeActions = function () {
            L(n.container, n.slideSwipingHoverer),
              i.isSourceDownEventTarget || t.closeLightbox(),
              (i.isSwiping = !1);
          }),
            (this.runActions = function () {
              0 < i.swipedX
                ? r.runPositiveSwipedXActions()
                : r.runNegativeSwipedXActions(),
                L(n.container, n.slideSwipingHoverer),
                n.container.classList.remove(c),
                (i.isSwiping = !1);
            });
        }
        function me(e) {
          var t = e.resolve,
            n = e.slideSwipingProps,
            o = t(M);
          this.listener = function () {
            n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
          };
        }
        function H(e) {
          var o,
            t,
            n,
            i,
            r,
            s,
            c,
            a,
            l,
            u,
            d,
            D,
            p,
            O,
            R,
            f,
            j,
            h,
            m,
            P,
            g,
            b,
            v,
            x,
            y,
            S,
            w,
            L,
            C,
            F,
            X = e.core.eventsDispatcher,
            A = e.data,
            E = e.elements,
            B = e.props.sources;
          A.isInitialized = !0;
          for (
            var V = e.collections.sourceMainWrappersTransformers,
              U = e.props.sources,
              q = e.resolve,
              I = 0;
            I < U.length;
            I++
          )
            V[I] = q(ue, [I]);
          (C = (A = e).core.classFacade),
            (o = A.elements),
            (C.removeFromEachElementClassIfContains = function (e, t) {
              for (var n = 0; n < o[e].length; n++) ie(o[e][n], t);
            }),
            (C = A.core.eventsDispatcher),
            (F = A.props),
            (C.dispatch = function (e) {
              F[e] && F[e]();
            }),
            (L = A.componentsServices),
            ((C = A.core.fullscreenToggler).enterFullscreen = function () {
              L.enterFullscreen();
              var e = document.documentElement;
              e.requestFullscreen
                ? e.requestFullscreen()
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullscreen
                ? e.webkitRequestFullscreen()
                : e.msRequestFullscreen && e.msRequestFullscreen();
            }),
            (C.exitFullscreen = function () {
              L.exitFullscreen(),
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen
                  ? document.webkitExitFullscreen()
                  : document.msExitFullscreen && document.msExitFullscreen();
            }),
            (C = A.core),
            (W = C.globalEventsController),
            (x = C.windowResizeActioner),
            (C = A.resolve),
            (y = C(fe)),
            (S = C(he)),
            (w = C(me)),
            (W.attachListeners = function () {
              document.addEventListener("mousemove", S.listener),
                document.addEventListener("touchmove", S.listener, {
                  passive: !0,
                }),
                document.addEventListener("mouseup", w.listener),
                document.addEventListener("touchend", w.listener, {
                  passive: !0,
                }),
                addEventListener("resize", x.runActions),
                document.addEventListener("keydown", y.listener);
            }),
            (W.removeListeners = function () {
              document.removeEventListener("mousemove", S.listener),
                document.removeEventListener("touchmove", S.listener),
                document.removeEventListener("mouseup", w.listener),
                document.removeEventListener("touchend", w.listener),
                removeEventListener("resize", x.runActions),
                document.removeEventListener("keydown", y.listener);
            }),
            (C = A.core.lightboxCloser),
            (v = (0, A.resolve)(de)),
            (C.closeLightbox = function () {
              v.isLightboxFadingOut || v.runActions();
            }),
            se(A),
            (P = A.data),
            ((g = A.core.scrollbarRecompensor).addRecompense = function () {
              "complete" === document.readyState
                ? b()
                : addEventListener("load", function () {
                    b(), (g.addRecompense = b);
                  });
            }),
            (b = function () {
              document.body.offsetHeight > innerHeight &&
                (document.body.style.paddingRight = 7 + "px");
            }),
            (g.removeRecompense = function () {
              document.body.style.removeProperty("margin-right");
            }),
            (W = A.core),
            (C = W.slideChangeFacade),
            (h = W.slideIndexChanger),
            (m = W.stageManager),
            1 < A.props.sources.length
              ? ((C.changeToPrevious = function () {
                  h.jumpTo(m.getPreviousSlideIndex());
                }),
                (C.changeToNext = function () {
                  h.jumpTo(m.getNextSlideIndex());
                }))
              : ((C.changeToPrevious = function () {}),
                (C.changeToNext = function () {})),
            pe(A),
            (W = A.core),
            (O = W.classFacade),
            (W = W.slideSwipingDown),
            (R = A.elements.sources),
            (f = A.slideSwipingProps),
            (j = A.stageIndexes),
            (W.listener = function (e) {
              (f.isSwiping = !0),
                (f.downClientX = re(e)),
                (f.swipedX = 0),
                "VIDEO" === e.target.tagName || e.touches || e.preventDefault();
              var t = R[j.current];
              t && t.contains(e.target)
                ? (f.isSourceDownEventTarget = !0)
                : (f.isSourceDownEventTarget = !1),
                O.removeFromEachElementClassIfContains("sourceMainWrappers", Z);
            }),
            (d = A.collections.sourcesRenderFunctions),
            (C = A.core.sourceDisplayFacade),
            (D = A.props),
            (p = A.stageIndexes),
            (C.displaySourcesWhichShouldBeDisplayed = function () {
              if (D.loadOnlyCurrentSource) G(p.current);
              else for (var e in p) G(p[e]);
            }),
            (a = A.stageIndexes),
            (l = A.core.stageManager),
            (u = A.props.sources.length - 1),
            (l.getPreviousSlideIndex = function () {
              return 0 === a.current ? u : a.current - 1;
            }),
            (l.getNextSlideIndex = function () {
              return a.current === u ? 0 : a.current + 1;
            }),
            (l.updateStageIndexes =
              0 == u
                ? function () {}
                : 1 == u
                ? function () {
                    0 === a.current
                      ? ((a.next = 1), delete a.previous)
                      : ((a.previous = 0), delete a.next);
                  }
                : function () {
                    (a.previous = l.getPreviousSlideIndex()),
                      (a.next = l.getNextSlideIndex());
                  }),
            (l.isSourceInStage =
              u <= 2
                ? function () {
                    return !0;
                  }
                : function (e) {
                    var t = a.current;
                    if ((0 === t && e === u) || (t === u && 0 === e)) return !0;
                    t -= e;
                    return -1 == t || 0 == t || 1 == t;
                  }),
            (W = A.collections),
            (t = W.sourceMainWrappersTransformers),
            (n = W.sourceSizers),
            (W = A.core.windowResizeActioner),
            (i = A.data),
            (r = A.elements.sourceMainWrappers),
            (s = A.props),
            (c = A.stageIndexes),
            (W.runActions = function () {
              innerWidth < 992
                ? (i.maxSourceWidth = innerWidth)
                : (i.maxSourceWidth = 0.9 * innerWidth),
                (i.maxSourceHeight = 0.9 * innerHeight);
              for (var e = 0; e < s.sources.length; e++)
                ie(r[e], Z),
                  e !== c.current && t[e].negative(),
                  n[e] && n[e].adjustSize();
            }),
            (E.container = document.createElement("div")),
            (E.container.className = ""
              .concat($, "container ")
              .concat(K, " ")
              .concat(te)),
            ((C = e.elements).slideSwipingHoverer =
              document.createElement("div")),
            (C.slideSwipingHoverer.className = ""
              .concat($, "slide-swiping-hoverer ")
              .concat(K, " ")
              .concat(ee)),
            le(e);
          var T = e,
            A = T.core.slideSwipingDown,
            W = T.elements,
            _ = T.props.sources;
          (W.sourceWrappersContainer = document.createElement("div")),
            (W.sourceWrappersContainer.className = ""
              .concat(ee, " ")
              .concat(K)),
            W.container.appendChild(W.sourceWrappersContainer),
            W.sourceWrappersContainer.addEventListener("mousedown", A.listener),
            W.sourceWrappersContainer.addEventListener(
              "touchstart",
              A.listener,
              { passive: !0 }
            );
          for (var N = 0; N < _.length; N++)
            !(function (e, t) {
              var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                o = e.elements,
                i = o.sourceWrappersContainer,
                r = o.sourceMainWrappers,
                s =
                  ((r[t] = document.createElement("div")),
                  (r[t].className = ""
                    .concat(ee, " ")
                    .concat(K, " ")
                    .concat(Q)),
                  (r[t].innerHTML =
                    '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>'),
                  r[t].firstChild);
              (n[t] = function () {
                r[t].contains(s) && r[t].removeChild(s);
              }),
                i.appendChild(r[t]),
                (o = t),
                (n = e.elements),
                (i = n.sourceMainWrappers),
                ((n = n.sourceAnimationWrappers)[o] =
                  document.createElement("div")),
                i[o].appendChild(n[o]);
            })(T, N);
          1 < B.length &&
            ((C = (E = e).core.slideChangeFacade),
            oe(
              E,
              C.changeToPrevious,
              "previous",
              "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
            ),
            oe(
              E,
              C.changeToNext,
              "next",
              "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
            ));
          for (
            var z,
              M = e.props.sources,
              W = e.resolve,
              Y = W(ne),
              H = W(ce),
              J = W(ae, [Y, H]),
              k = 0;
            k < M.length;
            k++
          )
            "string" == typeof M[k]
              ? (z = J.getTypeSetByClientForIndex(k))
                ? H.runActionsForSourceTypeAndIndex(z, k)
                : (z = Y.getSourceTypeFromLocalStorageByUrl(M[k]))
                ? H.runActionsForSourceTypeAndIndex(z, k)
                : J.retrieveTypeWithXhrForIndex(k)
              : H.runActionsForSourceTypeAndIndex("custom", k);
          function G(e) {
            d[e] && (d[e](), delete d[e]);
          }
          X.dispatch("onInit");
        }
        function se(t) {
          var n = t.collections.sourceMainWrappersTransformers,
            o = t.componentsServices,
            e = t.core,
            i = e.eventsDispatcher,
            r = e.lightboxOpener,
            s = e.globalEventsController,
            c = e.scrollbarRecompensor,
            a = e.sourceDisplayFacade,
            l = e.stageManager,
            u = e.windowResizeActioner,
            d = t.data,
            p = t.elements,
            f = t.stageIndexes;
          r.open = function () {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            (f.current = e),
              d.isInitialized ? i.dispatch("onShow") : H(t),
              l.updateStageIndexes(),
              a.displaySourcesWhichShouldBeDisplayed(),
              o.setSlideNumber(e + 1),
              document.body.appendChild(p.container),
              document.documentElement.classList.add(h),
              c.addRecompense(),
              s.attachListeners(),
              u.runActions(),
              n[f.current].zero(),
              i.dispatch("onOpen");
          };
        }
        function o(e, t, n) {
          return (o = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return;
            if (Reflect.construct.sham) return;
            if ("function" == typeof Proxy) return 1;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                1
              );
            } catch (e) {
              return;
            }
          })()
            ? Reflect.construct
            : function (e, t, n) {
                var o = [null],
                  t = (o.push.apply(o, t), new (Function.bind.apply(e, o))());
                return n && i(t, n.prototype), t;
              }).apply(null, arguments);
        }
        function i(e, t) {
          return (i =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
          return o;
        }
        function C() {
          for (
            var u = document.getElementsByTagName("a"), e = 0;
            e < u.length;
            e++
          )
            !(function (n) {
              if (!u[n].hasAttribute("data-fslightbox")) return;
              var o = u[n].getAttribute("data-fslightbox"),
                e = u[n].getAttribute("href"),
                e =
                  (fsLightboxInstances[o] ||
                    (fsLightboxInstances[o] = new FsLightbox()),
                  "#" === e.charAt(0)
                    ? document.getElementById(e.substring(1))
                    : e),
                i =
                  (fsLightboxInstances[o].props.sources.push(e),
                  fsLightboxInstances[o].elements.a.push(u[n]),
                  fsLightboxInstances[o].props.sources.length - 1);
              (u[n].onclick = function (e) {
                e.preventDefault(), fsLightboxInstances[o].open(i);
              }),
                l("types", "data-type"),
                l("videosPosters", "data-video-poster"),
                l("customClasses", "data-class"),
                l("customClasses", "data-custom-class");
              for (
                var t,
                  r = [
                    "href",
                    "data-fslightbox",
                    "data-type",
                    "data-video-poster",
                    "data-class",
                    "data-custom-class",
                  ],
                  s = u[n].attributes,
                  c = fsLightboxInstances[o].props.customAttributes,
                  a = 0;
                a < s.length;
                a++
              )
                -1 === r.indexOf(s[a].name) &&
                  "data-" === s[a].name.substr(0, 5) &&
                  (c[i] || (c[i] = {}),
                  (t = s[a].name.substr(5)),
                  (c[i][t] = s[a].value));
              function l(e, t) {
                u[n].hasAttribute(t) &&
                  (fsLightboxInstances[o].props[e][i] = u[n].getAttribute(t));
              }
            })(e);
          var t = Object.keys(fsLightboxInstances);
          window.fsLightbox = fsLightboxInstances[t[t.length - 1]];
        }
        "object" ===
          ("undefined" == typeof document ? "undefined" : n(document)) &&
          (((e = document.createElement("style")).className = t),
          e.appendChild(
            document.createTextNode(
              ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
            )
          ),
          document.head.appendChild(e)),
          (window.FsLightbox = function () {
            var n = this;
            (this.props = {
              sources: [],
              customAttributes: [],
              customClasses: [],
              types: [],
              videosPosters: [],
              slideDistance: 0.3,
            }),
              (this.data = {
                isInitialized: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: (function () {
                  if ((n = localStorage.getItem("fslightbox-scrollbar-width")))
                    return n;
                  (n = document.createElement("div")),
                    ((e = n.style).visibility = "hidden"),
                    (e.width = "100px"),
                    (e.msOverflowStyle = "scrollbar"),
                    (e.overflow = "scroll");
                  var e = n,
                    t =
                      (((n = document.createElement("div")).style.width =
                        "100%"),
                      document.body.appendChild(e),
                      e.offsetWidth),
                    n = (e.appendChild(n), n.offsetWidth),
                    e = (document.body.removeChild(e), t - n);
                  return (
                    localStorage.setItem(
                      "fslightbox-scrollbar-width",
                      e.toString()
                    ),
                    e
                  );
                })(),
                isFullscreenOpen: !1,
              }),
              (this.slideSwipingProps = {
                isSwiping: !1,
                downClientX: null,
                isSourceDownEventTarget: !1,
                swipedX: 0,
              }),
              (this.stageIndexes = {}),
              (this.elements = {
                a: [],
                container: null,
                slideSwipingHoverer: null,
                sourceWrappersContainer: null,
                sources: [],
                sourceMainWrappers: [],
                sourceAnimationWrappers: [],
              }),
              (this.componentsServices = {
                enterFullscreen: null,
                exitFullscreen: null,
                hideSourceLoaderIfNotYetCollection: [],
                setSlideNumber: function () {},
              }),
              (this.resolve = function (e) {
                var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return (
                  t.unshift(n),
                  o(
                    e,
                    (function (e) {
                      if (Array.isArray(e)) return r(e);
                    })((e = t)) ||
                      (function (e) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(e)
                        )
                          return Array.from(e);
                      })(e) ||
                      (function (e) {
                        if (e) {
                          if ("string" == typeof e) return r(e, void 0);
                          var t = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return "Map" ===
                            (t =
                              "Object" === t && e.constructor
                                ? e.constructor.name
                                : t) || "Set" === t
                            ? Array.from(e)
                            : "Arguments" === t ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                            ? r(e, void 0)
                            : void 0;
                        }
                      })(e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                  )
                );
              }),
              (this.collections = {
                sourceMainWrappersTransformers: [],
                sourceLoadHandlers: [],
                sourcesRenderFunctions: [],
                sourceSizers: [],
              }),
              (this.core = {
                classFacade: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                slideSwipingDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {},
              }),
              se(this),
              (this.open = function (e) {
                return n.core.lightboxOpener.open(e);
              }),
              (this.close = function () {
                return n.core.lightboxCloser.closeLightbox();
              });
          }),
          (window.fsLightboxInstances = {}),
          C(),
          (window.refreshFsLightbox = function () {
            for (var e in fsLightboxInstances) {
              var t = fsLightboxInstances[e].props;
              (fsLightboxInstances[e] = new FsLightbox()),
                (fsLightboxInstances[e].props = t),
                (fsLightboxInstances[e].props.sources = []),
                (fsLightboxInstances[e].elements.a = []);
            }
            C();
          });
      },
    ]),
    (o = {}),
    (i.m = n),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == k(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 0))
  );
  function i(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  var n, o;
}
var t = window;
if (
  "object" == ("undefined" == typeof exports ? "undefined" : k(exports)) &&
  "object" == ("undefined" == typeof module ? "undefined" : k(module))
)
  module.exports = e();
else if ("function" == typeof define && define.amd) define([], e);
else {
  var n,
    o = e();
  for (n in o)
    ("object" == ("undefined" == typeof exports ? "undefined" : k(exports))
      ? exports
      : t)[n] = o[n];
}
