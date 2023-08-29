/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Xi = u(() => {
    window.tram = (function (e) {
      function t(l, E) {
        var I = new B.Bare();
        return I.init(l, E);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (E) {
          return "-" + E.toLowerCase();
        });
      }
      function n(l) {
        var E = parseInt(l.slice(1), 16),
          I = (E >> 16) & 255,
          O = (E >> 8) & 255,
          y = 255 & E;
        return [I, O, y];
      }
      function o(l, E, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (E << 8) | I).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, E) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E);
      }
      function s(l, E, I) {
        f("Units do not match [" + l + "]: " + E + ", " + I);
      }
      function c(l, E, I) {
        if ((E !== void 0 && (I = E), l === void 0)) return I;
        var O = I;
        return (
          xt.test(l) || !Et.test(l)
            ? (O = parseInt(l, 10))
            : Et.test(l) && (O = 1e3 * parseFloat(l)),
          0 > O && (O = 0),
          O === O ? O : I
        );
      }
      function f(l) {
        fe.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var E = -1, I = l ? l.length : 0, O = []; ++E < I; ) {
          var y = l[E];
          y && O.push(y);
        }
        return O;
      }
      var v = (function (l, E, I) {
          function O(oe) {
            return typeof oe == "object";
          }
          function y(oe) {
            return typeof oe == "function";
          }
          function w() {}
          function J(oe, he) {
            function H() {
              var Me = new le();
              return y(Me.init) && Me.init.apply(Me, arguments), Me;
            }
            function le() {}
            he === I && ((he = oe), (oe = Object)), (H.Bare = le);
            var de,
              Se = (w[l] = oe[l]),
              at = (le[l] = H[l] = new w());
            return (
              (at.constructor = H),
              (H.mixin = function (Me) {
                return (le[l] = H[l] = J(H, Me)[l]), H;
              }),
              (H.open = function (Me) {
                if (
                  ((de = {}),
                  y(Me) ? (de = Me.call(H, at, Se, H, oe)) : O(Me) && (de = Me),
                  O(de))
                )
                  for (var Sr in de) E.call(de, Sr) && (at[Sr] = de[Sr]);
                return y(at.init) || (at.init = oe), H;
              }),
              H.open(he)
            );
          }
          return J;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, E, I, O) {
              var y = (l /= O) * l,
                w = y * l;
              return (
                E +
                I * (-2.75 * w * y + 11 * y * y + -15.5 * w + 8 * y + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, E, I, O) {
              var y = (l /= O) * l,
                w = y * l;
              return E + I * (-1 * w * y + 3 * y * y + -3 * w + 2 * y);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, E, I, O) {
              var y = (l /= O) * l,
                w = y * l;
              return (
                E +
                I * (0.3 * w * y + -1.6 * y * y + 2.2 * w + -1.8 * y + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, E, I, O) {
              var y = (l /= O) * l,
                w = y * l;
              return E + I * (2 * w * y + -5 * y * y + 2 * w + 2 * y);
            },
          ],
          linear: [
            "linear",
            function (l, E, I, O) {
              return (I * l) / O + E;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, E, I, O) {
              return I * (l /= O) * l + E;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, E, I, O) {
              return -I * (l /= O) * (l - 2) + E;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, E, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l + E
                : (-I / 2) * (--l * (l - 2) - 1) + E;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, E, I, O) {
              return I * (l /= O) * l * l + E;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, E, I, O) {
              return I * ((l = l / O - 1) * l * l + 1) + E;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, E, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l + E
                : (I / 2) * ((l -= 2) * l * l + 2) + E;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, E, I, O) {
              return I * (l /= O) * l * l * l + E;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, E, I, O) {
              return -I * ((l = l / O - 1) * l * l * l - 1) + E;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, E, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l * l + E
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + E;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, E, I, O) {
              return I * (l /= O) * l * l * l * l + E;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, E, I, O) {
              return I * ((l = l / O - 1) * l * l * l * l + 1) + E;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, E, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l * l * l + E
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + E;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, E, I, O) {
              return -I * Math.cos((l / O) * (Math.PI / 2)) + I + E;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, E, I, O) {
              return I * Math.sin((l / O) * (Math.PI / 2)) + E;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, E, I, O) {
              return (-I / 2) * (Math.cos((Math.PI * l) / O) - 1) + E;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, E, I, O) {
              return l === 0 ? E : I * Math.pow(2, 10 * (l / O - 1)) + E;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, E, I, O) {
              return l === O
                ? E + I
                : I * (-Math.pow(2, (-10 * l) / O) + 1) + E;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, E, I, O) {
              return l === 0
                ? E
                : l === O
                ? E + I
                : (l /= O / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + E
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + E;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, E, I, O) {
              return -I * (Math.sqrt(1 - (l /= O) * l) - 1) + E;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, E, I, O) {
              return I * Math.sqrt(1 - (l = l / O - 1) * l) + E;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, E, I, O) {
              return (l /= O / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + E
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + E;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, E, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                I * (l /= O) * l * ((y + 1) * l - y) + E
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, E, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                I * ((l = l / O - 1) * l * ((y + 1) * l + y) + 1) + E
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, E, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                (l /= O / 2) < 1
                  ? (I / 2) * l * l * (((y *= 1.525) + 1) * l - y) + E
                  : (I / 2) *
                      ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) +
                    E
              );
            },
          ],
        },
        _ = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        S = window,
        L = "bkwld-tram",
        A = /[\-\.0-9]/g,
        R = /[A-Z]/,
        T = "number",
        q = /^(rgb|#)/,
        P = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        $ = "unitless",
        Q = /(all|none) 0s ease 0s/,
        ie = /^(width|height)$/,
        te = " ",
        M = b.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var E,
            I,
            O = "",
            y = l.split("-");
          for (E = 0; E < y.length; E++)
            O += y[E].charAt(0).toUpperCase() + y[E].slice(1);
          for (E = 0; E < m.length; E++)
            if (((I = m[E] + O), I in M.style))
              return { dom: I, css: F[E] + l };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function"),
        });
      if (V.transition) {
        var ee = V.timing.dom;
        if (((M.style[ee] = h["ease-in-back"][0]), !M.style[ee]))
          for (var ne in _) h[ne][0] = _[ne];
      }
      var D = (t.frame = (function () {
          var l =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return l && V.bind
            ? l.bind(S)
            : function (E) {
                S.setTimeout(E, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = S.performance,
            E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return E && V.bind
            ? E.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Y = v(function (l) {
          function E(re, pe) {
            var Ie = g(("" + re).split(te)),
              ve = Ie[0];
            pe = pe || {};
            var Fe = K[ve];
            if (!Fe) return f("Unsupported property: " + ve);
            if (!pe.weak || !this.props[ve]) {
              var Ye = Fe[0],
                Ve = this.props[ve];
              return (
                Ve || (Ve = this.props[ve] = new Ye.Bare()),
                Ve.init(this.$el, Ie, Fe, pe),
                Ve
              );
            }
          }
          function I(re, pe, Ie) {
            if (re) {
              var ve = typeof re;
              if (
                (pe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ve == "number" && pe)
              )
                return (
                  (this.timer = new se({
                    duration: re,
                    context: this,
                    complete: w,
                  })),
                  void (this.active = !0)
                );
              if (ve == "string" && pe) {
                switch (re) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    le.call(this);
                    break;
                  default:
                    E.call(this, re, Ie && Ie[1]);
                }
                return w.call(this);
              }
              if (ve == "function") return void re.call(this, this);
              if (ve == "object") {
                var Fe = 0;
                at.call(
                  this,
                  re,
                  function (Ae, ym) {
                    Ae.span > Fe && (Fe = Ae.span), Ae.stop(), Ae.animate(ym);
                  },
                  function (Ae) {
                    "wait" in Ae && (Fe = c(Ae.wait, 0));
                  }
                ),
                  Se.call(this),
                  Fe > 0 &&
                    ((this.timer = new se({ duration: Fe, context: this })),
                    (this.active = !0),
                    pe && (this.timer.complete = w));
                var Ye = this,
                  Ve = !1,
                  un = {};
                D(function () {
                  at.call(Ye, re, function (Ae) {
                    Ae.active && ((Ve = !0), (un[Ae.name] = Ae.nextStyle));
                  }),
                    Ve && Ye.$el.css(un);
                });
              }
            }
          }
          function O(re) {
            (re = c(re, 0)),
              this.active
                ? this.queue.push({ options: re })
                : ((this.timer = new se({
                    duration: re,
                    context: this,
                    complete: w,
                  })),
                  (this.active = !0));
          }
          function y(re) {
            return this.active
              ? (this.queue.push({ options: re, args: arguments }),
                void (this.timer.complete = w))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function w() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var re = this.queue.shift();
              I.call(this, re.options, !0, re.args);
            }
          }
          function J(re) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var pe;
            typeof re == "string"
              ? ((pe = {}), (pe[re] = 1))
              : (pe = typeof re == "object" && re != null ? re : this.props),
              at.call(this, pe, Me),
              Se.call(this);
          }
          function oe(re) {
            J.call(this, re), at.call(this, re, Sr, hm);
          }
          function he(re) {
            typeof re != "string" && (re = "block"),
              (this.el.style.display = re);
          }
          function H() {
            J.call(this), (this.el.style.display = "none");
          }
          function le() {
            this.el.offsetHeight;
          }
          function de() {
            J.call(this), e.removeData(this.el, L), (this.$el = this.el = null);
          }
          function Se() {
            var re,
              pe,
              Ie = [];
            this.upstream && Ie.push(this.upstream);
            for (re in this.props)
              (pe = this.props[re]), pe.active && Ie.push(pe.string);
            (Ie = Ie.join(",")),
              this.style !== Ie &&
                ((this.style = Ie), (this.el.style[V.transition.dom] = Ie));
          }
          function at(re, pe, Ie) {
            var ve,
              Fe,
              Ye,
              Ve,
              un = pe !== Me,
              Ae = {};
            for (ve in re)
              (Ye = re[ve]),
                ve in _e
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ve] = Ye))
                  : (R.test(ve) && (ve = r(ve)),
                    ve in K ? (Ae[ve] = Ye) : (Ve || (Ve = {}), (Ve[ve] = Ye)));
            for (ve in Ae) {
              if (((Ye = Ae[ve]), (Fe = this.props[ve]), !Fe)) {
                if (!un) continue;
                Fe = E.call(this, ve);
              }
              pe.call(this, Fe, Ye);
            }
            Ie && Ve && Ie.call(this, Ve);
          }
          function Me(re) {
            re.stop();
          }
          function Sr(re, pe) {
            re.set(pe);
          }
          function hm(re) {
            this.$el.css(re);
          }
          function ze(re, pe) {
            l[re] = function () {
              return this.children
                ? _m.call(this, pe, arguments)
                : (this.el && pe.apply(this, arguments), this);
            };
          }
          function _m(re, pe) {
            var Ie,
              ve = this.children.length;
            for (Ie = 0; ve > Ie; Ie++) re.apply(this.children[Ie], pe);
            return this;
          }
          (l.init = function (re) {
            if (
              ((this.$el = e(re)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              fe.keepInherited && !fe.fallback)
            ) {
              var pe = W(this.el, "transition");
              pe && !Q.test(pe) && (this.upstream = pe);
            }
            V.backface &&
              fe.hideBackface &&
              d(this.el, V.backface.css, "hidden");
          }),
            ze("add", E),
            ze("start", I),
            ze("wait", O),
            ze("then", y),
            ze("next", w),
            ze("stop", J),
            ze("set", oe),
            ze("show", he),
            ze("hide", H),
            ze("redraw", le),
            ze("destroy", de);
        }),
        B = v(Y, function (l) {
          function E(I, O) {
            var y = e.data(I, L) || e.data(I, L, new Y.Bare());
            return y.el || y.init(I), O ? y.start(O) : y;
          }
          l.init = function (I, O) {
            var y = e(I);
            if (!y.length) return this;
            if (y.length === 1) return E(y[0], O);
            var w = [];
            return (
              y.each(function (J, oe) {
                w.push(E(oe, O));
              }),
              (this.children = w),
              this
            );
          };
        }),
        U = v(function (l) {
          function E() {
            var w = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(w), J;
          }
          function I(w, J, oe) {
            return J !== void 0 && (oe = J), w in h ? w : oe;
          }
          function O(w) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return (J ? o(J[1], J[2], J[3]) : w).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var y = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (w, J, oe, he) {
            (this.$el = w), (this.el = w[0]);
            var H = J[0];
            oe[2] && (H = oe[2]),
              Z[H] && (H = Z[H]),
              (this.name = H),
              (this.type = oe[1]),
              (this.duration = c(J[1], this.duration, y.duration)),
              (this.ease = I(J[2], this.ease, y.ease)),
              (this.delay = c(J[3], this.delay, y.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ie.test(this.name)),
              (this.unit = he.unit || this.unit || fe.defaultUnit),
              (this.angle = he.angle || this.angle || fe.defaultAngle),
              fe.fallback || he.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    te +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? te + h[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : "")));
          }),
            (l.set = function (w) {
              (w = this.convert(w, this.type)), this.update(w), this.redraw();
            }),
            (l.transition = function (w) {
              (this.active = !0),
                (w = this.convert(w, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = E.call(this))),
                (this.nextStyle = w);
            }),
            (l.fallback = function (w) {
              var J =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (w = this.convert(w, this.type)),
                this.auto &&
                  (J == "auto" && (J = this.convert(this.get(), this.type)),
                  w == "auto" && (w = E.call(this))),
                (this.tween = new C({
                  from: J,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return W(this.el, this.name);
            }),
            (l.update = function (w) {
              d(this.el, this.name, w);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            }),
            (l.convert = function (w, J) {
              if (w == "auto" && this.auto) return w;
              var oe,
                he = typeof w == "number",
                H = typeof w == "string";
              switch (J) {
                case T:
                  if (he) return w;
                  if (H && w.replace(A, "") === "") return +w;
                  oe = "number(unitless)";
                  break;
                case q:
                  if (H) {
                    if (w === "" && this.original) return this.original;
                    if (J.test(w))
                      return w.charAt(0) == "#" && w.length == 7 ? w : O(w);
                  }
                  oe = "hex or rgb string";
                  break;
                case P:
                  if (he) return w + this.unit;
                  if (H && J.test(w)) return w;
                  oe = "number(px) or string(unit)";
                  break;
                case x:
                  if (he) return w + this.unit;
                  if (H && J.test(w)) return w;
                  oe = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (he) return w + this.angle;
                  if (H && J.test(w)) return w;
                  oe = "number(deg) or string(angle)";
                  break;
                case $:
                  if (he || (H && x.test(w))) return w;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, w), w;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = v(U, function (l, E) {
          l.init = function () {
            E.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        k = v(U, function (l, E) {
          (l.init = function () {
            E.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        z = v(U, function (l, E) {
          function I(O, y) {
            var w, J, oe, he, H;
            for (w in O)
              (he = _e[w]),
                (oe = he[0]),
                (J = he[1] || w),
                (H = this.convert(O[w], oe)),
                y.call(this, J, H, oe);
          }
          (l.init = function () {
            E.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                _e.perspective &&
                  fe.perspective &&
                  ((this.current.perspective = fe.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (O) {
              I.call(this, O, function (y, w) {
                this.current[y] = w;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (O) {
              var y = this.values(O);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w,
                J = {};
              for (w in this.current) J[w] = w in y ? y[w] : this.current[w];
              (this.active = !0), (this.nextStyle = this.style(J));
            }),
            (l.fallback = function (O) {
              var y = this.values(O);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (O) {
              var y,
                w = "";
              for (y in O) w += y + "(" + O[y] + ") ";
              return w;
            }),
            (l.values = function (O) {
              var y,
                w = {};
              return (
                I.call(this, O, function (J, oe, he) {
                  (w[J] = oe),
                    this.current[J] === void 0 &&
                      ((y = 0),
                      ~J.indexOf("scale") && (y = 1),
                      (this.current[J] = this.convert(y, he)));
                }),
                w
              );
            });
        }),
        C = v(function (l) {
          function E(H) {
            oe.push(H) === 1 && D(I);
          }
          function I() {
            var H,
              le,
              de,
              Se = oe.length;
            if (Se)
              for (D(I), le = j(), H = Se; H--; )
                (de = oe[H]), de && de.render(le);
          }
          function O(H) {
            var le,
              de = e.inArray(H, oe);
            de >= 0 &&
              ((le = oe.slice(de + 1)),
              (oe.length = de),
              le.length && (oe = oe.concat(le)));
          }
          function y(H) {
            return Math.round(H * he) / he;
          }
          function w(H, le, de) {
            return o(
              H[0] + de * (le[0] - H[0]),
              H[1] + de * (le[1] - H[1]),
              H[2] + de * (le[2] - H[2])
            );
          }
          var J = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var le = H.ease || J.ease;
            h[le] && (le = h[le][1]),
              typeof le != "function" && (le = J.ease),
              (this.ease = le),
              (this.update = H.update || i),
              (this.complete = H.complete || i),
              (this.context = H.context || this),
              (this.name = H.name);
            var de = H.from,
              Se = H.to;
            de === void 0 && (de = J.from),
              Se === void 0 && (Se = J.to),
              (this.unit = H.unit || ""),
              typeof de == "number" && typeof Se == "number"
                ? ((this.begin = de), (this.change = Se - de))
                : this.format(Se, de),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              H.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), E(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), O(this));
            }),
            (l.render = function (H) {
              var le,
                de = H - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var Se = this.ease(de, 0, 1, this.duration);
                return (
                  (le = this.startRGB
                    ? w(this.startRGB, this.endRGB, Se)
                    : y(this.begin + Se * this.change)),
                  (this.value = le + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (le = this.endHex || this.begin + this.change),
                (this.value = le + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (H, le) {
              if (((le += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(le)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = le.replace(A, ""),
                  Se = H.replace(A, "");
                de !== Se && s("tween", le, H), (this.unit = de);
              }
              (le = parseFloat(le)),
                (H = parseFloat(H)),
                (this.begin = this.value = le),
                (this.change = H - le);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var oe = [],
            he = 1e3;
        }),
        se = v(C, function (l) {
          (l.init = function (E) {
            (this.duration = E.duration || 0),
              (this.complete = E.complete || i),
              (this.context = E.context),
              this.play();
          }),
            (l.render = function (E) {
              var I = E - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Oe = v(C, function (l, E) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var O, y;
            for (O in I.values)
              (y = I.values[O]),
                this.current[O] !== y &&
                  this.tweens.push(
                    new C({
                      name: O,
                      from: this.current[O],
                      to: y,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var O,
                y,
                w = this.tweens.length,
                J = !1;
              for (O = w; O--; )
                (y = this.tweens[O]),
                  y.context &&
                    (y.render(I), (this.current[y.name] = y.value), (J = !0));
              return J
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((E.destroy.call(this), this.tweens)) {
                var I,
                  O = this.tweens.length;
                for (I = O; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        fe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!V.transition) return (fe.fallback = !0);
        fe.agentTests.push("(" + l + ")");
        var E = new RegExp(fe.agentTests.join("|"), "i");
        fe.fallback = E.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, E, I) {
          return new se({ complete: E, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var d = e.style,
        W = e.css,
        Z = { transform: V.transform && V.transform.css },
        K = {
          color: [p, q],
          background: [p, q, "background-color"],
          "outline-color": [p, q],
          "border-color": [p, q],
          "border-top-color": [p, q],
          "border-right-color": [p, q],
          "border-bottom-color": [p, q],
          "border-left-color": [p, q],
          "border-width": [U, P],
          "border-top-width": [U, P],
          "border-right-width": [U, P],
          "border-bottom-width": [U, P],
          "border-left-width": [U, P],
          "border-spacing": [U, P],
          "letter-spacing": [U, P],
          margin: [U, P],
          "margin-top": [U, P],
          "margin-right": [U, P],
          "margin-bottom": [U, P],
          "margin-left": [U, P],
          padding: [U, P],
          "padding-top": [U, P],
          "padding-right": [U, P],
          "padding-bottom": [U, P],
          "padding-left": [U, P],
          "outline-width": [U, P],
          opacity: [U, T],
          top: [U, x],
          right: [U, x],
          bottom: [U, x],
          left: [U, x],
          "font-size": [U, x],
          "text-indent": [U, x],
          "word-spacing": [U, x],
          width: [U, x],
          "min-width": [U, x],
          "max-width": [U, x],
          height: [U, x],
          "min-height": [U, x],
          "max-height": [U, x],
          "line-height": [U, $],
          "scroll-top": [k, T, "scrollTop"],
          "scroll-left": [k, T, "scrollLeft"],
        },
        _e = {};
      V.transform &&
        ((K.transform = [z]),
        (_e = {
          x: [x, "translateX"],
          y: [x, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        V.transform &&
          V.backface &&
          ((_e.z = [x, "translateZ"]),
          (_e.rotateZ = [X]),
          (_e.scaleZ = [T]),
          (_e.perspective = [P]));
      var xt = /ms/,
        Et = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var bs = u((qW, Os) => {
    var mm = window.$,
      Im = Xi() && mm.tram;
    Os.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        v = r.map,
        h = r.reduce,
        _ = r.reduceRight,
        b = r.filter,
        S = r.every,
        L = r.some,
        A = r.indexOf,
        R = r.lastIndexOf,
        T = Array.isArray,
        q = Object.keys,
        P = o.bind,
        x =
          (e.each =
          e.forEach =
            function (m, F, G) {
              if (m == null) return m;
              if (g && m.forEach === g) m.forEach(F, G);
              else if (m.length === +m.length) {
                for (var V = 0, ee = m.length; V < ee; V++)
                  if (F.call(G, m[V], V, m) === t) return;
              } else
                for (var ne = e.keys(m), V = 0, ee = ne.length; V < ee; V++)
                  if (F.call(G, m[ne[V]], ne[V], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, F, G) {
          var V = [];
          return m == null
            ? V
            : v && m.map === v
            ? m.map(F, G)
            : (x(m, function (ee, ne, D) {
                V.push(F.call(G, ee, ne, D));
              }),
              V);
        }),
        (e.find = e.detect =
          function (m, F, G) {
            var V;
            return (
              X(m, function (ee, ne, D) {
                if (F.call(G, ee, ne, D)) return (V = ee), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (m, F, G) {
            var V = [];
            return m == null
              ? V
              : b && m.filter === b
              ? m.filter(F, G)
              : (x(m, function (ee, ne, D) {
                  F.call(G, ee, ne, D) && V.push(ee);
                }),
                V);
          });
      var X =
        (e.some =
        e.any =
          function (m, F, G) {
            F || (F = e.identity);
            var V = !1;
            return m == null
              ? V
              : L && m.some === L
              ? m.some(F, G)
              : (x(m, function (ee, ne, D) {
                  if (V || (V = F.call(G, ee, ne, D))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (m, F) {
          return m == null
            ? !1
            : A && m.indexOf === A
            ? m.indexOf(F) != -1
            : X(m, function (G) {
                return G === F;
              });
        }),
        (e.delay = function (m, F) {
          var G = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, G);
          }, F);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var F, G, V;
          return function () {
            F ||
              ((F = !0),
              (G = arguments),
              (V = this),
              Im.frame(function () {
                (F = !1), m.apply(V, G);
              }));
          };
        }),
        (e.debounce = function (m, F, G) {
          var V,
            ee,
            ne,
            D,
            j,
            Y = function () {
              var B = e.now() - D;
              B < F
                ? (V = setTimeout(Y, F - B))
                : ((V = null), G || ((j = m.apply(ne, ee)), (ne = ee = null)));
            };
          return function () {
            (ne = this), (ee = arguments), (D = e.now());
            var B = G && !V;
            return (
              V || (V = setTimeout(Y, F)),
              B && ((j = m.apply(ne, ee)), (ne = ee = null)),
              j
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var F = 1, G = arguments.length; F < G; F++) {
            var V = arguments[F];
            for (var ee in V) m[ee] === void 0 && (m[ee] = V[ee]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (q) return q(m);
          var F = [];
          for (var G in m) e.has(m, G) && F.push(G);
          return F;
        }),
        (e.has = function (m, F) {
          return f.call(m, F);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var $ = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ie = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (m) {
          return "\\" + Q[m];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, F, G) {
          !F && G && (F = G), (F = e.defaults({}, F, e.templateSettings));
          var V = RegExp(
              [
                (F.escape || $).source,
                (F.interpolate || $).source,
                (F.evaluate || $).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            ne = "__p+='";
          m.replace(V, function (B, U, p, k, z) {
            return (
              (ne += m.slice(ee, z).replace(ie, te)),
              (ee = z + B.length),
              U
                ? (ne +=
                    `'+
((__t=(` +
                    U +
                    `))==null?'':_.escape(__t))+
'`)
                : p
                ? (ne +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':__t)+
'`)
                : k &&
                  (ne +=
                    `';
` +
                    k +
                    `
__p+='`),
              B
            );
          }),
            (ne += `';
`);
          var D = F.variable;
          if (D) {
            if (!M.test(D))
              throw new Error("variable is not a bare identifier: " + D);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (D = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var j;
          try {
            j = new Function(F.variable || "obj", "_", ne);
          } catch (B) {
            throw ((B.source = ne), B);
          }
          var Y = function (B) {
            return j.call(this, B, e);
          };
          return (
            (Y.source =
              "function(" +
              D +
              `){
` +
              ne +
              "}"),
            Y
          );
        }),
        e
      );
    })();
  });
  var ke = u((PW, Ps) => {
    var ge = {},
      zt = {},
      Yt = [],
      Wi = window.Webflow || [],
      Tt = window.jQuery,
      Qe = Tt(window),
      Tm = Tt(document),
      st = Tt.isFunction,
      $e = (ge._ = bs()),
      As = (ge.tram = Xi() && Tt.tram),
      ln = !1,
      Bi = !1;
    As.config.hideBackface = !1;
    As.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      zt[e] && Rs(zt[e]);
      var n = (zt[e] = t(Tt, $e, r) || {});
      return ws(n), n;
    };
    ge.require = function (e) {
      return zt[e];
    };
    function ws(e) {
      ge.env() &&
        (st(e.design) && Qe.on("__wf_design", e.design),
        st(e.preview) && Qe.on("__wf_preview", e.preview)),
        st(e.destroy) && Qe.on("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && Om(e);
    }
    function Om(e) {
      if (ln) {
        e.ready();
        return;
      }
      $e.contains(Yt, e.ready) || Yt.push(e.ready);
    }
    function Rs(e) {
      st(e.design) && Qe.off("__wf_design", e.design),
        st(e.preview) && Qe.off("__wf_preview", e.preview),
        st(e.destroy) && Qe.off("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && bm(e);
    }
    function bm(e) {
      Yt = $e.filter(Yt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (ln) {
        st(e) && e();
        return;
      }
      Wi.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      Cs = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Sm = (ge.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      Am = (ge.env.ios = /(ipod|iphone|ipad)/.test(cn));
    ge.env.safari = /safari/.test(cn) && !Sm && !Am;
    var Vi;
    Cs &&
      Tm.on("touchstart mousedown", function (e) {
        Vi = e.target;
      });
    ge.validClick = Cs
      ? function (e) {
          return e === Vi || Tt.contains(e, Vi);
        }
      : function () {
          return !0;
        };
    var Ns = "resize.webflow orientationchange.webflow load.webflow",
      wm = "scroll.webflow " + Ns;
    ge.resize = Hi(Qe, Ns);
    ge.scroll = Hi(Qe, wm);
    ge.redraw = Hi();
    function Hi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = $e.throttle(function (o) {
          $e.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && ($e.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = $e.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (ln = !0), Bi ? Rm() : $e.each(Yt, Ss), $e.each(Wi, Ss), ge.resize.up();
    };
    function Ss(e) {
      st(e) && e();
    }
    function Rm() {
      (Bi = !1), $e.each(zt, ws);
    }
    var Lt;
    ge.load = function (e) {
      Lt.then(e);
    };
    function qs() {
      Lt && (Lt.reject(), Qe.off("load", Lt.resolve)),
        (Lt = new Tt.Deferred()),
        Qe.on("load", Lt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Bi = !0),
        Qe.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        $e.each(zt, Rs),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (Yt = []),
        (Wi = []),
        Lt.state() === "pending" && qs();
    };
    Tt(ge.ready);
    qs();
    Ps.exports = window.Webflow = ge;
  });
  var Ds = u((xW, Ls) => {
    var xs = ke();
    xs.define(
      "brand",
      (Ls.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var _ = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (_ = !0),
            _ &&
              !s &&
              ((f = f || v()),
              h(),
              setTimeout(h, 500),
              e(r).off(c, g).on(c, g));
        };
        function g() {
          var _ =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", _ ? "display: none !important;" : "");
        }
        function v() {
          var _ = e('<a class="w-webflow-badge" style="display:none;"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            S = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return _.append(b, S), _[0];
        }
        function h() {
          var _ = o.children(i),
            b = _.length && _.get(0) === f,
            S = xs.env("editor");
          if (b) {
            S && _.remove();
            return;
          }
          _.length && _.remove(), S || o.append(f);
        }
        return t;
      })
    );
  });
  var Fs = u((LW, Ms) => {
    var ki = ke();
    ki.define(
      "edit",
      (Ms.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ki.env("test") || ki.env("frame")) && !r.fixture && !Cm())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || h,
          g = !1;
        try {
          g =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        g
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(s, v).triggerHandler(s);
        function v() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function h() {
          (c = !0),
            (window.WebflowEditor = !0),
            o.off(s, v),
            R(function (q) {
              e.ajax({
                url: A("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: _(q),
              });
            });
        }
        function _(q) {
          return function (P) {
            if (!P) {
              console.error("Could not load editor data");
              return;
            }
            (P.thirdPartyCookiesSupported = q),
              b(L(P.bugReporterScriptPath), function () {
                b(L(P.scriptPath), function () {
                  window.WebflowEditor(P);
                });
              });
          };
        }
        function b(q, P) {
          e.ajax({ type: "GET", url: q, dataType: "script", cache: !0 }).then(
            P,
            S
          );
        }
        function S(q, P, x) {
          throw (console.error("Could not load editor script: " + P), x);
        }
        function L(q) {
          return q.indexOf("//") >= 0
            ? q
            : A("https://editor-api.webflow.com" + q);
        }
        function A(q) {
          return q.replace(/([^:])\/\//g, "$1/");
        }
        function R(q) {
          var P = window.document.createElement("iframe");
          (P.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (P.style.display = "none"),
            (P.sandbox = "allow-scripts allow-same-origin");
          var x = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (T(P, x), q(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (T(P, x), q(!0));
          };
          (P.onerror = function () {
            T(P, x), q(!1);
          }),
            window.addEventListener("message", x, !1),
            window.document.body.appendChild(P);
        }
        function T(q, P) {
          window.removeEventListener("message", P, !1), q.remove();
        }
        return n;
      })
    );
    function Cm() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Us = u((DW, Gs) => {
    var Nm = ke();
    Nm.define(
      "focus-visible",
      (Gs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var q = T.type,
              P = T.tagName;
            return !!(
              (P === "INPUT" && a[q] && !T.readOnly) ||
              (P === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function g(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function v(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function _(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function b(T) {
            s(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              g(T.target));
          }
          function S() {
            document.visibilityState === "hidden" && (o && (n = !0), L());
          }
          function L() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function A() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", S, !0),
            L(),
            r.addEventListener("focus", _, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ws = u((MW, Vs) => {
    var Xs = ke();
    Xs.define(
      "focus",
      (Vs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var ks = u((FW, Hs) => {
    "use strict";
    var ji = window.jQuery,
      ut = {},
      fn = [],
      Bs = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ji(t).triggerHandler(ut.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ji(t).triggerHandler(ut.types.OUTRO));
        },
      };
    ut.triggers = {};
    ut.types = { INTRO: "w-ix-intro" + Bs, OUTRO: "w-ix-outro" + Bs };
    ut.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), ji.extend(ut.triggers, dn);
    };
    ut.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (ut.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    ut.async();
    Hs.exports = ut;
  });
  var vn = u((GW, zs) => {
    "use strict";
    var Ki = ks();
    function js(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var qm = window.jQuery,
      pn = {},
      Ks = ".w-ix",
      Pm = {
        reset: function (e, t) {
          Ki.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ki.triggers.intro(e, t), js(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ki.triggers.outro(e, t), js(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
    qm.extend(pn.triggers, Pm);
    zs.exports = pn;
  });
  var Ys = u((UW, ht) => {
    function zi(e) {
      return (
        (ht.exports = zi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ht.exports.__esModule = !0),
        (ht.exports.default = ht.exports),
        zi(e)
      );
    }
    (ht.exports = zi),
      (ht.exports.__esModule = !0),
      (ht.exports.default = ht.exports);
  });
  var Dt = u((XW, Ar) => {
    var xm = Ys().default;
    function $s(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return ($s = function (o) {
        return o ? r : t;
      })(e);
    }
    function Lm(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (xm(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = $s(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ar.exports = Lm),
      (Ar.exports.__esModule = !0),
      (Ar.exports.default = Ar.exports);
  });
  var Ze = u((VW, wr) => {
    function Dm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (wr.exports = Dm),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var me = u((WW, Qs) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    Qs.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var $t = u((BW, Zs) => {
    Zs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((HW, Js) => {
    var Mm = $t();
    Js.exports = !Mm(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var En = u((kW, eu) => {
    var Rr = Function.prototype.call;
    eu.exports = Rr.bind
      ? Rr.bind(Rr)
      : function () {
          return Rr.apply(Rr, arguments);
        };
  });
  var iu = u((nu) => {
    "use strict";
    var tu = {}.propertyIsEnumerable,
      ru = Object.getOwnPropertyDescriptor,
      Fm = ru && !tu.call({ 1: 2 }, 1);
    nu.f = Fm
      ? function (t) {
          var r = ru(this, t);
          return !!r && r.enumerable;
        }
      : tu;
  });
  var Yi = u((KW, ou) => {
    ou.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Je = u((zW, su) => {
    var au = Function.prototype,
      $i = au.bind,
      Qi = au.call,
      Gm = $i && $i.bind(Qi);
    su.exports = $i
      ? function (e) {
          return e && Gm(Qi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Qi.apply(e, arguments);
            }
          );
        };
  });
  var lu = u((YW, cu) => {
    var uu = Je(),
      Um = uu({}.toString),
      Xm = uu("".slice);
    cu.exports = function (e) {
      return Xm(Um(e), 8, -1);
    };
  });
  var du = u(($W, fu) => {
    var Vm = me(),
      Wm = Je(),
      Bm = $t(),
      Hm = lu(),
      Zi = Vm.Object,
      km = Wm("".split);
    fu.exports = Bm(function () {
      return !Zi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Hm(e) == "String" ? km(e, "") : Zi(e);
        }
      : Zi;
  });
  var Ji = u((QW, pu) => {
    var jm = me(),
      Km = jm.TypeError;
    pu.exports = function (e) {
      if (e == null) throw Km("Can't call method on " + e);
      return e;
    };
  });
  var Cr = u((ZW, vu) => {
    var zm = du(),
      Ym = Ji();
    vu.exports = function (e) {
      return zm(Ym(e));
    };
  });
  var ct = u((JW, gu) => {
    gu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Qt = u((eB, Eu) => {
    var $m = ct();
    Eu.exports = function (e) {
      return typeof e == "object" ? e !== null : $m(e);
    };
  });
  var Nr = u((tB, hu) => {
    var eo = me(),
      Qm = ct(),
      Zm = function (e) {
        return Qm(e) ? e : void 0;
      };
    hu.exports = function (e, t) {
      return arguments.length < 2 ? Zm(eo[e]) : eo[e] && eo[e][t];
    };
  });
  var yu = u((rB, _u) => {
    var Jm = Je();
    _u.exports = Jm({}.isPrototypeOf);
  });
  var Iu = u((nB, mu) => {
    var eI = Nr();
    mu.exports = eI("navigator", "userAgent") || "";
  });
  var Ru = u((iB, wu) => {
    var Au = me(),
      to = Iu(),
      Tu = Au.process,
      Ou = Au.Deno,
      bu = (Tu && Tu.versions) || (Ou && Ou.version),
      Su = bu && bu.v8,
      et,
      hn;
    Su &&
      ((et = Su.split(".")),
      (hn = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1])));
    !hn &&
      to &&
      ((et = to.match(/Edge\/(\d+)/)),
      (!et || et[1] >= 74) &&
        ((et = to.match(/Chrome\/(\d+)/)), et && (hn = +et[1])));
    wu.exports = hn;
  });
  var ro = u((oB, Nu) => {
    var Cu = Ru(),
      tI = $t();
    Nu.exports =
      !!Object.getOwnPropertySymbols &&
      !tI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Cu && Cu < 41)
        );
      });
  });
  var no = u((aB, qu) => {
    var rI = ro();
    qu.exports = rI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var io = u((sB, Pu) => {
    var nI = me(),
      iI = Nr(),
      oI = ct(),
      aI = yu(),
      sI = no(),
      uI = nI.Object;
    Pu.exports = sI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = iI("Symbol");
          return oI(t) && aI(t.prototype, uI(e));
        };
  });
  var Lu = u((uB, xu) => {
    var cI = me(),
      lI = cI.String;
    xu.exports = function (e) {
      try {
        return lI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Mu = u((cB, Du) => {
    var fI = me(),
      dI = ct(),
      pI = Lu(),
      vI = fI.TypeError;
    Du.exports = function (e) {
      if (dI(e)) return e;
      throw vI(pI(e) + " is not a function");
    };
  });
  var Gu = u((lB, Fu) => {
    var gI = Mu();
    Fu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : gI(r);
    };
  });
  var Xu = u((fB, Uu) => {
    var EI = me(),
      oo = En(),
      ao = ct(),
      so = Qt(),
      hI = EI.TypeError;
    Uu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ao((r = e.toString)) && !so((n = oo(r, e)))) ||
        (ao((r = e.valueOf)) && !so((n = oo(r, e)))) ||
        (t !== "string" && ao((r = e.toString)) && !so((n = oo(r, e))))
      )
        return n;
      throw hI("Can't convert object to primitive value");
    };
  });
  var Wu = u((dB, Vu) => {
    Vu.exports = !1;
  });
  var _n = u((pB, Hu) => {
    var Bu = me(),
      _I = Object.defineProperty;
    Hu.exports = function (e, t) {
      try {
        _I(Bu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Bu[e] = t;
      }
      return t;
    };
  });
  var yn = u((vB, ju) => {
    var yI = me(),
      mI = _n(),
      ku = "__core-js_shared__",
      II = yI[ku] || mI(ku, {});
    ju.exports = II;
  });
  var uo = u((gB, zu) => {
    var TI = Wu(),
      Ku = yn();
    (zu.exports = function (e, t) {
      return Ku[e] || (Ku[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: TI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var $u = u((EB, Yu) => {
    var OI = me(),
      bI = Ji(),
      SI = OI.Object;
    Yu.exports = function (e) {
      return SI(bI(e));
    };
  });
  var Ot = u((hB, Qu) => {
    var AI = Je(),
      wI = $u(),
      RI = AI({}.hasOwnProperty);
    Qu.exports =
      Object.hasOwn ||
      function (t, r) {
        return RI(wI(t), r);
      };
  });
  var co = u((_B, Zu) => {
    var CI = Je(),
      NI = 0,
      qI = Math.random(),
      PI = CI((1).toString);
    Zu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + PI(++NI + qI, 36);
    };
  });
  var lo = u((yB, nc) => {
    var xI = me(),
      LI = uo(),
      Ju = Ot(),
      DI = co(),
      ec = ro(),
      rc = no(),
      Zt = LI("wks"),
      Ft = xI.Symbol,
      tc = Ft && Ft.for,
      MI = rc ? Ft : (Ft && Ft.withoutSetter) || DI;
    nc.exports = function (e) {
      if (!Ju(Zt, e) || !(ec || typeof Zt[e] == "string")) {
        var t = "Symbol." + e;
        ec && Ju(Ft, e)
          ? (Zt[e] = Ft[e])
          : rc && tc
          ? (Zt[e] = tc(t))
          : (Zt[e] = MI(t));
      }
      return Zt[e];
    };
  });
  var sc = u((mB, ac) => {
    var FI = me(),
      GI = En(),
      ic = Qt(),
      oc = io(),
      UI = Gu(),
      XI = Xu(),
      VI = lo(),
      WI = FI.TypeError,
      BI = VI("toPrimitive");
    ac.exports = function (e, t) {
      if (!ic(e) || oc(e)) return e;
      var r = UI(e, BI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = GI(r, e, t)), !ic(n) || oc(n))
        )
          return n;
        throw WI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), XI(e, t);
    };
  });
  var fo = u((IB, uc) => {
    var HI = sc(),
      kI = io();
    uc.exports = function (e) {
      var t = HI(e, "string");
      return kI(t) ? t : t + "";
    };
  });
  var vo = u((TB, lc) => {
    var jI = me(),
      cc = Qt(),
      po = jI.document,
      KI = cc(po) && cc(po.createElement);
    lc.exports = function (e) {
      return KI ? po.createElement(e) : {};
    };
  });
  var go = u((OB, fc) => {
    var zI = Mt(),
      YI = $t(),
      $I = vo();
    fc.exports =
      !zI &&
      !YI(function () {
        return (
          Object.defineProperty($I("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var Eo = u((pc) => {
    var QI = Mt(),
      ZI = En(),
      JI = iu(),
      eT = Yi(),
      tT = Cr(),
      rT = fo(),
      nT = Ot(),
      iT = go(),
      dc = Object.getOwnPropertyDescriptor;
    pc.f = QI
      ? dc
      : function (t, r) {
          if (((t = tT(t)), (r = rT(r)), iT))
            try {
              return dc(t, r);
            } catch {}
          if (nT(t, r)) return eT(!ZI(JI.f, t, r), t[r]);
        };
  });
  var qr = u((SB, gc) => {
    var vc = me(),
      oT = Qt(),
      aT = vc.String,
      sT = vc.TypeError;
    gc.exports = function (e) {
      if (oT(e)) return e;
      throw sT(aT(e) + " is not an object");
    };
  });
  var Pr = u((_c) => {
    var uT = me(),
      cT = Mt(),
      lT = go(),
      Ec = qr(),
      fT = fo(),
      dT = uT.TypeError,
      hc = Object.defineProperty;
    _c.f = cT
      ? hc
      : function (t, r, n) {
          if ((Ec(t), (r = fT(r)), Ec(n), lT))
            try {
              return hc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw dT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var mn = u((wB, yc) => {
    var pT = Mt(),
      vT = Pr(),
      gT = Yi();
    yc.exports = pT
      ? function (e, t, r) {
          return vT.f(e, t, gT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var _o = u((RB, mc) => {
    var ET = Je(),
      hT = ct(),
      ho = yn(),
      _T = ET(Function.toString);
    hT(ho.inspectSource) ||
      (ho.inspectSource = function (e) {
        return _T(e);
      });
    mc.exports = ho.inspectSource;
  });
  var Oc = u((CB, Tc) => {
    var yT = me(),
      mT = ct(),
      IT = _o(),
      Ic = yT.WeakMap;
    Tc.exports = mT(Ic) && /native code/.test(IT(Ic));
  });
  var yo = u((NB, Sc) => {
    var TT = uo(),
      OT = co(),
      bc = TT("keys");
    Sc.exports = function (e) {
      return bc[e] || (bc[e] = OT(e));
    };
  });
  var In = u((qB, Ac) => {
    Ac.exports = {};
  });
  var Pc = u((PB, qc) => {
    var bT = Oc(),
      Nc = me(),
      mo = Je(),
      ST = Qt(),
      AT = mn(),
      Io = Ot(),
      To = yn(),
      wT = yo(),
      RT = In(),
      wc = "Object already initialized",
      bo = Nc.TypeError,
      CT = Nc.WeakMap,
      Tn,
      xr,
      On,
      NT = function (e) {
        return On(e) ? xr(e) : Tn(e, {});
      },
      qT = function (e) {
        return function (t) {
          var r;
          if (!ST(t) || (r = xr(t)).type !== e)
            throw bo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    bT || To.state
      ? ((bt = To.state || (To.state = new CT())),
        (Rc = mo(bt.get)),
        (Oo = mo(bt.has)),
        (Cc = mo(bt.set)),
        (Tn = function (e, t) {
          if (Oo(bt, e)) throw new bo(wc);
          return (t.facade = e), Cc(bt, e, t), t;
        }),
        (xr = function (e) {
          return Rc(bt, e) || {};
        }),
        (On = function (e) {
          return Oo(bt, e);
        }))
      : ((Gt = wT("state")),
        (RT[Gt] = !0),
        (Tn = function (e, t) {
          if (Io(e, Gt)) throw new bo(wc);
          return (t.facade = e), AT(e, Gt, t), t;
        }),
        (xr = function (e) {
          return Io(e, Gt) ? e[Gt] : {};
        }),
        (On = function (e) {
          return Io(e, Gt);
        }));
    var bt, Rc, Oo, Cc, Gt;
    qc.exports = { set: Tn, get: xr, has: On, enforce: NT, getterFor: qT };
  });
  var Dc = u((xB, Lc) => {
    var So = Mt(),
      PT = Ot(),
      xc = Function.prototype,
      xT = So && Object.getOwnPropertyDescriptor,
      Ao = PT(xc, "name"),
      LT = Ao && function () {}.name === "something",
      DT = Ao && (!So || (So && xT(xc, "name").configurable));
    Lc.exports = { EXISTS: Ao, PROPER: LT, CONFIGURABLE: DT };
  });
  var Xc = u((LB, Uc) => {
    var MT = me(),
      Mc = ct(),
      FT = Ot(),
      Fc = mn(),
      GT = _n(),
      UT = _o(),
      Gc = Pc(),
      XT = Dc().CONFIGURABLE,
      VT = Gc.get,
      WT = Gc.enforce,
      BT = String(String).split("String");
    (Uc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Mc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!FT(r, "name") || (XT && r.name !== s)) && Fc(r, "name", s),
          (c = WT(r)),
          c.source || (c.source = BT.join(typeof s == "string" ? s : ""))),
        e === MT)
      ) {
        i ? (e[t] = r) : GT(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Fc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Mc(this) && VT(this).source) || UT(this);
    });
  });
  var wo = u((DB, Vc) => {
    var HT = Math.ceil,
      kT = Math.floor;
    Vc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? kT : HT)(t);
    };
  });
  var Bc = u((MB, Wc) => {
    var jT = wo(),
      KT = Math.max,
      zT = Math.min;
    Wc.exports = function (e, t) {
      var r = jT(e);
      return r < 0 ? KT(r + t, 0) : zT(r, t);
    };
  });
  var kc = u((FB, Hc) => {
    var YT = wo(),
      $T = Math.min;
    Hc.exports = function (e) {
      return e > 0 ? $T(YT(e), 9007199254740991) : 0;
    };
  });
  var Kc = u((GB, jc) => {
    var QT = kc();
    jc.exports = function (e) {
      return QT(e.length);
    };
  });
  var Ro = u((UB, Yc) => {
    var ZT = Cr(),
      JT = Bc(),
      eO = Kc(),
      zc = function (e) {
        return function (t, r, n) {
          var o = ZT(t),
            i = eO(o),
            a = JT(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Yc.exports = { includes: zc(!0), indexOf: zc(!1) };
  });
  var No = u((XB, Qc) => {
    var tO = Je(),
      Co = Ot(),
      rO = Cr(),
      nO = Ro().indexOf,
      iO = In(),
      $c = tO([].push);
    Qc.exports = function (e, t) {
      var r = rO(e),
        n = 0,
        o = [],
        i;
      for (i in r) !Co(iO, i) && Co(r, i) && $c(o, i);
      for (; t.length > n; ) Co(r, (i = t[n++])) && (~nO(o, i) || $c(o, i));
      return o;
    };
  });
  var bn = u((VB, Zc) => {
    Zc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var el = u((Jc) => {
    var oO = No(),
      aO = bn(),
      sO = aO.concat("length", "prototype");
    Jc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return oO(t, sO);
      };
  });
  var rl = u((tl) => {
    tl.f = Object.getOwnPropertySymbols;
  });
  var il = u((HB, nl) => {
    var uO = Nr(),
      cO = Je(),
      lO = el(),
      fO = rl(),
      dO = qr(),
      pO = cO([].concat);
    nl.exports =
      uO("Reflect", "ownKeys") ||
      function (t) {
        var r = lO.f(dO(t)),
          n = fO.f;
        return n ? pO(r, n(t)) : r;
      };
  });
  var al = u((kB, ol) => {
    var vO = Ot(),
      gO = il(),
      EO = Eo(),
      hO = Pr();
    ol.exports = function (e, t) {
      for (var r = gO(t), n = hO.f, o = EO.f, i = 0; i < r.length; i++) {
        var a = r[i];
        vO(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var ul = u((jB, sl) => {
    var _O = $t(),
      yO = ct(),
      mO = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = TO[IO(e)];
        return r == bO ? !0 : r == OO ? !1 : yO(t) ? _O(t) : !!t;
      },
      IO = (Lr.normalize = function (e) {
        return String(e).replace(mO, ".").toLowerCase();
      }),
      TO = (Lr.data = {}),
      OO = (Lr.NATIVE = "N"),
      bO = (Lr.POLYFILL = "P");
    sl.exports = Lr;
  });
  var ll = u((KB, cl) => {
    var qo = me(),
      SO = Eo().f,
      AO = mn(),
      wO = Xc(),
      RO = _n(),
      CO = al(),
      NO = ul();
    cl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        c,
        f,
        g;
      if (
        (n
          ? (a = qo)
          : o
          ? (a = qo[r] || RO(r, {}))
          : (a = (qo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((g = SO(a, s)), (c = g && g.value)) : (c = a[s]),
            (i = NO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            CO(f, c);
          }
          (e.sham || (c && c.sham)) && AO(f, "sham", !0), wO(a, s, f, e);
        }
    };
  });
  var dl = u((zB, fl) => {
    var qO = No(),
      PO = bn();
    fl.exports =
      Object.keys ||
      function (t) {
        return qO(t, PO);
      };
  });
  var vl = u((YB, pl) => {
    var xO = Mt(),
      LO = Pr(),
      DO = qr(),
      MO = Cr(),
      FO = dl();
    pl.exports = xO
      ? Object.defineProperties
      : function (t, r) {
          DO(t);
          for (var n = MO(r), o = FO(r), i = o.length, a = 0, s; i > a; )
            LO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var El = u(($B, gl) => {
    var GO = Nr();
    gl.exports = GO("document", "documentElement");
  });
  var bl = u((QB, Ol) => {
    var UO = qr(),
      XO = vl(),
      hl = bn(),
      VO = In(),
      WO = El(),
      BO = vo(),
      HO = yo(),
      _l = ">",
      yl = "<",
      xo = "prototype",
      Lo = "script",
      Il = HO("IE_PROTO"),
      Po = function () {},
      Tl = function (e) {
        return yl + Lo + _l + e + yl + "/" + Lo + _l;
      },
      ml = function (e) {
        e.write(Tl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      kO = function () {
        var e = BO("iframe"),
          t = "java" + Lo + ":",
          r;
        return (
          (e.style.display = "none"),
          WO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Tl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Sn,
      An = function () {
        try {
          Sn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && Sn
              ? ml(Sn)
              : kO()
            : ml(Sn);
        for (var e = hl.length; e--; ) delete An[xo][hl[e]];
        return An();
      };
    VO[Il] = !0;
    Ol.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Po[xo] = UO(t)), (n = new Po()), (Po[xo] = null), (n[Il] = t))
            : (n = An()),
          r === void 0 ? n : XO(n, r)
        );
      };
  });
  var Al = u((ZB, Sl) => {
    var jO = lo(),
      KO = bl(),
      zO = Pr(),
      Do = jO("unscopables"),
      Mo = Array.prototype;
    Mo[Do] == null && zO.f(Mo, Do, { configurable: !0, value: KO(null) });
    Sl.exports = function (e) {
      Mo[Do][e] = !0;
    };
  });
  var wl = u(() => {
    "use strict";
    var YO = ll(),
      $O = Ro().includes,
      QO = Al();
    YO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return $O(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    QO("includes");
  });
  var Cl = u((tH, Rl) => {
    var ZO = me(),
      JO = Je();
    Rl.exports = function (e, t) {
      return JO(ZO[e].prototype[t]);
    };
  });
  var ql = u((rH, Nl) => {
    wl();
    var eb = Cl();
    Nl.exports = eb("Array", "includes");
  });
  var xl = u((nH, Pl) => {
    var tb = ql();
    Pl.exports = tb;
  });
  var Dl = u((iH, Ll) => {
    var rb = xl();
    Ll.exports = rb;
  });
  var Fo = u((oH, Ml) => {
    var nb =
      typeof global == "object" && global && global.Object === Object && global;
    Ml.exports = nb;
  });
  var tt = u((aH, Fl) => {
    var ib = Fo(),
      ob = typeof self == "object" && self && self.Object === Object && self,
      ab = ib || ob || Function("return this")();
    Fl.exports = ab;
  });
  var Jt = u((sH, Gl) => {
    var sb = tt(),
      ub = sb.Symbol;
    Gl.exports = ub;
  });
  var Wl = u((uH, Vl) => {
    var Ul = Jt(),
      Xl = Object.prototype,
      cb = Xl.hasOwnProperty,
      lb = Xl.toString,
      Dr = Ul ? Ul.toStringTag : void 0;
    function fb(e) {
      var t = cb.call(e, Dr),
        r = e[Dr];
      try {
        e[Dr] = void 0;
        var n = !0;
      } catch {}
      var o = lb.call(e);
      return n && (t ? (e[Dr] = r) : delete e[Dr]), o;
    }
    Vl.exports = fb;
  });
  var Hl = u((cH, Bl) => {
    var db = Object.prototype,
      pb = db.toString;
    function vb(e) {
      return pb.call(e);
    }
    Bl.exports = vb;
  });
  var St = u((lH, Kl) => {
    var kl = Jt(),
      gb = Wl(),
      Eb = Hl(),
      hb = "[object Null]",
      _b = "[object Undefined]",
      jl = kl ? kl.toStringTag : void 0;
    function yb(e) {
      return e == null
        ? e === void 0
          ? _b
          : hb
        : jl && jl in Object(e)
        ? gb(e)
        : Eb(e);
    }
    Kl.exports = yb;
  });
  var Go = u((fH, zl) => {
    function mb(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    zl.exports = mb;
  });
  var Uo = u((dH, Yl) => {
    var Ib = Go(),
      Tb = Ib(Object.getPrototypeOf, Object);
    Yl.exports = Tb;
  });
  var _t = u((pH, $l) => {
    function Ob(e) {
      return e != null && typeof e == "object";
    }
    $l.exports = Ob;
  });
  var Xo = u((vH, Zl) => {
    var bb = St(),
      Sb = Uo(),
      Ab = _t(),
      wb = "[object Object]",
      Rb = Function.prototype,
      Cb = Object.prototype,
      Ql = Rb.toString,
      Nb = Cb.hasOwnProperty,
      qb = Ql.call(Object);
    function Pb(e) {
      if (!Ab(e) || bb(e) != wb) return !1;
      var t = Sb(e);
      if (t === null) return !0;
      var r = Nb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ql.call(r) == qb;
    }
    Zl.exports = Pb;
  });
  var Jl = u((Vo) => {
    "use strict";
    Object.defineProperty(Vo, "__esModule", { value: !0 });
    Vo.default = xb;
    function xb(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var ef = u((Bo, Wo) => {
    "use strict";
    Object.defineProperty(Bo, "__esModule", { value: !0 });
    var Lb = Jl(),
      Db = Mb(Lb);
    function Mb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var er;
    typeof self < "u"
      ? (er = self)
      : typeof window < "u"
      ? (er = window)
      : typeof global < "u"
      ? (er = global)
      : typeof Wo < "u"
      ? (er = Wo)
      : (er = Function("return this")());
    var Fb = (0, Db.default)(er);
    Bo.default = Fb;
  });
  var Ho = u((Mr) => {
    "use strict";
    Mr.__esModule = !0;
    Mr.ActionTypes = void 0;
    Mr.default = of;
    var Gb = Xo(),
      Ub = nf(Gb),
      Xb = ef(),
      tf = nf(Xb);
    function nf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var rf = (Mr.ActionTypes = { INIT: "@@redux/INIT" });
    function of(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(of)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function g() {
        return i;
      }
      function v(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var L = !0;
        return (
          f(),
          s.push(S),
          function () {
            if (L) {
              (L = !1), f();
              var R = s.indexOf(S);
              s.splice(R, 1);
            }
          }
        );
      }
      function h(S) {
        if (!(0, Ub.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, S));
        } finally {
          c = !1;
        }
        for (var L = (a = s), A = 0; A < L.length; A++) L[A]();
        return S;
      }
      function _(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = S), h({ type: rf.INIT });
      }
      function b() {
        var S,
          L = v;
        return (
          (S = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                R.next && R.next(g());
              }
              T();
              var q = L(T);
              return { unsubscribe: q };
            },
          }),
          (S[tf.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        h({ type: rf.INIT }),
        (n = { dispatch: h, subscribe: v, getState: g, replaceReducer: _ }),
        (n[tf.default] = b),
        n
      );
    }
  });
  var jo = u((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = Vb;
    function Vb(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var uf = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = jb;
    var af = Ho(),
      Wb = Xo(),
      _H = sf(Wb),
      Bb = jo(),
      yH = sf(Bb);
    function sf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Hb(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function kb(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: af.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                af.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function jb(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        kb(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var h = !1, _ = {}, b = 0; b < i.length; b++) {
          var S = i[b],
            L = r[S],
            A = f[S],
            R = L(A, g);
          if (typeof R > "u") {
            var T = Hb(S, g);
            throw new Error(T);
          }
          (_[S] = R), (h = h || R !== A);
        }
        return h ? _ : f;
      };
    }
  });
  var lf = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = Kb;
    function cf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Kb(e, t) {
      if (typeof e == "function") return cf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = cf(a, t));
      }
      return n;
    }
  });
  var $o = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = zb;
    function zb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ff = u((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    var Yb =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Qo.default = Jb;
    var $b = $o(),
      Qb = Zb($b);
    function Zb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Jb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            c = s.dispatch,
            f = [],
            g = {
              getState: s.getState,
              dispatch: function (h) {
                return c(h);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(g);
            })),
            (c = Qb.default.apply(void 0, f)(s.dispatch)),
            Yb({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Zo = u((je) => {
    "use strict";
    je.__esModule = !0;
    je.compose =
      je.applyMiddleware =
      je.bindActionCreators =
      je.combineReducers =
      je.createStore =
        void 0;
    var eS = Ho(),
      tS = tr(eS),
      rS = uf(),
      nS = tr(rS),
      iS = lf(),
      oS = tr(iS),
      aS = ff(),
      sS = tr(aS),
      uS = $o(),
      cS = tr(uS),
      lS = jo(),
      bH = tr(lS);
    function tr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    je.createStore = tS.default;
    je.combineReducers = nS.default;
    je.bindActionCreators = oS.default;
    je.applyMiddleware = sS.default;
    je.compose = cS.default;
  });
  var df = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var fS = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = fS;
    var dS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = dS;
    var pS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = pS;
    var vS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = vS;
    var gS = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = gS;
    var ES = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = ES;
    var hS = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = hS;
  });
  var Jo = u((rr) => {
    "use strict";
    Object.defineProperty(rr, "__esModule", { value: !0 });
    rr.ActionTypeConsts = rr.ActionAppliesTo = void 0;
    var _S = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    rr.ActionTypeConsts = _S;
    var yS = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    rr.ActionAppliesTo = yS;
  });
  var pf = u((wn) => {
    "use strict";
    Object.defineProperty(wn, "__esModule", { value: !0 });
    wn.InteractionTypeConsts = void 0;
    var mS = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    wn.InteractionTypeConsts = mS;
  });
  var vf = u((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.ReducedMotionTypes = void 0;
    var IS = Jo(),
      {
        TRANSFORM_MOVE: TS,
        TRANSFORM_SCALE: OS,
        TRANSFORM_ROTATE: bS,
        TRANSFORM_SKEW: SS,
        STYLE_SIZE: AS,
        STYLE_FILTER: wS,
        STYLE_FONT_VARIATION: RS,
      } = IS.ActionTypeConsts,
      CS = {
        [TS]: !0,
        [OS]: !0,
        [bS]: !0,
        [SS]: !0,
        [AS]: !0,
        [wS]: !0,
        [RS]: !0,
      };
    Rn.ReducedMotionTypes = CS;
  });
  var gf = u((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.IX2_VIEWPORT_WIDTH_CHANGED =
      ue.IX2_TEST_FRAME_RENDERED =
      ue.IX2_STOP_REQUESTED =
      ue.IX2_SESSION_STOPPED =
      ue.IX2_SESSION_STARTED =
      ue.IX2_SESSION_INITIALIZED =
      ue.IX2_RAW_DATA_IMPORTED =
      ue.IX2_PREVIEW_REQUESTED =
      ue.IX2_PLAYBACK_REQUESTED =
      ue.IX2_PARAMETER_CHANGED =
      ue.IX2_MEDIA_QUERIES_DEFINED =
      ue.IX2_INSTANCE_STARTED =
      ue.IX2_INSTANCE_REMOVED =
      ue.IX2_INSTANCE_ADDED =
      ue.IX2_EVENT_STATE_CHANGED =
      ue.IX2_EVENT_LISTENER_ADDED =
      ue.IX2_ELEMENT_STATE_CHANGED =
      ue.IX2_CLEAR_REQUESTED =
      ue.IX2_ANIMATION_FRAME_CHANGED =
      ue.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var NS = "IX2_RAW_DATA_IMPORTED";
    ue.IX2_RAW_DATA_IMPORTED = NS;
    var qS = "IX2_SESSION_INITIALIZED";
    ue.IX2_SESSION_INITIALIZED = qS;
    var PS = "IX2_SESSION_STARTED";
    ue.IX2_SESSION_STARTED = PS;
    var xS = "IX2_SESSION_STOPPED";
    ue.IX2_SESSION_STOPPED = xS;
    var LS = "IX2_PREVIEW_REQUESTED";
    ue.IX2_PREVIEW_REQUESTED = LS;
    var DS = "IX2_PLAYBACK_REQUESTED";
    ue.IX2_PLAYBACK_REQUESTED = DS;
    var MS = "IX2_STOP_REQUESTED";
    ue.IX2_STOP_REQUESTED = MS;
    var FS = "IX2_CLEAR_REQUESTED";
    ue.IX2_CLEAR_REQUESTED = FS;
    var GS = "IX2_EVENT_LISTENER_ADDED";
    ue.IX2_EVENT_LISTENER_ADDED = GS;
    var US = "IX2_EVENT_STATE_CHANGED";
    ue.IX2_EVENT_STATE_CHANGED = US;
    var XS = "IX2_ANIMATION_FRAME_CHANGED";
    ue.IX2_ANIMATION_FRAME_CHANGED = XS;
    var VS = "IX2_PARAMETER_CHANGED";
    ue.IX2_PARAMETER_CHANGED = VS;
    var WS = "IX2_INSTANCE_ADDED";
    ue.IX2_INSTANCE_ADDED = WS;
    var BS = "IX2_INSTANCE_STARTED";
    ue.IX2_INSTANCE_STARTED = BS;
    var HS = "IX2_INSTANCE_REMOVED";
    ue.IX2_INSTANCE_REMOVED = HS;
    var kS = "IX2_ELEMENT_STATE_CHANGED";
    ue.IX2_ELEMENT_STATE_CHANGED = kS;
    var jS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = jS;
    var KS = "IX2_VIEWPORT_WIDTH_CHANGED";
    ue.IX2_VIEWPORT_WIDTH_CHANGED = KS;
    var zS = "IX2_MEDIA_QUERIES_DEFINED";
    ue.IX2_MEDIA_QUERIES_DEFINED = zS;
    var YS = "IX2_TEST_FRAME_RENDERED";
    ue.IX2_TEST_FRAME_RENDERED = YS;
  });
  var Ef = u((N) => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.W_MOD_JS =
      N.W_MOD_IX =
      N.WILL_CHANGE =
      N.WIDTH =
      N.WF_PAGE =
      N.TRANSLATE_Z =
      N.TRANSLATE_Y =
      N.TRANSLATE_X =
      N.TRANSLATE_3D =
      N.TRANSFORM =
      N.SKEW_Y =
      N.SKEW_X =
      N.SKEW =
      N.SIBLINGS =
      N.SCALE_Z =
      N.SCALE_Y =
      N.SCALE_X =
      N.SCALE_3D =
      N.ROTATE_Z =
      N.ROTATE_Y =
      N.ROTATE_X =
      N.RENDER_TRANSFORM =
      N.RENDER_STYLE =
      N.RENDER_PLUGIN =
      N.RENDER_GENERAL =
      N.PRESERVE_3D =
      N.PLAIN_OBJECT =
      N.PARENT =
      N.OPACITY =
      N.IX2_ID_DELIMITER =
      N.IMMEDIATE_CHILDREN =
      N.HTML_ELEMENT =
      N.HEIGHT =
      N.FONT_VARIATION_SETTINGS =
      N.FLEX =
      N.FILTER =
      N.DISPLAY =
      N.CONFIG_Z_VALUE =
      N.CONFIG_Z_UNIT =
      N.CONFIG_Y_VALUE =
      N.CONFIG_Y_UNIT =
      N.CONFIG_X_VALUE =
      N.CONFIG_X_UNIT =
      N.CONFIG_VALUE =
      N.CONFIG_UNIT =
      N.COMMA_DELIMITER =
      N.COLOR =
      N.COLON_DELIMITER =
      N.CHILDREN =
      N.BOUNDARY_SELECTOR =
      N.BORDER_COLOR =
      N.BAR_DELIMITER =
      N.BACKGROUND_COLOR =
      N.BACKGROUND =
      N.AUTO =
      N.ABSTRACT_NODE =
        void 0;
    var $S = "|";
    N.IX2_ID_DELIMITER = $S;
    var QS = "data-wf-page";
    N.WF_PAGE = QS;
    var ZS = "w-mod-js";
    N.W_MOD_JS = ZS;
    var JS = "w-mod-ix";
    N.W_MOD_IX = JS;
    var eA = ".w-dyn-item";
    N.BOUNDARY_SELECTOR = eA;
    var tA = "xValue";
    N.CONFIG_X_VALUE = tA;
    var rA = "yValue";
    N.CONFIG_Y_VALUE = rA;
    var nA = "zValue";
    N.CONFIG_Z_VALUE = nA;
    var iA = "value";
    N.CONFIG_VALUE = iA;
    var oA = "xUnit";
    N.CONFIG_X_UNIT = oA;
    var aA = "yUnit";
    N.CONFIG_Y_UNIT = aA;
    var sA = "zUnit";
    N.CONFIG_Z_UNIT = sA;
    var uA = "unit";
    N.CONFIG_UNIT = uA;
    var cA = "transform";
    N.TRANSFORM = cA;
    var lA = "translateX";
    N.TRANSLATE_X = lA;
    var fA = "translateY";
    N.TRANSLATE_Y = fA;
    var dA = "translateZ";
    N.TRANSLATE_Z = dA;
    var pA = "translate3d";
    N.TRANSLATE_3D = pA;
    var vA = "scaleX";
    N.SCALE_X = vA;
    var gA = "scaleY";
    N.SCALE_Y = gA;
    var EA = "scaleZ";
    N.SCALE_Z = EA;
    var hA = "scale3d";
    N.SCALE_3D = hA;
    var _A = "rotateX";
    N.ROTATE_X = _A;
    var yA = "rotateY";
    N.ROTATE_Y = yA;
    var mA = "rotateZ";
    N.ROTATE_Z = mA;
    var IA = "skew";
    N.SKEW = IA;
    var TA = "skewX";
    N.SKEW_X = TA;
    var OA = "skewY";
    N.SKEW_Y = OA;
    var bA = "opacity";
    N.OPACITY = bA;
    var SA = "filter";
    N.FILTER = SA;
    var AA = "font-variation-settings";
    N.FONT_VARIATION_SETTINGS = AA;
    var wA = "width";
    N.WIDTH = wA;
    var RA = "height";
    N.HEIGHT = RA;
    var CA = "backgroundColor";
    N.BACKGROUND_COLOR = CA;
    var NA = "background";
    N.BACKGROUND = NA;
    var qA = "borderColor";
    N.BORDER_COLOR = qA;
    var PA = "color";
    N.COLOR = PA;
    var xA = "display";
    N.DISPLAY = xA;
    var LA = "flex";
    N.FLEX = LA;
    var DA = "willChange";
    N.WILL_CHANGE = DA;
    var MA = "AUTO";
    N.AUTO = MA;
    var FA = ",";
    N.COMMA_DELIMITER = FA;
    var GA = ":";
    N.COLON_DELIMITER = GA;
    var UA = "|";
    N.BAR_DELIMITER = UA;
    var XA = "CHILDREN";
    N.CHILDREN = XA;
    var VA = "IMMEDIATE_CHILDREN";
    N.IMMEDIATE_CHILDREN = VA;
    var WA = "SIBLINGS";
    N.SIBLINGS = WA;
    var BA = "PARENT";
    N.PARENT = BA;
    var HA = "preserve-3d";
    N.PRESERVE_3D = HA;
    var kA = "HTML_ELEMENT";
    N.HTML_ELEMENT = kA;
    var jA = "PLAIN_OBJECT";
    N.PLAIN_OBJECT = jA;
    var KA = "ABSTRACT_NODE";
    N.ABSTRACT_NODE = KA;
    var zA = "RENDER_TRANSFORM";
    N.RENDER_TRANSFORM = zA;
    var YA = "RENDER_GENERAL";
    N.RENDER_GENERAL = YA;
    var $A = "RENDER_STYLE";
    N.RENDER_STYLE = $A;
    var QA = "RENDER_PLUGIN";
    N.RENDER_PLUGIN = QA;
  });
  var We = u((we) => {
    "use strict";
    var hf = Dt().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    var Cn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
    var ea = df();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === ea[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = Jo();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === ta[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var ra = pf();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === ra[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var na = vf();
    Object.keys(na).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === na[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return na[e];
          },
        });
    });
    var ZA = hf(gf());
    we.IX2EngineActionTypes = ZA;
    var JA = hf(Ef());
    we.IX2EngineConstants = JA;
  });
  var _f = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixData = void 0;
    var ew = We(),
      { IX2_RAW_DATA_IMPORTED: tw } = ew.IX2EngineActionTypes,
      rw = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case tw:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Nn.ixData = rw;
  });
  var nr = u((LH, yt) => {
    function ia() {
      return (
        (yt.exports = ia =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (yt.exports.__esModule = !0),
        (yt.exports.default = yt.exports),
        ia.apply(this, arguments)
      );
    }
    (yt.exports = ia),
      (yt.exports.__esModule = !0),
      (yt.exports.default = yt.exports);
  });
  var ir = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var nw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Te.clone = Pn;
    Te.addLast = If;
    Te.addFirst = Tf;
    Te.removeLast = Of;
    Te.removeFirst = bf;
    Te.insert = Sf;
    Te.removeAt = Af;
    Te.replaceAt = wf;
    Te.getIn = xn;
    Te.set = Ln;
    Te.setIn = Dn;
    Te.update = Cf;
    Te.updateIn = Nf;
    Te.merge = qf;
    Te.mergeDeep = Pf;
    Te.mergeIn = xf;
    Te.omit = Lf;
    Te.addDefaults = Df;
    var yf = "INVALID_ARGS";
    function mf(e) {
      throw new Error(e);
    }
    function oa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var iw = {}.hasOwnProperty;
    function Pn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Be(e, t, r) {
      var n = r;
      n == null && mf(yf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var g = oa(f);
          if (g.length)
            for (var v = 0; v <= g.length; v++) {
              var h = g[v];
              if (!(e && n[h] !== void 0)) {
                var _ = f[h];
                t && qn(n[h]) && qn(_) && (_ = Be(e, t, n[h], _)),
                  !(_ === void 0 || _ === n[h]) &&
                    (o || ((o = !0), (n = Pn(n))), (n[h] = _));
              }
            }
        }
      }
      return n;
    }
    function qn(e) {
      var t = typeof e > "u" ? "undefined" : nw(e);
      return e != null && (t === "object" || t === "function");
    }
    function If(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Tf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Of(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function bf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Sf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Af(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function wf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function xn(e, t) {
      if ((!Array.isArray(t) && mf(yf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = Pn(o);
      return (i[t] = r), i;
    }
    function Rf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          qn(e) && qn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Rf(a, t, r, n + 1);
      }
      return Ln(e, i, o);
    }
    function Dn(e, t, r) {
      return t.length ? Rf(e, t, r, 0) : r;
    }
    function Cf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Ln(e, t, o);
    }
    function Nf(e, t, r) {
      var n = xn(e, t),
        o = r(n);
      return Dn(e, t, o);
    }
    function qf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Be(!1, !1, e, t, r, n, o, i);
    }
    function Pf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Be(!1, !0, e, t, r, n, o, i);
    }
    function xf(e, t, r, n, o, i, a) {
      var s = xn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          g = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        g[v - 7] = arguments[v];
      return (
        g.length
          ? (c = Be.call.apply(Be, [null, !1, !1, s, r, n, o, i, a].concat(g)))
          : (c = Be(!1, !1, s, r, n, o, i, a)),
        Dn(e, t, c)
      );
    }
    function Lf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (iw.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = oa(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Df(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Be(!0, !1, e, t, r, n, o, i);
    }
    var ow = {
      clone: Pn,
      addLast: If,
      addFirst: Tf,
      removeLast: Of,
      removeFirst: bf,
      insert: Sf,
      removeAt: Af,
      replaceAt: wf,
      getIn: xn,
      set: Ln,
      setIn: Dn,
      update: Cf,
      updateIn: Nf,
      merge: qf,
      mergeDeep: Pf,
      mergeIn: xf,
      omit: Lf,
      addDefaults: Df,
    };
    Te.default = ow;
  });
  var Ff = u((Mn) => {
    "use strict";
    var aw = Ze().default;
    Object.defineProperty(Mn, "__esModule", { value: !0 });
    Mn.ixRequest = void 0;
    var sw = aw(nr()),
      uw = We(),
      cw = ir(),
      {
        IX2_PREVIEW_REQUESTED: lw,
        IX2_PLAYBACK_REQUESTED: fw,
        IX2_STOP_REQUESTED: dw,
        IX2_CLEAR_REQUESTED: pw,
      } = uw.IX2EngineActionTypes,
      vw = { preview: {}, playback: {}, stop: {}, clear: {} },
      Mf = Object.create(null, {
        [lw]: { value: "preview" },
        [fw]: { value: "playback" },
        [dw]: { value: "stop" },
        [pw]: { value: "clear" },
      }),
      gw = (e = vw, t) => {
        if (t.type in Mf) {
          let r = [Mf[t.type]];
          return (0, cw.setIn)(e, [r], (0, sw.default)({}, t.payload));
        }
        return e;
      };
    Mn.ixRequest = gw;
  });
  var Uf = u((Fn) => {
    "use strict";
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixSession = void 0;
    var Ew = We(),
      lt = ir(),
      {
        IX2_SESSION_INITIALIZED: hw,
        IX2_SESSION_STARTED: _w,
        IX2_TEST_FRAME_RENDERED: yw,
        IX2_SESSION_STOPPED: mw,
        IX2_EVENT_LISTENER_ADDED: Iw,
        IX2_EVENT_STATE_CHANGED: Tw,
        IX2_ANIMATION_FRAME_CHANGED: Ow,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: bw,
        IX2_VIEWPORT_WIDTH_CHANGED: Sw,
        IX2_MEDIA_QUERIES_DEFINED: Aw,
      } = Ew.IX2EngineActionTypes,
      Gf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      ww = 20,
      Rw = (e = Gf, t) => {
        switch (t.type) {
          case hw: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, lt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case _w:
            return (0, lt.set)(e, "active", !0);
          case yw: {
            let {
              payload: { step: r = ww },
            } = t;
            return (0, lt.set)(e, "tick", e.tick + r);
          }
          case mw:
            return Gf;
          case Ow: {
            let {
              payload: { now: r },
            } = t;
            return (0, lt.set)(e, "tick", r);
          }
          case Iw: {
            let r = (0, lt.addLast)(e.eventListeners, t.payload);
            return (0, lt.set)(e, "eventListeners", r);
          }
          case Tw: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, lt.setIn)(e, ["eventState", r], n);
          }
          case bw: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, lt.setIn)(e, ["playbackState", r], n);
          }
          case Sw: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                i = s;
                break;
              }
            }
            return (0, lt.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case Aw:
            return (0, lt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Fn.ixSession = Rw;
  });
  var Vf = u((GH, Xf) => {
    function Cw() {
      (this.__data__ = []), (this.size = 0);
    }
    Xf.exports = Cw;
  });
  var Gn = u((UH, Wf) => {
    function Nw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Wf.exports = Nw;
  });
  var Fr = u((XH, Bf) => {
    var qw = Gn();
    function Pw(e, t) {
      for (var r = e.length; r--; ) if (qw(e[r][0], t)) return r;
      return -1;
    }
    Bf.exports = Pw;
  });
  var kf = u((VH, Hf) => {
    var xw = Fr(),
      Lw = Array.prototype,
      Dw = Lw.splice;
    function Mw(e) {
      var t = this.__data__,
        r = xw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Dw.call(t, r, 1), --this.size, !0;
    }
    Hf.exports = Mw;
  });
  var Kf = u((WH, jf) => {
    var Fw = Fr();
    function Gw(e) {
      var t = this.__data__,
        r = Fw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    jf.exports = Gw;
  });
  var Yf = u((BH, zf) => {
    var Uw = Fr();
    function Xw(e) {
      return Uw(this.__data__, e) > -1;
    }
    zf.exports = Xw;
  });
  var Qf = u((HH, $f) => {
    var Vw = Fr();
    function Ww(e, t) {
      var r = this.__data__,
        n = Vw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    $f.exports = Ww;
  });
  var Gr = u((kH, Zf) => {
    var Bw = Vf(),
      Hw = kf(),
      kw = Kf(),
      jw = Yf(),
      Kw = Qf();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = Bw;
    or.prototype.delete = Hw;
    or.prototype.get = kw;
    or.prototype.has = jw;
    or.prototype.set = Kw;
    Zf.exports = or;
  });
  var ed = u((jH, Jf) => {
    var zw = Gr();
    function Yw() {
      (this.__data__ = new zw()), (this.size = 0);
    }
    Jf.exports = Yw;
  });
  var rd = u((KH, td) => {
    function $w(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    td.exports = $w;
  });
  var id = u((zH, nd) => {
    function Qw(e) {
      return this.__data__.get(e);
    }
    nd.exports = Qw;
  });
  var ad = u((YH, od) => {
    function Zw(e) {
      return this.__data__.has(e);
    }
    od.exports = Zw;
  });
  var ft = u(($H, sd) => {
    function Jw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    sd.exports = Jw;
  });
  var aa = u((QH, ud) => {
    var e0 = St(),
      t0 = ft(),
      r0 = "[object AsyncFunction]",
      n0 = "[object Function]",
      i0 = "[object GeneratorFunction]",
      o0 = "[object Proxy]";
    function a0(e) {
      if (!t0(e)) return !1;
      var t = e0(e);
      return t == n0 || t == i0 || t == r0 || t == o0;
    }
    ud.exports = a0;
  });
  var ld = u((ZH, cd) => {
    var s0 = tt(),
      u0 = s0["__core-js_shared__"];
    cd.exports = u0;
  });
  var pd = u((JH, dd) => {
    var sa = ld(),
      fd = (function () {
        var e = /[^.]+$/.exec((sa && sa.keys && sa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function c0(e) {
      return !!fd && fd in e;
    }
    dd.exports = c0;
  });
  var ua = u((ek, vd) => {
    var l0 = Function.prototype,
      f0 = l0.toString;
    function d0(e) {
      if (e != null) {
        try {
          return f0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    vd.exports = d0;
  });
  var Ed = u((tk, gd) => {
    var p0 = aa(),
      v0 = pd(),
      g0 = ft(),
      E0 = ua(),
      h0 = /[\\^$.*+?()[\]{}|]/g,
      _0 = /^\[object .+?Constructor\]$/,
      y0 = Function.prototype,
      m0 = Object.prototype,
      I0 = y0.toString,
      T0 = m0.hasOwnProperty,
      O0 = RegExp(
        "^" +
          I0.call(T0)
            .replace(h0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function b0(e) {
      if (!g0(e) || v0(e)) return !1;
      var t = p0(e) ? O0 : _0;
      return t.test(E0(e));
    }
    gd.exports = b0;
  });
  var _d = u((rk, hd) => {
    function S0(e, t) {
      return e?.[t];
    }
    hd.exports = S0;
  });
  var At = u((nk, yd) => {
    var A0 = Ed(),
      w0 = _d();
    function R0(e, t) {
      var r = w0(e, t);
      return A0(r) ? r : void 0;
    }
    yd.exports = R0;
  });
  var Un = u((ik, md) => {
    var C0 = At(),
      N0 = tt(),
      q0 = C0(N0, "Map");
    md.exports = q0;
  });
  var Ur = u((ok, Id) => {
    var P0 = At(),
      x0 = P0(Object, "create");
    Id.exports = x0;
  });
  var bd = u((ak, Od) => {
    var Td = Ur();
    function L0() {
      (this.__data__ = Td ? Td(null) : {}), (this.size = 0);
    }
    Od.exports = L0;
  });
  var Ad = u((sk, Sd) => {
    function D0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Sd.exports = D0;
  });
  var Rd = u((uk, wd) => {
    var M0 = Ur(),
      F0 = "__lodash_hash_undefined__",
      G0 = Object.prototype,
      U0 = G0.hasOwnProperty;
    function X0(e) {
      var t = this.__data__;
      if (M0) {
        var r = t[e];
        return r === F0 ? void 0 : r;
      }
      return U0.call(t, e) ? t[e] : void 0;
    }
    wd.exports = X0;
  });
  var Nd = u((ck, Cd) => {
    var V0 = Ur(),
      W0 = Object.prototype,
      B0 = W0.hasOwnProperty;
    function H0(e) {
      var t = this.__data__;
      return V0 ? t[e] !== void 0 : B0.call(t, e);
    }
    Cd.exports = H0;
  });
  var Pd = u((lk, qd) => {
    var k0 = Ur(),
      j0 = "__lodash_hash_undefined__";
    function K0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = k0 && t === void 0 ? j0 : t),
        this
      );
    }
    qd.exports = K0;
  });
  var Ld = u((fk, xd) => {
    var z0 = bd(),
      Y0 = Ad(),
      $0 = Rd(),
      Q0 = Nd(),
      Z0 = Pd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = z0;
    ar.prototype.delete = Y0;
    ar.prototype.get = $0;
    ar.prototype.has = Q0;
    ar.prototype.set = Z0;
    xd.exports = ar;
  });
  var Fd = u((dk, Md) => {
    var Dd = Ld(),
      J0 = Gr(),
      eR = Un();
    function tR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Dd(),
          map: new (eR || J0)(),
          string: new Dd(),
        });
    }
    Md.exports = tR;
  });
  var Ud = u((pk, Gd) => {
    function rR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Gd.exports = rR;
  });
  var Xr = u((vk, Xd) => {
    var nR = Ud();
    function iR(e, t) {
      var r = e.__data__;
      return nR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Xd.exports = iR;
  });
  var Wd = u((gk, Vd) => {
    var oR = Xr();
    function aR(e) {
      var t = oR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Vd.exports = aR;
  });
  var Hd = u((Ek, Bd) => {
    var sR = Xr();
    function uR(e) {
      return sR(this, e).get(e);
    }
    Bd.exports = uR;
  });
  var jd = u((hk, kd) => {
    var cR = Xr();
    function lR(e) {
      return cR(this, e).has(e);
    }
    kd.exports = lR;
  });
  var zd = u((_k, Kd) => {
    var fR = Xr();
    function dR(e, t) {
      var r = fR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Kd.exports = dR;
  });
  var Xn = u((yk, Yd) => {
    var pR = Fd(),
      vR = Wd(),
      gR = Hd(),
      ER = jd(),
      hR = zd();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = pR;
    sr.prototype.delete = vR;
    sr.prototype.get = gR;
    sr.prototype.has = ER;
    sr.prototype.set = hR;
    Yd.exports = sr;
  });
  var Qd = u((mk, $d) => {
    var _R = Gr(),
      yR = Un(),
      mR = Xn(),
      IR = 200;
    function TR(e, t) {
      var r = this.__data__;
      if (r instanceof _R) {
        var n = r.__data__;
        if (!yR || n.length < IR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new mR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    $d.exports = TR;
  });
  var ca = u((Ik, Zd) => {
    var OR = Gr(),
      bR = ed(),
      SR = rd(),
      AR = id(),
      wR = ad(),
      RR = Qd();
    function ur(e) {
      var t = (this.__data__ = new OR(e));
      this.size = t.size;
    }
    ur.prototype.clear = bR;
    ur.prototype.delete = SR;
    ur.prototype.get = AR;
    ur.prototype.has = wR;
    ur.prototype.set = RR;
    Zd.exports = ur;
  });
  var ep = u((Tk, Jd) => {
    var CR = "__lodash_hash_undefined__";
    function NR(e) {
      return this.__data__.set(e, CR), this;
    }
    Jd.exports = NR;
  });
  var rp = u((Ok, tp) => {
    function qR(e) {
      return this.__data__.has(e);
    }
    tp.exports = qR;
  });
  var ip = u((bk, np) => {
    var PR = Xn(),
      xR = ep(),
      LR = rp();
    function Vn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new PR(); ++t < r; ) this.add(e[t]);
    }
    Vn.prototype.add = Vn.prototype.push = xR;
    Vn.prototype.has = LR;
    np.exports = Vn;
  });
  var ap = u((Sk, op) => {
    function DR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    op.exports = DR;
  });
  var up = u((Ak, sp) => {
    function MR(e, t) {
      return e.has(t);
    }
    sp.exports = MR;
  });
  var la = u((wk, cp) => {
    var FR = ip(),
      GR = ap(),
      UR = up(),
      XR = 1,
      VR = 2;
    function WR(e, t, r, n, o, i) {
      var a = r & XR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = i.get(e),
        g = i.get(t);
      if (f && g) return f == t && g == e;
      var v = -1,
        h = !0,
        _ = r & VR ? new FR() : void 0;
      for (i.set(e, t), i.set(t, e); ++v < s; ) {
        var b = e[v],
          S = t[v];
        if (n) var L = a ? n(S, b, v, t, e, i) : n(b, S, v, e, t, i);
        if (L !== void 0) {
          if (L) continue;
          h = !1;
          break;
        }
        if (_) {
          if (
            !GR(t, function (A, R) {
              if (!UR(_, R) && (b === A || o(b, A, r, n, i))) return _.push(R);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(b === S || o(b, S, r, n, i))) {
          h = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), h;
    }
    cp.exports = WR;
  });
  var fp = u((Rk, lp) => {
    var BR = tt(),
      HR = BR.Uint8Array;
    lp.exports = HR;
  });
  var pp = u((Ck, dp) => {
    function kR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    dp.exports = kR;
  });
  var gp = u((Nk, vp) => {
    function jR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    vp.exports = jR;
  });
  var mp = u((qk, yp) => {
    var Ep = Jt(),
      hp = fp(),
      KR = Gn(),
      zR = la(),
      YR = pp(),
      $R = gp(),
      QR = 1,
      ZR = 2,
      JR = "[object Boolean]",
      eC = "[object Date]",
      tC = "[object Error]",
      rC = "[object Map]",
      nC = "[object Number]",
      iC = "[object RegExp]",
      oC = "[object Set]",
      aC = "[object String]",
      sC = "[object Symbol]",
      uC = "[object ArrayBuffer]",
      cC = "[object DataView]",
      _p = Ep ? Ep.prototype : void 0,
      fa = _p ? _p.valueOf : void 0;
    function lC(e, t, r, n, o, i, a) {
      switch (r) {
        case cC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case uC:
          return !(e.byteLength != t.byteLength || !i(new hp(e), new hp(t)));
        case JR:
        case eC:
        case nC:
          return KR(+e, +t);
        case tC:
          return e.name == t.name && e.message == t.message;
        case iC:
        case aC:
          return e == t + "";
        case rC:
          var s = YR;
        case oC:
          var c = n & QR;
          if ((s || (s = $R), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= ZR), a.set(e, t);
          var g = zR(s(e), s(t), n, o, i, a);
          return a.delete(e), g;
        case sC:
          if (fa) return fa.call(e) == fa.call(t);
      }
      return !1;
    }
    yp.exports = lC;
  });
  var Wn = u((Pk, Ip) => {
    function fC(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Ip.exports = fC;
  });
  var qe = u((xk, Tp) => {
    var dC = Array.isArray;
    Tp.exports = dC;
  });
  var da = u((Lk, Op) => {
    var pC = Wn(),
      vC = qe();
    function gC(e, t, r) {
      var n = t(e);
      return vC(e) ? n : pC(n, r(e));
    }
    Op.exports = gC;
  });
  var Sp = u((Dk, bp) => {
    function EC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    bp.exports = EC;
  });
  var pa = u((Mk, Ap) => {
    function hC() {
      return [];
    }
    Ap.exports = hC;
  });
  var va = u((Fk, Rp) => {
    var _C = Sp(),
      yC = pa(),
      mC = Object.prototype,
      IC = mC.propertyIsEnumerable,
      wp = Object.getOwnPropertySymbols,
      TC = wp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                _C(wp(e), function (t) {
                  return IC.call(e, t);
                }));
          }
        : yC;
    Rp.exports = TC;
  });
  var Np = u((Gk, Cp) => {
    function OC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Cp.exports = OC;
  });
  var Pp = u((Uk, qp) => {
    var bC = St(),
      SC = _t(),
      AC = "[object Arguments]";
    function wC(e) {
      return SC(e) && bC(e) == AC;
    }
    qp.exports = wC;
  });
  var Vr = u((Xk, Dp) => {
    var xp = Pp(),
      RC = _t(),
      Lp = Object.prototype,
      CC = Lp.hasOwnProperty,
      NC = Lp.propertyIsEnumerable,
      qC = xp(
        (function () {
          return arguments;
        })()
      )
        ? xp
        : function (e) {
            return RC(e) && CC.call(e, "callee") && !NC.call(e, "callee");
          };
    Dp.exports = qC;
  });
  var Fp = u((Vk, Mp) => {
    function PC() {
      return !1;
    }
    Mp.exports = PC;
  });
  var Bn = u((Wr, cr) => {
    var xC = tt(),
      LC = Fp(),
      Xp = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
      Gp = Xp && typeof cr == "object" && cr && !cr.nodeType && cr,
      DC = Gp && Gp.exports === Xp,
      Up = DC ? xC.Buffer : void 0,
      MC = Up ? Up.isBuffer : void 0,
      FC = MC || LC;
    cr.exports = FC;
  });
  var Hn = u((Wk, Vp) => {
    var GC = 9007199254740991,
      UC = /^(?:0|[1-9]\d*)$/;
    function XC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? GC),
        !!t &&
          (r == "number" || (r != "symbol" && UC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Vp.exports = XC;
  });
  var kn = u((Bk, Wp) => {
    var VC = 9007199254740991;
    function WC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VC;
    }
    Wp.exports = WC;
  });
  var Hp = u((Hk, Bp) => {
    var BC = St(),
      HC = kn(),
      kC = _t(),
      jC = "[object Arguments]",
      KC = "[object Array]",
      zC = "[object Boolean]",
      YC = "[object Date]",
      $C = "[object Error]",
      QC = "[object Function]",
      ZC = "[object Map]",
      JC = "[object Number]",
      eN = "[object Object]",
      tN = "[object RegExp]",
      rN = "[object Set]",
      nN = "[object String]",
      iN = "[object WeakMap]",
      oN = "[object ArrayBuffer]",
      aN = "[object DataView]",
      sN = "[object Float32Array]",
      uN = "[object Float64Array]",
      cN = "[object Int8Array]",
      lN = "[object Int16Array]",
      fN = "[object Int32Array]",
      dN = "[object Uint8Array]",
      pN = "[object Uint8ClampedArray]",
      vN = "[object Uint16Array]",
      gN = "[object Uint32Array]",
      ye = {};
    ye[sN] =
      ye[uN] =
      ye[cN] =
      ye[lN] =
      ye[fN] =
      ye[dN] =
      ye[pN] =
      ye[vN] =
      ye[gN] =
        !0;
    ye[jC] =
      ye[KC] =
      ye[oN] =
      ye[zC] =
      ye[aN] =
      ye[YC] =
      ye[$C] =
      ye[QC] =
      ye[ZC] =
      ye[JC] =
      ye[eN] =
      ye[tN] =
      ye[rN] =
      ye[nN] =
      ye[iN] =
        !1;
    function EN(e) {
      return kC(e) && HC(e.length) && !!ye[BC(e)];
    }
    Bp.exports = EN;
  });
  var jp = u((kk, kp) => {
    function hN(e) {
      return function (t) {
        return e(t);
      };
    }
    kp.exports = hN;
  });
  var zp = u((Br, lr) => {
    var _N = Fo(),
      Kp = typeof Br == "object" && Br && !Br.nodeType && Br,
      Hr = Kp && typeof lr == "object" && lr && !lr.nodeType && lr,
      yN = Hr && Hr.exports === Kp,
      ga = yN && _N.process,
      mN = (function () {
        try {
          var e = Hr && Hr.require && Hr.require("util").types;
          return e || (ga && ga.binding && ga.binding("util"));
        } catch {}
      })();
    lr.exports = mN;
  });
  var jn = u((jk, Qp) => {
    var IN = Hp(),
      TN = jp(),
      Yp = zp(),
      $p = Yp && Yp.isTypedArray,
      ON = $p ? TN($p) : IN;
    Qp.exports = ON;
  });
  var Ea = u((Kk, Zp) => {
    var bN = Np(),
      SN = Vr(),
      AN = qe(),
      wN = Bn(),
      RN = Hn(),
      CN = jn(),
      NN = Object.prototype,
      qN = NN.hasOwnProperty;
    function PN(e, t) {
      var r = AN(e),
        n = !r && SN(e),
        o = !r && !n && wN(e),
        i = !r && !n && !o && CN(e),
        a = r || n || o || i,
        s = a ? bN(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || qN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              RN(f, c))
          ) &&
          s.push(f);
      return s;
    }
    Zp.exports = PN;
  });
  var Kn = u((zk, Jp) => {
    var xN = Object.prototype;
    function LN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || xN;
      return e === r;
    }
    Jp.exports = LN;
  });
  var tv = u((Yk, ev) => {
    var DN = Go(),
      MN = DN(Object.keys, Object);
    ev.exports = MN;
  });
  var zn = u(($k, rv) => {
    var FN = Kn(),
      GN = tv(),
      UN = Object.prototype,
      XN = UN.hasOwnProperty;
    function VN(e) {
      if (!FN(e)) return GN(e);
      var t = [];
      for (var r in Object(e)) XN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    rv.exports = VN;
  });
  var Ut = u((Qk, nv) => {
    var WN = aa(),
      BN = kn();
    function HN(e) {
      return e != null && BN(e.length) && !WN(e);
    }
    nv.exports = HN;
  });
  var kr = u((Zk, iv) => {
    var kN = Ea(),
      jN = zn(),
      KN = Ut();
    function zN(e) {
      return KN(e) ? kN(e) : jN(e);
    }
    iv.exports = zN;
  });
  var av = u((Jk, ov) => {
    var YN = da(),
      $N = va(),
      QN = kr();
    function ZN(e) {
      return YN(e, QN, $N);
    }
    ov.exports = ZN;
  });
  var cv = u((e5, uv) => {
    var sv = av(),
      JN = 1,
      eq = Object.prototype,
      tq = eq.hasOwnProperty;
    function rq(e, t, r, n, o, i) {
      var a = r & JN,
        s = sv(e),
        c = s.length,
        f = sv(t),
        g = f.length;
      if (c != g && !a) return !1;
      for (var v = c; v--; ) {
        var h = s[v];
        if (!(a ? h in t : tq.call(t, h))) return !1;
      }
      var _ = i.get(e),
        b = i.get(t);
      if (_ && b) return _ == t && b == e;
      var S = !0;
      i.set(e, t), i.set(t, e);
      for (var L = a; ++v < c; ) {
        h = s[v];
        var A = e[h],
          R = t[h];
        if (n) var T = a ? n(R, A, h, t, e, i) : n(A, R, h, e, t, i);
        if (!(T === void 0 ? A === R || o(A, R, r, n, i) : T)) {
          S = !1;
          break;
        }
        L || (L = h == "constructor");
      }
      if (S && !L) {
        var q = e.constructor,
          P = t.constructor;
        q != P &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof q == "function" &&
            q instanceof q &&
            typeof P == "function" &&
            P instanceof P
          ) &&
          (S = !1);
      }
      return i.delete(e), i.delete(t), S;
    }
    uv.exports = rq;
  });
  var fv = u((t5, lv) => {
    var nq = At(),
      iq = tt(),
      oq = nq(iq, "DataView");
    lv.exports = oq;
  });
  var pv = u((r5, dv) => {
    var aq = At(),
      sq = tt(),
      uq = aq(sq, "Promise");
    dv.exports = uq;
  });
  var gv = u((n5, vv) => {
    var cq = At(),
      lq = tt(),
      fq = cq(lq, "Set");
    vv.exports = fq;
  });
  var ha = u((i5, Ev) => {
    var dq = At(),
      pq = tt(),
      vq = dq(pq, "WeakMap");
    Ev.exports = vq;
  });
  var Yn = u((o5, Ov) => {
    var _a = fv(),
      ya = Un(),
      ma = pv(),
      Ia = gv(),
      Ta = ha(),
      Tv = St(),
      fr = ua(),
      hv = "[object Map]",
      gq = "[object Object]",
      _v = "[object Promise]",
      yv = "[object Set]",
      mv = "[object WeakMap]",
      Iv = "[object DataView]",
      Eq = fr(_a),
      hq = fr(ya),
      _q = fr(ma),
      yq = fr(Ia),
      mq = fr(Ta),
      Xt = Tv;
    ((_a && Xt(new _a(new ArrayBuffer(1))) != Iv) ||
      (ya && Xt(new ya()) != hv) ||
      (ma && Xt(ma.resolve()) != _v) ||
      (Ia && Xt(new Ia()) != yv) ||
      (Ta && Xt(new Ta()) != mv)) &&
      (Xt = function (e) {
        var t = Tv(e),
          r = t == gq ? e.constructor : void 0,
          n = r ? fr(r) : "";
        if (n)
          switch (n) {
            case Eq:
              return Iv;
            case hq:
              return hv;
            case _q:
              return _v;
            case yq:
              return yv;
            case mq:
              return mv;
          }
        return t;
      });
    Ov.exports = Xt;
  });
  var qv = u((a5, Nv) => {
    var Oa = ca(),
      Iq = la(),
      Tq = mp(),
      Oq = cv(),
      bv = Yn(),
      Sv = qe(),
      Av = Bn(),
      bq = jn(),
      Sq = 1,
      wv = "[object Arguments]",
      Rv = "[object Array]",
      $n = "[object Object]",
      Aq = Object.prototype,
      Cv = Aq.hasOwnProperty;
    function wq(e, t, r, n, o, i) {
      var a = Sv(e),
        s = Sv(t),
        c = a ? Rv : bv(e),
        f = s ? Rv : bv(t);
      (c = c == wv ? $n : c), (f = f == wv ? $n : f);
      var g = c == $n,
        v = f == $n,
        h = c == f;
      if (h && Av(e)) {
        if (!Av(t)) return !1;
        (a = !0), (g = !1);
      }
      if (h && !g)
        return (
          i || (i = new Oa()),
          a || bq(e) ? Iq(e, t, r, n, o, i) : Tq(e, t, c, r, n, o, i)
        );
      if (!(r & Sq)) {
        var _ = g && Cv.call(e, "__wrapped__"),
          b = v && Cv.call(t, "__wrapped__");
        if (_ || b) {
          var S = _ ? e.value() : e,
            L = b ? t.value() : t;
          return i || (i = new Oa()), o(S, L, r, n, i);
        }
      }
      return h ? (i || (i = new Oa()), Oq(e, t, r, n, o, i)) : !1;
    }
    Nv.exports = wq;
  });
  var ba = u((s5, Lv) => {
    var Rq = qv(),
      Pv = _t();
    function xv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Pv(e) && !Pv(t))
        ? e !== e && t !== t
        : Rq(e, t, r, n, xv, o);
    }
    Lv.exports = xv;
  });
  var Mv = u((u5, Dv) => {
    var Cq = ca(),
      Nq = ba(),
      qq = 1,
      Pq = 2;
    function xq(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var c = s[0],
          f = e[c],
          g = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var v = new Cq();
          if (n) var h = n(f, g, c, e, t, v);
          if (!(h === void 0 ? Nq(g, f, qq | Pq, n, v) : h)) return !1;
        }
      }
      return !0;
    }
    Dv.exports = xq;
  });
  var Sa = u((c5, Fv) => {
    var Lq = ft();
    function Dq(e) {
      return e === e && !Lq(e);
    }
    Fv.exports = Dq;
  });
  var Uv = u((l5, Gv) => {
    var Mq = Sa(),
      Fq = kr();
    function Gq(e) {
      for (var t = Fq(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Mq(o)];
      }
      return t;
    }
    Gv.exports = Gq;
  });
  var Aa = u((f5, Xv) => {
    function Uq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Xv.exports = Uq;
  });
  var Wv = u((d5, Vv) => {
    var Xq = Mv(),
      Vq = Uv(),
      Wq = Aa();
    function Bq(e) {
      var t = Vq(e);
      return t.length == 1 && t[0][2]
        ? Wq(t[0][0], t[0][1])
        : function (r) {
            return r === e || Xq(r, e, t);
          };
    }
    Vv.exports = Bq;
  });
  var jr = u((p5, Bv) => {
    var Hq = St(),
      kq = _t(),
      jq = "[object Symbol]";
    function Kq(e) {
      return typeof e == "symbol" || (kq(e) && Hq(e) == jq);
    }
    Bv.exports = Kq;
  });
  var Qn = u((v5, Hv) => {
    var zq = qe(),
      Yq = jr(),
      $q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Qq = /^\w*$/;
    function Zq(e, t) {
      if (zq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Yq(e)
        ? !0
        : Qq.test(e) || !$q.test(e) || (t != null && e in Object(t));
    }
    Hv.exports = Zq;
  });
  var Kv = u((g5, jv) => {
    var kv = Xn(),
      Jq = "Expected a function";
    function wa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Jq);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (wa.Cache || kv)()), r;
    }
    wa.Cache = kv;
    jv.exports = wa;
  });
  var Yv = u((E5, zv) => {
    var eP = Kv(),
      tP = 500;
    function rP(e) {
      var t = eP(e, function (n) {
          return r.size === tP && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    zv.exports = rP;
  });
  var Qv = u((h5, $v) => {
    var nP = Yv(),
      iP =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oP = /\\(\\)?/g,
      aP = nP(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(iP, function (r, n, o, i) {
            t.push(o ? i.replace(oP, "$1") : n || r);
          }),
          t
        );
      });
    $v.exports = aP;
  });
  var Ra = u((_5, Zv) => {
    function sP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    Zv.exports = sP;
  });
  var ig = u((y5, ng) => {
    var Jv = Jt(),
      uP = Ra(),
      cP = qe(),
      lP = jr(),
      fP = 1 / 0,
      eg = Jv ? Jv.prototype : void 0,
      tg = eg ? eg.toString : void 0;
    function rg(e) {
      if (typeof e == "string") return e;
      if (cP(e)) return uP(e, rg) + "";
      if (lP(e)) return tg ? tg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -fP ? "-0" : t;
    }
    ng.exports = rg;
  });
  var ag = u((m5, og) => {
    var dP = ig();
    function pP(e) {
      return e == null ? "" : dP(e);
    }
    og.exports = pP;
  });
  var Kr = u((I5, sg) => {
    var vP = qe(),
      gP = Qn(),
      EP = Qv(),
      hP = ag();
    function _P(e, t) {
      return vP(e) ? e : gP(e, t) ? [e] : EP(hP(e));
    }
    sg.exports = _P;
  });
  var dr = u((T5, ug) => {
    var yP = jr(),
      mP = 1 / 0;
    function IP(e) {
      if (typeof e == "string" || yP(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -mP ? "-0" : t;
    }
    ug.exports = IP;
  });
  var Zn = u((O5, cg) => {
    var TP = Kr(),
      OP = dr();
    function bP(e, t) {
      t = TP(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[OP(t[r++])];
      return r && r == n ? e : void 0;
    }
    cg.exports = bP;
  });
  var Jn = u((b5, lg) => {
    var SP = Zn();
    function AP(e, t, r) {
      var n = e == null ? void 0 : SP(e, t);
      return n === void 0 ? r : n;
    }
    lg.exports = AP;
  });
  var dg = u((S5, fg) => {
    function wP(e, t) {
      return e != null && t in Object(e);
    }
    fg.exports = wP;
  });
  var vg = u((A5, pg) => {
    var RP = Kr(),
      CP = Vr(),
      NP = qe(),
      qP = Hn(),
      PP = kn(),
      xP = dr();
    function LP(e, t, r) {
      t = RP(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = xP(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && PP(o) && qP(a, o) && (NP(e) || CP(e)));
    }
    pg.exports = LP;
  });
  var Eg = u((w5, gg) => {
    var DP = dg(),
      MP = vg();
    function FP(e, t) {
      return e != null && MP(e, t, DP);
    }
    gg.exports = FP;
  });
  var _g = u((R5, hg) => {
    var GP = ba(),
      UP = Jn(),
      XP = Eg(),
      VP = Qn(),
      WP = Sa(),
      BP = Aa(),
      HP = dr(),
      kP = 1,
      jP = 2;
    function KP(e, t) {
      return VP(e) && WP(t)
        ? BP(HP(e), t)
        : function (r) {
            var n = UP(r, e);
            return n === void 0 && n === t ? XP(r, e) : GP(t, n, kP | jP);
          };
    }
    hg.exports = KP;
  });
  var ei = u((C5, yg) => {
    function zP(e) {
      return e;
    }
    yg.exports = zP;
  });
  var Ca = u((N5, mg) => {
    function YP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    mg.exports = YP;
  });
  var Tg = u((q5, Ig) => {
    var $P = Zn();
    function QP(e) {
      return function (t) {
        return $P(t, e);
      };
    }
    Ig.exports = QP;
  });
  var bg = u((P5, Og) => {
    var ZP = Ca(),
      JP = Tg(),
      ex = Qn(),
      tx = dr();
    function rx(e) {
      return ex(e) ? ZP(tx(e)) : JP(e);
    }
    Og.exports = rx;
  });
  var wt = u((x5, Sg) => {
    var nx = Wv(),
      ix = _g(),
      ox = ei(),
      ax = qe(),
      sx = bg();
    function ux(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? ox
        : typeof e == "object"
        ? ax(e)
          ? ix(e[0], e[1])
          : nx(e)
        : sx(e);
    }
    Sg.exports = ux;
  });
  var Na = u((L5, Ag) => {
    var cx = wt(),
      lx = Ut(),
      fx = kr();
    function dx(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!lx(t)) {
          var i = cx(r, 3);
          (t = fx(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Ag.exports = dx;
  });
  var qa = u((D5, wg) => {
    function px(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    wg.exports = px;
  });
  var Cg = u((M5, Rg) => {
    var vx = /\s/;
    function gx(e) {
      for (var t = e.length; t-- && vx.test(e.charAt(t)); );
      return t;
    }
    Rg.exports = gx;
  });
  var qg = u((F5, Ng) => {
    var Ex = Cg(),
      hx = /^\s+/;
    function _x(e) {
      return e && e.slice(0, Ex(e) + 1).replace(hx, "");
    }
    Ng.exports = _x;
  });
  var ti = u((G5, Lg) => {
    var yx = qg(),
      Pg = ft(),
      mx = jr(),
      xg = 0 / 0,
      Ix = /^[-+]0x[0-9a-f]+$/i,
      Tx = /^0b[01]+$/i,
      Ox = /^0o[0-7]+$/i,
      bx = parseInt;
    function Sx(e) {
      if (typeof e == "number") return e;
      if (mx(e)) return xg;
      if (Pg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Pg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = yx(e);
      var r = Tx.test(e);
      return r || Ox.test(e) ? bx(e.slice(2), r ? 2 : 8) : Ix.test(e) ? xg : +e;
    }
    Lg.exports = Sx;
  });
  var Fg = u((U5, Mg) => {
    var Ax = ti(),
      Dg = 1 / 0,
      wx = 17976931348623157e292;
    function Rx(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = Ax(e)), e === Dg || e === -Dg)) {
        var t = e < 0 ? -1 : 1;
        return t * wx;
      }
      return e === e ? e : 0;
    }
    Mg.exports = Rx;
  });
  var Pa = u((X5, Gg) => {
    var Cx = Fg();
    function Nx(e) {
      var t = Cx(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Gg.exports = Nx;
  });
  var Xg = u((V5, Ug) => {
    var qx = qa(),
      Px = wt(),
      xx = Pa(),
      Lx = Math.max;
    function Dx(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : xx(r);
      return o < 0 && (o = Lx(n + o, 0)), qx(e, Px(t, 3), o);
    }
    Ug.exports = Dx;
  });
  var xa = u((W5, Vg) => {
    var Mx = Na(),
      Fx = Xg(),
      Gx = Mx(Fx);
    Vg.exports = Gx;
  });
  var ni = u((Ge) => {
    "use strict";
    var Ux = Ze().default;
    Object.defineProperty(Ge, "__esModule", { value: !0 });
    Ge.withBrowser =
      Ge.TRANSFORM_STYLE_PREFIXED =
      Ge.TRANSFORM_PREFIXED =
      Ge.IS_BROWSER_ENV =
      Ge.FLEX_PREFIXED =
      Ge.ELEMENT_MATCHES =
        void 0;
    var Xx = Ux(xa()),
      Bg = typeof window < "u";
    Ge.IS_BROWSER_ENV = Bg;
    var ri = (e, t) => (Bg ? e() : t);
    Ge.withBrowser = ri;
    var Vx = ri(() =>
      (0, Xx.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Ge.ELEMENT_MATCHES = Vx;
    var Wx = ri(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Ge.FLEX_PREFIXED = Wx;
    var Hg = ri(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Ge.TRANSFORM_PREFIXED = Hg;
    var Wg = Hg.split("transform")[0],
      Bx = Wg ? Wg + "TransformStyle" : "transformStyle";
    Ge.TRANSFORM_STYLE_PREFIXED = Bx;
  });
  var La = u((H5, Yg) => {
    var Hx = 4,
      kx = 0.001,
      jx = 1e-7,
      Kx = 10,
      zr = 11,
      ii = 1 / (zr - 1),
      zx = typeof Float32Array == "function";
    function kg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function jg(e, t) {
      return 3 * t - 6 * e;
    }
    function Kg(e) {
      return 3 * e;
    }
    function oi(e, t, r) {
      return ((kg(t, r) * e + jg(t, r)) * e + Kg(t)) * e;
    }
    function zg(e, t, r) {
      return 3 * kg(t, r) * e * e + 2 * jg(t, r) * e + Kg(t);
    }
    function Yx(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = oi(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > jx && ++s < Kx);
      return a;
    }
    function $x(e, t, r, n) {
      for (var o = 0; o < Hx; ++o) {
        var i = zg(t, r, n);
        if (i === 0) return t;
        var a = oi(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    Yg.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = zx ? new Float32Array(zr) : new Array(zr);
      if (t !== r || n !== o)
        for (var a = 0; a < zr; ++a) i[a] = oi(a * ii, t, n);
      function s(c) {
        for (var f = 0, g = 1, v = zr - 1; g !== v && i[g] <= c; ++g) f += ii;
        --g;
        var h = (c - i[g]) / (i[g + 1] - i[g]),
          _ = f + h * ii,
          b = zg(_, t, n);
        return b >= kx ? $x(c, _, t, n) : b === 0 ? _ : Yx(c, f, f + ii, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : oi(s(f), r, o);
      };
    };
  });
  var Da = u((ae) => {
    "use strict";
    var Qx = Ze().default;
    Object.defineProperty(ae, "__esModule", { value: !0 });
    ae.bounce = xL;
    ae.bouncePast = LL;
    ae.easeOut = ae.easeInOut = ae.easeIn = ae.ease = void 0;
    ae.inBack = bL;
    ae.inCirc = mL;
    ae.inCubic = oL;
    ae.inElastic = wL;
    ae.inExpo = hL;
    ae.inOutBack = AL;
    ae.inOutCirc = TL;
    ae.inOutCubic = sL;
    ae.inOutElastic = CL;
    ae.inOutExpo = yL;
    ae.inOutQuad = iL;
    ae.inOutQuart = lL;
    ae.inOutQuint = pL;
    ae.inOutSine = EL;
    ae.inQuad = rL;
    ae.inQuart = uL;
    ae.inQuint = fL;
    ae.inSine = vL;
    ae.outBack = SL;
    ae.outBounce = OL;
    ae.outCirc = IL;
    ae.outCubic = aL;
    ae.outElastic = RL;
    ae.outExpo = _L;
    ae.outQuad = nL;
    ae.outQuart = cL;
    ae.outQuint = dL;
    ae.outSine = gL;
    ae.swingFrom = qL;
    ae.swingFromTo = NL;
    ae.swingTo = PL;
    var ai = Qx(La()),
      mt = 1.70158,
      Zx = (0, ai.default)(0.25, 0.1, 0.25, 1);
    ae.ease = Zx;
    var Jx = (0, ai.default)(0.42, 0, 1, 1);
    ae.easeIn = Jx;
    var eL = (0, ai.default)(0, 0, 0.58, 1);
    ae.easeOut = eL;
    var tL = (0, ai.default)(0.42, 0, 0.58, 1);
    ae.easeInOut = tL;
    function rL(e) {
      return Math.pow(e, 2);
    }
    function nL(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function iL(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function oL(e) {
      return Math.pow(e, 3);
    }
    function aL(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function sL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function uL(e) {
      return Math.pow(e, 4);
    }
    function cL(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function lL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function fL(e) {
      return Math.pow(e, 5);
    }
    function dL(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function pL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function vL(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function gL(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function EL(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function hL(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function _L(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function yL(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function mL(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function IL(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function TL(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function OL(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function bL(e) {
      let t = mt;
      return e * e * ((t + 1) * e - t);
    }
    function SL(e) {
      let t = mt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function AL(e) {
      let t = mt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function wL(e) {
      let t = mt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function RL(e) {
      let t = mt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function CL(e) {
      let t = mt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function NL(e) {
      let t = mt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function qL(e) {
      let t = mt;
      return e * e * ((t + 1) * e - t);
    }
    function PL(e) {
      let t = mt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function xL(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function LL(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Fa = u((Yr) => {
    "use strict";
    var DL = Ze().default,
      ML = Dt().default;
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    Yr.applyEasing = UL;
    Yr.createBezierEasing = GL;
    Yr.optimizeFloat = Ma;
    var $g = ML(Da()),
      FL = DL(La());
    function Ma(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function GL(e) {
      return (0, FL.default)(...e);
    }
    function UL(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Ma(r ? (t > 0 ? r(t) : t) : t > 0 && e && $g[e] ? $g[e](t) : t);
    }
  });
  var eE = u((pr) => {
    "use strict";
    Object.defineProperty(pr, "__esModule", { value: !0 });
    pr.createElementState = Jg;
    pr.ixElements = void 0;
    pr.mergeActionState = Ga;
    var si = ir(),
      Zg = We(),
      {
        HTML_ELEMENT: K5,
        PLAIN_OBJECT: XL,
        ABSTRACT_NODE: z5,
        CONFIG_X_VALUE: VL,
        CONFIG_Y_VALUE: WL,
        CONFIG_Z_VALUE: BL,
        CONFIG_VALUE: HL,
        CONFIG_X_UNIT: kL,
        CONFIG_Y_UNIT: jL,
        CONFIG_Z_UNIT: KL,
        CONFIG_UNIT: zL,
      } = Zg.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: YL,
        IX2_INSTANCE_ADDED: $L,
        IX2_ELEMENT_STATE_CHANGED: QL,
      } = Zg.IX2EngineActionTypes,
      Qg = {},
      ZL = "refState",
      JL = (e = Qg, t = {}) => {
        switch (t.type) {
          case YL:
            return Qg;
          case $L: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, si.getIn)(c, [r, n]) !== n && (c = Jg(c, n, a, r, i)),
              Ga(c, r, s, o, i)
            );
          }
          case QL: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Ga(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    pr.ixElements = JL;
    function Jg(e, t, r, n, o) {
      let i =
        r === XL ? (0, si.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, si.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Ga(e, t, r, n, o) {
      let i = tD(o),
        a = [t, ZL, r];
      return (0, si.mergeIn)(e, a, n, i);
    }
    var eD = [
      [VL, kL],
      [WL, jL],
      [BL, KL],
      [HL, zL],
    ];
    function tD(e) {
      let { config: t } = e;
      return eD.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          s = t[i];
        return a != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var tE = u((Pe) => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.renderPlugin =
      Pe.getPluginOrigin =
      Pe.getPluginDuration =
      Pe.getPluginDestination =
      Pe.getPluginConfig =
      Pe.createPluginInstance =
      Pe.clearPlugin =
        void 0;
    var rD = (e) => e.value;
    Pe.getPluginConfig = rD;
    var nD = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Pe.getPluginDuration = nD;
    var iD = (e) => e || { value: 0 };
    Pe.getPluginOrigin = iD;
    var oD = (e) => ({ value: e.value });
    Pe.getPluginDestination = oD;
    var aD = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Pe.createPluginInstance = aD;
    var sD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Pe.renderPlugin = sD;
    var uD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Pe.clearPlugin = uD;
  });
  var nE = u((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var cD = (e) => document.querySelector(`[data-w-id="${e}"]`),
      lD = () => window.Webflow.require("spline"),
      fD = (e, t) => e.filter((r) => !t.includes(r)),
      dD = (e, t) => e.value[t];
    xe.getPluginConfig = dD;
    var pD = () => null;
    xe.getPluginDuration = pD;
    var rE = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      vD = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = fD(n, i);
          return a.length ? a.reduce((c, f) => ((c[f] = rE[f]), c), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = rE[a]), i), {});
      };
    xe.getPluginOrigin = vD;
    var gD = (e) => e.value;
    xe.getPluginDestination = gD;
    var ED = (e, t) => {
      var r, n;
      let o =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return o ? cD(o) : null;
    };
    xe.createPluginInstance = ED;
    var hD = (e, t, r) => {
      let n = lD().getInstance(e),
        o = r.config.target.objectId;
      if (!n || !o) return;
      let i = n.spline.findObjectById(o);
      if (!i) return;
      let { PLUGIN_SPLINE: a } = t;
      a.positionX != null && (i.position.x = a.positionX),
        a.positionY != null && (i.position.y = a.positionY),
        a.positionZ != null && (i.position.z = a.positionZ),
        a.rotationX != null && (i.rotation.x = a.rotationX),
        a.rotationY != null && (i.rotation.y = a.rotationY),
        a.rotationZ != null && (i.rotation.z = a.rotationZ),
        a.scaleX != null && (i.scale.x = a.scaleX),
        a.scaleY != null && (i.scale.y = a.scaleY),
        a.scaleZ != null && (i.scale.z = a.scaleZ);
    };
    xe.renderPlugin = hD;
    var _D = () => null;
    xe.clearPlugin = _D;
  });
  var sE = u((ui) => {
    "use strict";
    var aE = Dt().default,
      yD = Ze().default;
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.pluginMethodMap = void 0;
    var iE = yD(nr()),
      oE = We(),
      mD = aE(tE()),
      ID = aE(nE()),
      TD = new Map([
        [oE.ActionTypeConsts.PLUGIN_LOTTIE, (0, iE.default)({}, mD)],
        [oE.ActionTypeConsts.PLUGIN_SPLINE, (0, iE.default)({}, ID)],
      ]);
    ui.pluginMethodMap = TD;
  });
  var Ua = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = bD;
    Ce.renderPlugin = void 0;
    var OD = ni(),
      uE = sE();
    function bD(e) {
      return uE.pluginMethodMap.has(e);
    }
    var Vt = (e) => (t) => {
        if (!OD.IS_BROWSER_ENV) return () => null;
        let r = uE.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      SD = Vt("getPluginConfig");
    Ce.getPluginConfig = SD;
    var AD = Vt("getPluginOrigin");
    Ce.getPluginOrigin = AD;
    var wD = Vt("getPluginDuration");
    Ce.getPluginDuration = wD;
    var RD = Vt("getPluginDestination");
    Ce.getPluginDestination = RD;
    var CD = Vt("createPluginInstance");
    Ce.createPluginInstance = CD;
    var ND = Vt("renderPlugin");
    Ce.renderPlugin = ND;
    var qD = Vt("clearPlugin");
    Ce.clearPlugin = qD;
  });
  var lE = u((ej, cE) => {
    function PD(e, t) {
      return e == null || e !== e ? t : e;
    }
    cE.exports = PD;
  });
  var dE = u((tj, fE) => {
    function xD(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    fE.exports = xD;
  });
  var vE = u((rj, pE) => {
    function LD(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    pE.exports = LD;
  });
  var EE = u((nj, gE) => {
    var DD = vE(),
      MD = DD();
    gE.exports = MD;
  });
  var Xa = u((ij, hE) => {
    var FD = EE(),
      GD = kr();
    function UD(e, t) {
      return e && FD(e, t, GD);
    }
    hE.exports = UD;
  });
  var yE = u((oj, _E) => {
    var XD = Ut();
    function VD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!XD(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    _E.exports = VD;
  });
  var Va = u((aj, mE) => {
    var WD = Xa(),
      BD = yE(),
      HD = BD(WD);
    mE.exports = HD;
  });
  var TE = u((sj, IE) => {
    function kD(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    IE.exports = kD;
  });
  var bE = u((uj, OE) => {
    var jD = dE(),
      KD = Va(),
      zD = wt(),
      YD = TE(),
      $D = qe();
    function QD(e, t, r) {
      var n = $D(e) ? jD : YD,
        o = arguments.length < 3;
      return n(e, zD(t, 4), r, o, KD);
    }
    OE.exports = QD;
  });
  var AE = u((cj, SE) => {
    var ZD = qa(),
      JD = wt(),
      eM = Pa(),
      tM = Math.max,
      rM = Math.min;
    function nM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = eM(r)), (o = r < 0 ? tM(n + o, 0) : rM(o, n - 1))),
        ZD(e, JD(t, 3), o, !0)
      );
    }
    SE.exports = nM;
  });
  var RE = u((lj, wE) => {
    var iM = Na(),
      oM = AE(),
      aM = iM(oM);
    wE.exports = aM;
  });
  var NE = u((ci) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    ci.default = void 0;
    var sM = Object.prototype.hasOwnProperty;
    function CE(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function uM(e, t) {
      if (CE(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!sM.call(t, r[o]) || !CE(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var cM = uM;
    ci.default = cM;
  });
  var YE = u((Ee) => {
    "use strict";
    var pi = Ze().default;
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    Ee.cleanupHTMLElement = sF;
    Ee.clearAllStyles = aF;
    Ee.clearObjectCache = wM;
    Ee.getActionListProgress = cF;
    Ee.getAffectedElements = za;
    Ee.getComputedStyle = DM;
    Ee.getDestinationValues = WM;
    Ee.getElementId = qM;
    Ee.getInstanceId = CM;
    Ee.getInstanceOrigin = GM;
    Ee.getItemConfigByKey = void 0;
    Ee.getMaxDurationItemIndex = zE;
    Ee.getNamespacedParameterId = dF;
    Ee.getRenderType = kE;
    Ee.getStyleProp = BM;
    Ee.mediaQueriesEqual = vF;
    Ee.observeStore = LM;
    Ee.reduceListToGroup = lF;
    Ee.reifyState = PM;
    Ee.renderHTMLElement = HM;
    Object.defineProperty(Ee, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return GE.default;
      },
    });
    Ee.shouldAllowMediaQuery = pF;
    Ee.shouldNamespaceEventParameter = fF;
    Ee.stringifyTarget = gF;
    var Rt = pi(lE()),
      Ha = pi(bE()),
      Ba = pi(RE()),
      qE = ir(),
      Wt = We(),
      GE = pi(NE()),
      lM = Fa(),
      vt = Ua(),
      Ue = ni(),
      {
        BACKGROUND: fM,
        TRANSFORM: dM,
        TRANSLATE_3D: pM,
        SCALE_3D: vM,
        ROTATE_X: gM,
        ROTATE_Y: EM,
        ROTATE_Z: hM,
        SKEW: _M,
        PRESERVE_3D: yM,
        FLEX: mM,
        OPACITY: fi,
        FILTER: $r,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: dt,
        HEIGHT: pt,
        BACKGROUND_COLOR: UE,
        BORDER_COLOR: IM,
        COLOR: TM,
        CHILDREN: PE,
        IMMEDIATE_CHILDREN: OM,
        SIBLINGS: xE,
        PARENT: bM,
        DISPLAY: di,
        WILL_CHANGE: vr,
        AUTO: Ct,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: SM,
        BAR_DELIMITER: Wa,
        RENDER_TRANSFORM: XE,
        RENDER_GENERAL: ka,
        RENDER_STYLE: ja,
        RENDER_PLUGIN: VE,
      } = Wt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: gr,
        TRANSFORM_SCALE: Er,
        TRANSFORM_ROTATE: hr,
        TRANSFORM_SKEW: Jr,
        STYLE_OPACITY: WE,
        STYLE_FILTER: en,
        STYLE_FONT_VARIATION: tn,
        STYLE_SIZE: _r,
        STYLE_BACKGROUND_COLOR: yr,
        STYLE_BORDER: mr,
        STYLE_TEXT_COLOR: Ir,
        GENERAL_DISPLAY: vi,
        OBJECT_VALUE: AM,
      } = Wt.ActionTypeConsts,
      BE = (e) => e.trim(),
      Ka = Object.freeze({ [yr]: UE, [mr]: IM, [Ir]: TM }),
      HE = Object.freeze({
        [Ue.TRANSFORM_PREFIXED]: dM,
        [UE]: fM,
        [fi]: fi,
        [$r]: $r,
        [dt]: dt,
        [pt]: pt,
        [Qr]: Qr,
      }),
      li = new Map();
    function wM() {
      li.clear();
    }
    var RM = 1;
    function CM() {
      return "i" + RM++;
    }
    var NM = 1;
    function qM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + NM++;
    }
    function PM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Ha.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var xM = (e, t) => e === t;
    function LM({ store: e, select: t, onChange: r, comparator: n = xM }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        s = t(o());
      function c() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return a;
    }
    function LE(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function za({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, s;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (G, V) =>
            G.concat(
              za({
                config: { target: V },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: g,
          queryDocument: v,
          getChildElements: h,
          getSiblingElements: _,
          matchSelector: b,
          elementContains: S,
          isSiblingNode: L,
        } = o,
        { target: A } = e;
      if (!A) return [];
      let {
        id: R,
        objectId: T,
        selector: q,
        selectorGuids: P,
        appliesTo: x,
        useEventTarget: X,
      } = LE(A);
      if (T) return [li.has(T) ? li.get(T) : li.set(T, {}).get(T)];
      if (x === Wt.EventAppliesTo.PAGE) {
        let G = f(R);
        return G ? [G] : [];
      }
      let Q =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[R || q] || {},
        ie = !!(Q.id || Q.selector),
        te,
        M,
        m,
        F = t && g(LE(t.target));
      if (
        (ie
          ? ((te = Q.limitAffectedElements), (M = F), (m = g(Q)))
          : (M = m = g({ id: R, selector: q, selectorGuids: P })),
        t && X)
      ) {
        let G = r && (m || X === !0) ? [r] : v(F);
        if (m) {
          if (X === bM) return v(m).filter((V) => G.some((ee) => S(V, ee)));
          if (X === PE) return v(m).filter((V) => G.some((ee) => S(ee, V)));
          if (X === xE) return v(m).filter((V) => G.some((ee) => L(ee, V)));
        }
        return G;
      }
      return M == null || m == null
        ? []
        : Ue.IS_BROWSER_ENV && n
        ? v(m).filter((G) => n.contains(G))
        : te === PE
        ? v(M, m)
        : te === OM
        ? h(v(M)).filter(b(m))
        : te === xE
        ? _(v(M)).filter(b(m))
        : v(m);
    }
    function DM({ element: e, actionItem: t }) {
      if (!Ue.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case _r:
        case yr:
        case mr:
        case Ir:
        case vi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var DE = /px/,
      MM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = kM[n.type]), r),
          e || {}
        ),
      FM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = jM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function GM(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, vt.isPluginType)(a)) return (0, vt.getPluginOrigin)(a)(t[a], n);
      switch (n.actionTypeId) {
        case gr:
        case Er:
        case hr:
        case Jr:
          return t[n.actionTypeId] || Ya[n.actionTypeId];
        case en:
          return MM(t[n.actionTypeId], n.config.filters);
        case tn:
          return FM(t[n.actionTypeId], n.config.fontVariations);
        case WE:
          return { value: (0, Rt.default)(parseFloat(i(e, fi)), 1) };
        case _r: {
          let s = i(e, dt),
            c = i(e, pt),
            f,
            g;
          return (
            n.config.widthUnit === Ct
              ? (f = DE.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, Rt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === Ct
              ? (g = DE.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (g = (0, Rt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: g }
          );
        }
        case yr:
        case mr:
        case Ir:
          return nF({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case vi:
          return { value: (0, Rt.default)(i(e, di), r.display) };
        case AM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var UM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      XM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      VM = (e, t, r) => {
        if ((0, vt.isPluginType)(e)) return (0, vt.getPluginConfig)(e)(r, t);
        switch (e) {
          case en: {
            let n = (0, Ba.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case tn: {
            let n = (0, Ba.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    Ee.getItemConfigByKey = VM;
    function WM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, vt.isPluginType)(t.actionTypeId))
        return (0, vt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case gr:
        case Er:
        case hr:
        case Jr: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case _r: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Ue.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === Ct) {
            let g = n(e, dt);
            o(e, dt, ""), (c = i(e, "offsetWidth")), o(e, dt, g);
          }
          if (s === Ct) {
            let g = n(e, pt);
            o(e, pt, ""), (f = i(e, "offsetHeight")), o(e, pt, g);
          }
          return { widthValue: c, heightValue: f };
        }
        case yr:
        case mr:
        case Ir: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case en:
          return t.config.filters.reduce(UM, {});
        case tn:
          return t.config.fontVariations.reduce(XM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function kE(e) {
      if (/^TRANSFORM_/.test(e)) return XE;
      if (/^STYLE_/.test(e)) return ja;
      if (/^GENERAL_/.test(e)) return ka;
      if (/^PLUGIN_/.test(e)) return VE;
    }
    function BM(e, t) {
      return e === ja ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function HM(e, t, r, n, o, i, a, s, c) {
      switch (s) {
        case XE:
          return YM(e, t, r, o, a);
        case ja:
          return iF(e, t, r, o, i, a);
        case ka:
          return oF(e, o, a);
        case VE: {
          let { actionTypeId: f } = o;
          if ((0, vt.isPluginType)(f)) return (0, vt.renderPlugin)(f)(c, t, o);
        }
      }
    }
    var Ya = {
        [gr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Er]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [hr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      kM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      jM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      KM = (e, t) => {
        let r = (0, Ba.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      zM = Object.keys(Ya);
    function YM(e, t, r, n, o) {
      let i = zM
          .map((s) => {
            let c = Ya[s],
              {
                xValue: f = c.xValue,
                yValue: g = c.yValue,
                zValue: v = c.zValue,
                xUnit: h = "",
                yUnit: _ = "",
                zUnit: b = "",
              } = t[s] || {};
            switch (s) {
              case gr:
                return `${pM}(${f}${h}, ${g}${_}, ${v}${b})`;
              case Er:
                return `${vM}(${f}${h}, ${g}${_}, ${v}${b})`;
              case hr:
                return `${gM}(${f}${h}) ${EM}(${g}${_}) ${hM}(${v}${b})`;
              case Jr:
                return `${_M}(${f}${h}, ${g}${_})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = o;
      Bt(e, Ue.TRANSFORM_PREFIXED, o),
        a(e, Ue.TRANSFORM_PREFIXED, i),
        ZM(n, r) && a(e, Ue.TRANSFORM_STYLE_PREFIXED, yM);
    }
    function $M(e, t, r, n) {
      let o = (0, Ha.default)(t, (a, s, c) => `${a} ${c}(${s}${KM(c, r)})`, ""),
        { setStyle: i } = n;
      Bt(e, $r, n), i(e, $r, o);
    }
    function QM(e, t, r, n) {
      let o = (0, Ha.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Bt(e, Qr, n), i(e, Qr, o);
    }
    function ZM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === gr && n !== void 0) ||
        (e === Er && n !== void 0) ||
        (e === hr && (t !== void 0 || r !== void 0))
      );
    }
    var JM = "\\(([^)]+)\\)",
      eF = /^rgb/,
      tF = RegExp(`rgba?${JM}`);
    function rF(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function nF({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = Ka[t],
        i = n(e, o),
        a = eF.test(i) ? i : r[o],
        s = rF(tF, a).split(Zr);
      return {
        rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Rt.default)(parseFloat(s[3]), 1),
      };
    }
    function iF(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case _r: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: g } = r;
          f !== void 0 &&
            (s === Ct && (s = "px"), Bt(e, dt, i), a(e, dt, f + s)),
            g !== void 0 &&
              (c === Ct && (c = "px"), Bt(e, pt, i), a(e, pt, g + c));
          break;
        }
        case en: {
          $M(e, r, n.config, i);
          break;
        }
        case tn: {
          QM(e, r, n.config, i);
          break;
        }
        case yr:
        case mr:
        case Ir: {
          let s = Ka[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            g = Math.round(r.bValue),
            v = r.aValue;
          Bt(e, s, i),
            a(
              e,
              s,
              v >= 1 ? `rgb(${c},${f},${g})` : `rgba(${c},${f},${g},${v})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, o, i), a(e, o, r.value + s);
          break;
        }
      }
    }
    function oF(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case vi: {
          let { value: o } = t.config;
          o === mM && Ue.IS_BROWSER_ENV
            ? n(e, di, Ue.FLEX_PREFIXED)
            : n(e, di, o);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Ue.IS_BROWSER_ENV) return;
      let n = HE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, vr);
      if (!a) {
        i(e, vr, n);
        return;
      }
      let s = a.split(Zr).map(BE);
      s.indexOf(n) === -1 && i(e, vr, s.concat(n).join(Zr));
    }
    function jE(e, t, r) {
      if (!Ue.IS_BROWSER_ENV) return;
      let n = HE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, vr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          vr,
          a
            .split(Zr)
            .map(BE)
            .filter((s) => s !== n)
            .join(Zr)
        );
    }
    function aF({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: s } = a.action,
          { actionListId: c } = s,
          f = o[c];
        f && ME({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          ME({ actionList: o[i], elementApi: t });
        });
    }
    function ME({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          FE({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((s) => {
              FE({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function FE({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, vt.isPluginType)(o)
          ? (a = (0, vt.clearPlugin)(o))
          : (a = KE({ effect: uF, actionTypeId: o, elementApi: r })),
          za({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function sF(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === _r) {
        let { config: a } = t;
        a.widthUnit === Ct && n(e, dt, ""), a.heightUnit === Ct && n(e, pt, "");
      }
      o(e, vr) && KE({ effect: jE, actionTypeId: i, elementApi: r })(e);
    }
    var KE =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case gr:
          case Er:
          case hr:
          case Jr:
            e(n, Ue.TRANSFORM_PREFIXED, r);
            break;
          case en:
            e(n, $r, r);
            break;
          case tn:
            e(n, Qr, r);
            break;
          case WE:
            e(n, fi, r);
            break;
          case _r:
            e(n, dt, r), e(n, pt, r);
            break;
          case yr:
          case mr:
          case Ir:
            e(n, Ka[t], r);
            break;
          case vi:
            e(n, di, r);
            break;
        }
      };
    function uF(e, t, r) {
      let { setStyle: n } = r;
      jE(e, t, r),
        n(e, t, ""),
        t === Ue.TRANSFORM_PREFIXED && n(e, Ue.TRANSFORM_STYLE_PREFIXED, "");
    }
    function zE(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function cF(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: g } = c,
            v = g[zE(g)],
            { config: h, actionTypeId: _ } = v;
          o.id === v.id && (s = a + i);
          let b = kE(_) === ka ? 0 : h.duration;
          a += h.delay + b;
        }),
        a > 0 ? (0, lM.optimizeFloat)(s / a) : 0
      );
    }
    function lF({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (s) => (
          i.push((0, qE.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        o &&
          o.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, qE.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function fF(e, { basedOn: t }) {
      return (
        (e === Wt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Wt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Wt.EventTypeConsts.MOUSE_MOVE && t === Wt.EventBasedOn.ELEMENT)
      );
    }
    function dF(e, t) {
      return e + SM + t;
    }
    function pF(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function vF(e, t) {
      return (0, GE.default)(e && e.sort(), t && t.sort());
    }
    function gF(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + Wa + e.objectId;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Wa + r + Wa + n;
    }
  });
  var Ht = u((Xe) => {
    "use strict";
    var Tr = Dt().default;
    Object.defineProperty(Xe, "__esModule", { value: !0 });
    Xe.IX2VanillaUtils =
      Xe.IX2VanillaPlugins =
      Xe.IX2ElementsReducer =
      Xe.IX2Easings =
      Xe.IX2EasingUtils =
      Xe.IX2BrowserSupport =
        void 0;
    var EF = Tr(ni());
    Xe.IX2BrowserSupport = EF;
    var hF = Tr(Da());
    Xe.IX2Easings = hF;
    var _F = Tr(Fa());
    Xe.IX2EasingUtils = _F;
    var yF = Tr(eE());
    Xe.IX2ElementsReducer = yF;
    var mF = Tr(Ua());
    Xe.IX2VanillaPlugins = mF;
    var IF = Tr(YE());
    Xe.IX2VanillaUtils = IF;
  });
  var JE = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixInstances = void 0;
    var $E = We(),
      QE = Ht(),
      Or = ir(),
      {
        IX2_RAW_DATA_IMPORTED: TF,
        IX2_SESSION_STOPPED: OF,
        IX2_INSTANCE_ADDED: bF,
        IX2_INSTANCE_STARTED: SF,
        IX2_INSTANCE_REMOVED: AF,
        IX2_ANIMATION_FRAME_CHANGED: wF,
      } = $E.IX2EngineActionTypes,
      {
        optimizeFloat: gi,
        applyEasing: ZE,
        createBezierEasing: RF,
      } = QE.IX2EasingUtils,
      { RENDER_GENERAL: CF } = $E.IX2EngineConstants,
      {
        getItemConfigByKey: $a,
        getRenderType: NF,
        getStyleProp: qF,
      } = QE.IX2VanillaUtils,
      PF = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: g,
            skipToValue: v,
          } = e,
          { parameters: h } = t.payload,
          _ = Math.max(1 - a, 0.01),
          b = h[n];
        b == null && ((_ = 1), (b = s));
        let S = Math.max(b, 0) || 0,
          L = gi(S - r),
          A = g ? v : gi(r + L * _),
          R = A * 100;
        if (A === r && e.current) return e;
        let T, q, P, x;
        for (let $ = 0, { length: Q } = o; $ < Q; $++) {
          let { keyframe: ie, actionItems: te } = o[$];
          if (($ === 0 && (T = te[0]), R >= ie)) {
            T = te[0];
            let M = o[$ + 1],
              m = M && R !== ie;
            (q = m ? M.actionItems[0] : null),
              m && ((P = ie / 100), (x = (M.keyframe - ie) / 100));
          }
        }
        let X = {};
        if (T && !q)
          for (let $ = 0, { length: Q } = i; $ < Q; $++) {
            let ie = i[$];
            X[ie] = $a(c, ie, T.config);
          }
        else if (T && q && P !== void 0 && x !== void 0) {
          let $ = (A - P) / x,
            Q = T.config.easing,
            ie = ZE(Q, $, f);
          for (let te = 0, { length: M } = i; te < M; te++) {
            let m = i[te],
              F = $a(c, m, T.config),
              ee = ($a(c, m, q.config) - F) * ie + F;
            X[m] = ee;
          }
        }
        return (0, Or.merge)(e, { position: A, current: X });
      },
      xF = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: g,
            pluginDuration: v,
            instanceDelay: h,
            customEasingFn: _,
            skipMotion: b,
          } = e,
          S = c.config.easing,
          { duration: L, delay: A } = c.config;
        v != null && (L = v),
          (A = h ?? A),
          a === CF ? (L = 0) : (i || b) && (L = A = 0);
        let { now: R } = t.payload;
        if (r && n) {
          let T = R - (o + A);
          if (s) {
            let $ = R - o,
              Q = L + A,
              ie = gi(Math.min(Math.max(0, $ / Q), 1));
            e = (0, Or.set)(e, "verboseTimeElapsed", Q * ie);
          }
          if (T < 0) return e;
          let q = gi(Math.min(Math.max(0, T / L), 1)),
            P = ZE(S, q, _),
            x = {},
            X = null;
          return (
            g.length &&
              (X = g.reduce(($, Q) => {
                let ie = f[Q],
                  te = parseFloat(n[Q]) || 0,
                  m = (parseFloat(ie) - te) * P + te;
                return ($[Q] = m), $;
              }, {})),
            (x.current = X),
            (x.position = q),
            q === 1 && ((x.active = !1), (x.complete = !0)),
            (0, Or.merge)(e, x)
          );
        }
        return e;
      },
      LF = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case TF:
            return t.payload.ixInstances || Object.freeze({});
          case OF:
            return Object.freeze({});
          case bF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: g,
                origin: v,
                destination: h,
                immediate: _,
                verbose: b,
                continuous: S,
                parameterId: L,
                actionGroups: A,
                smoothing: R,
                restingValue: T,
                pluginInstance: q,
                pluginDuration: P,
                instanceDelay: x,
                skipMotion: X,
                skipToValue: $,
              } = t.payload,
              { actionTypeId: Q } = o,
              ie = NF(Q),
              te = qF(ie, Q),
              M = Object.keys(h).filter((F) => h[F] != null),
              { easing: m } = o.config;
            return (0, Or.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: v,
              destination: h,
              destinationKeys: M,
              immediate: _,
              verbose: b,
              current: null,
              actionItem: o,
              actionTypeId: Q,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: ie,
              isCarrier: g,
              styleProp: te,
              continuous: S,
              parameterId: L,
              actionGroups: A,
              smoothing: R,
              restingValue: T,
              pluginInstance: q,
              pluginDuration: P,
              instanceDelay: x,
              skipMotion: X,
              skipToValue: $,
              customEasingFn:
                Array.isArray(m) && m.length === 4 ? RF(m) : void 0,
            });
          }
          case SF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, Or.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case AF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case wF: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                c = s.continuous ? PF : xF;
              r = (0, Or.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    Ei.ixInstances = LF;
  });
  var eh = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.ixParameters = void 0;
    var DF = We(),
      {
        IX2_RAW_DATA_IMPORTED: MF,
        IX2_SESSION_STOPPED: FF,
        IX2_PARAMETER_CHANGED: GF,
      } = DF.IX2EngineActionTypes,
      UF = (e = {}, t) => {
        switch (t.type) {
          case MF:
            return t.payload.ixParameters || {};
          case FF:
            return {};
          case GF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    hi.ixParameters = UF;
  });
  var th = u((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.default = void 0;
    var XF = Zo(),
      VF = _f(),
      WF = Ff(),
      BF = Uf(),
      HF = Ht(),
      kF = JE(),
      jF = eh(),
      { ixElements: KF } = HF.IX2ElementsReducer,
      zF = (0, XF.combineReducers)({
        ixData: VF.ixData,
        ixRequest: WF.ixRequest,
        ixSession: BF.ixSession,
        ixElements: KF,
        ixInstances: kF.ixInstances,
        ixParameters: jF.ixParameters,
      });
    _i.default = zF;
  });
  var rh = u((hj, rn) => {
    function YF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (rn.exports = YF),
      (rn.exports.__esModule = !0),
      (rn.exports.default = rn.exports);
  });
  var ih = u((_j, nh) => {
    var $F = St(),
      QF = qe(),
      ZF = _t(),
      JF = "[object String]";
    function e1(e) {
      return typeof e == "string" || (!QF(e) && ZF(e) && $F(e) == JF);
    }
    nh.exports = e1;
  });
  var ah = u((yj, oh) => {
    var t1 = Ca(),
      r1 = t1("length");
    oh.exports = r1;
  });
  var uh = u((mj, sh) => {
    var n1 = "\\ud800-\\udfff",
      i1 = "\\u0300-\\u036f",
      o1 = "\\ufe20-\\ufe2f",
      a1 = "\\u20d0-\\u20ff",
      s1 = i1 + o1 + a1,
      u1 = "\\ufe0e\\ufe0f",
      c1 = "\\u200d",
      l1 = RegExp("[" + c1 + n1 + s1 + u1 + "]");
    function f1(e) {
      return l1.test(e);
    }
    sh.exports = f1;
  });
  var hh = u((Ij, Eh) => {
    var lh = "\\ud800-\\udfff",
      d1 = "\\u0300-\\u036f",
      p1 = "\\ufe20-\\ufe2f",
      v1 = "\\u20d0-\\u20ff",
      g1 = d1 + p1 + v1,
      E1 = "\\ufe0e\\ufe0f",
      h1 = "[" + lh + "]",
      Qa = "[" + g1 + "]",
      Za = "\\ud83c[\\udffb-\\udfff]",
      _1 = "(?:" + Qa + "|" + Za + ")",
      fh = "[^" + lh + "]",
      dh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ph = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      y1 = "\\u200d",
      vh = _1 + "?",
      gh = "[" + E1 + "]?",
      m1 = "(?:" + y1 + "(?:" + [fh, dh, ph].join("|") + ")" + gh + vh + ")*",
      I1 = gh + vh + m1,
      T1 = "(?:" + [fh + Qa + "?", Qa, dh, ph, h1].join("|") + ")",
      ch = RegExp(Za + "(?=" + Za + ")|" + T1 + I1, "g");
    function O1(e) {
      for (var t = (ch.lastIndex = 0); ch.test(e); ) ++t;
      return t;
    }
    Eh.exports = O1;
  });
  var yh = u((Tj, _h) => {
    var b1 = ah(),
      S1 = uh(),
      A1 = hh();
    function w1(e) {
      return S1(e) ? A1(e) : b1(e);
    }
    _h.exports = w1;
  });
  var Ih = u((Oj, mh) => {
    var R1 = zn(),
      C1 = Yn(),
      N1 = Ut(),
      q1 = ih(),
      P1 = yh(),
      x1 = "[object Map]",
      L1 = "[object Set]";
    function D1(e) {
      if (e == null) return 0;
      if (N1(e)) return q1(e) ? P1(e) : e.length;
      var t = C1(e);
      return t == x1 || t == L1 ? e.size : R1(e).length;
    }
    mh.exports = D1;
  });
  var Oh = u((bj, Th) => {
    var M1 = "Expected a function";
    function F1(e) {
      if (typeof e != "function") throw new TypeError(M1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Th.exports = F1;
  });
  var Ja = u((Sj, bh) => {
    var G1 = At(),
      U1 = (function () {
        try {
          var e = G1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    bh.exports = U1;
  });
  var es = u((Aj, Ah) => {
    var Sh = Ja();
    function X1(e, t, r) {
      t == "__proto__" && Sh
        ? Sh(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Ah.exports = X1;
  });
  var Rh = u((wj, wh) => {
    var V1 = es(),
      W1 = Gn(),
      B1 = Object.prototype,
      H1 = B1.hasOwnProperty;
    function k1(e, t, r) {
      var n = e[t];
      (!(H1.call(e, t) && W1(n, r)) || (r === void 0 && !(t in e))) &&
        V1(e, t, r);
    }
    wh.exports = k1;
  });
  var qh = u((Rj, Nh) => {
    var j1 = Rh(),
      K1 = Kr(),
      z1 = Hn(),
      Ch = ft(),
      Y1 = dr();
    function $1(e, t, r, n) {
      if (!Ch(e)) return e;
      t = K1(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var c = Y1(t[o]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var g = s[c];
          (f = n ? n(g, c, s) : void 0),
            f === void 0 && (f = Ch(g) ? g : z1(t[o + 1]) ? [] : {});
        }
        j1(s, c, f), (s = s[c]);
      }
      return e;
    }
    Nh.exports = $1;
  });
  var xh = u((Cj, Ph) => {
    var Q1 = Zn(),
      Z1 = qh(),
      J1 = Kr();
    function e2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = Q1(e, a);
        r(s, a) && Z1(i, J1(a, e), s);
      }
      return i;
    }
    Ph.exports = e2;
  });
  var Dh = u((Nj, Lh) => {
    var t2 = Wn(),
      r2 = Uo(),
      n2 = va(),
      i2 = pa(),
      o2 = Object.getOwnPropertySymbols,
      a2 = o2
        ? function (e) {
            for (var t = []; e; ) t2(t, n2(e)), (e = r2(e));
            return t;
          }
        : i2;
    Lh.exports = a2;
  });
  var Fh = u((qj, Mh) => {
    function s2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Mh.exports = s2;
  });
  var Uh = u((Pj, Gh) => {
    var u2 = ft(),
      c2 = Kn(),
      l2 = Fh(),
      f2 = Object.prototype,
      d2 = f2.hasOwnProperty;
    function p2(e) {
      if (!u2(e)) return l2(e);
      var t = c2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !d2.call(e, n))) || r.push(n);
      return r;
    }
    Gh.exports = p2;
  });
  var Vh = u((xj, Xh) => {
    var v2 = Ea(),
      g2 = Uh(),
      E2 = Ut();
    function h2(e) {
      return E2(e) ? v2(e, !0) : g2(e);
    }
    Xh.exports = h2;
  });
  var Bh = u((Lj, Wh) => {
    var _2 = da(),
      y2 = Dh(),
      m2 = Vh();
    function I2(e) {
      return _2(e, m2, y2);
    }
    Wh.exports = I2;
  });
  var kh = u((Dj, Hh) => {
    var T2 = Ra(),
      O2 = wt(),
      b2 = xh(),
      S2 = Bh();
    function A2(e, t) {
      if (e == null) return {};
      var r = T2(S2(e), function (n) {
        return [n];
      });
      return (
        (t = O2(t)),
        b2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    Hh.exports = A2;
  });
  var Kh = u((Mj, jh) => {
    var w2 = wt(),
      R2 = Oh(),
      C2 = kh();
    function N2(e, t) {
      return C2(e, R2(w2(t)));
    }
    jh.exports = N2;
  });
  var Yh = u((Fj, zh) => {
    var q2 = zn(),
      P2 = Yn(),
      x2 = Vr(),
      L2 = qe(),
      D2 = Ut(),
      M2 = Bn(),
      F2 = Kn(),
      G2 = jn(),
      U2 = "[object Map]",
      X2 = "[object Set]",
      V2 = Object.prototype,
      W2 = V2.hasOwnProperty;
    function B2(e) {
      if (e == null) return !0;
      if (
        D2(e) &&
        (L2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          M2(e) ||
          G2(e) ||
          x2(e))
      )
        return !e.length;
      var t = P2(e);
      if (t == U2 || t == X2) return !e.size;
      if (F2(e)) return !q2(e).length;
      for (var r in e) if (W2.call(e, r)) return !1;
      return !0;
    }
    zh.exports = B2;
  });
  var Qh = u((Gj, $h) => {
    var H2 = es(),
      k2 = Xa(),
      j2 = wt();
    function K2(e, t) {
      var r = {};
      return (
        (t = j2(t, 3)),
        k2(e, function (n, o, i) {
          H2(r, o, t(n, o, i));
        }),
        r
      );
    }
    $h.exports = K2;
  });
  var Jh = u((Uj, Zh) => {
    function z2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    Zh.exports = z2;
  });
  var t_ = u((Xj, e_) => {
    var Y2 = ei();
    function $2(e) {
      return typeof e == "function" ? e : Y2;
    }
    e_.exports = $2;
  });
  var n_ = u((Vj, r_) => {
    var Q2 = Jh(),
      Z2 = Va(),
      J2 = t_(),
      eG = qe();
    function tG(e, t) {
      var r = eG(e) ? Q2 : Z2;
      return r(e, J2(t));
    }
    r_.exports = tG;
  });
  var o_ = u((Wj, i_) => {
    var rG = tt(),
      nG = function () {
        return rG.Date.now();
      };
    i_.exports = nG;
  });
  var u_ = u((Bj, s_) => {
    var iG = ft(),
      ts = o_(),
      a_ = ti(),
      oG = "Expected a function",
      aG = Math.max,
      sG = Math.min;
    function uG(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        c,
        f = 0,
        g = !1,
        v = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(oG);
      (t = a_(t) || 0),
        iG(r) &&
          ((g = !!r.leading),
          (v = "maxWait" in r),
          (i = v ? aG(a_(r.maxWait) || 0, t) : i),
          (h = "trailing" in r ? !!r.trailing : h));
      function _(x) {
        var X = n,
          $ = o;
        return (n = o = void 0), (f = x), (a = e.apply($, X)), a;
      }
      function b(x) {
        return (f = x), (s = setTimeout(A, t)), g ? _(x) : a;
      }
      function S(x) {
        var X = x - c,
          $ = x - f,
          Q = t - X;
        return v ? sG(Q, i - $) : Q;
      }
      function L(x) {
        var X = x - c,
          $ = x - f;
        return c === void 0 || X >= t || X < 0 || (v && $ >= i);
      }
      function A() {
        var x = ts();
        if (L(x)) return R(x);
        s = setTimeout(A, S(x));
      }
      function R(x) {
        return (s = void 0), h && n ? _(x) : ((n = o = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = o = s = void 0);
      }
      function q() {
        return s === void 0 ? a : R(ts());
      }
      function P() {
        var x = ts(),
          X = L(x);
        if (((n = arguments), (o = this), (c = x), X)) {
          if (s === void 0) return b(c);
          if (v) return clearTimeout(s), (s = setTimeout(A, t)), _(c);
        }
        return s === void 0 && (s = setTimeout(A, t)), a;
      }
      return (P.cancel = T), (P.flush = q), P;
    }
    s_.exports = uG;
  });
  var l_ = u((Hj, c_) => {
    var cG = u_(),
      lG = ft(),
      fG = "Expected a function";
    function dG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(fG);
      return (
        lG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        cG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    c_.exports = dG;
  });
  var yi = u((ce) => {
    "use strict";
    var pG = Ze().default;
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.viewportWidthChanged =
      ce.testFrameRendered =
      ce.stopRequested =
      ce.sessionStopped =
      ce.sessionStarted =
      ce.sessionInitialized =
      ce.rawDataImported =
      ce.previewRequested =
      ce.playbackRequested =
      ce.parameterChanged =
      ce.mediaQueriesDefined =
      ce.instanceStarted =
      ce.instanceRemoved =
      ce.instanceAdded =
      ce.eventStateChanged =
      ce.eventListenerAdded =
      ce.elementStateChanged =
      ce.clearRequested =
      ce.animationFrameChanged =
      ce.actionListPlaybackChanged =
        void 0;
    var f_ = pG(nr()),
      d_ = We(),
      vG = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: gG,
        IX2_SESSION_INITIALIZED: EG,
        IX2_SESSION_STARTED: hG,
        IX2_SESSION_STOPPED: _G,
        IX2_PREVIEW_REQUESTED: yG,
        IX2_PLAYBACK_REQUESTED: mG,
        IX2_STOP_REQUESTED: IG,
        IX2_CLEAR_REQUESTED: TG,
        IX2_EVENT_LISTENER_ADDED: OG,
        IX2_TEST_FRAME_RENDERED: bG,
        IX2_EVENT_STATE_CHANGED: SG,
        IX2_ANIMATION_FRAME_CHANGED: AG,
        IX2_PARAMETER_CHANGED: wG,
        IX2_INSTANCE_ADDED: RG,
        IX2_INSTANCE_STARTED: CG,
        IX2_INSTANCE_REMOVED: NG,
        IX2_ELEMENT_STATE_CHANGED: qG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: PG,
        IX2_VIEWPORT_WIDTH_CHANGED: xG,
        IX2_MEDIA_QUERIES_DEFINED: LG,
      } = d_.IX2EngineActionTypes,
      { reifyState: DG } = vG.IX2VanillaUtils,
      MG = (e) => ({ type: gG, payload: (0, f_.default)({}, DG(e)) });
    ce.rawDataImported = MG;
    var FG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: EG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ce.sessionInitialized = FG;
    var GG = () => ({ type: hG });
    ce.sessionStarted = GG;
    var UG = () => ({ type: _G });
    ce.sessionStopped = UG;
    var XG = ({ rawData: e, defer: t }) => ({
      type: yG,
      payload: { defer: t, rawData: e },
    });
    ce.previewRequested = XG;
    var VG = ({
      actionTypeId: e = d_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: mG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    ce.playbackRequested = VG;
    var WG = (e) => ({ type: IG, payload: { actionListId: e } });
    ce.stopRequested = WG;
    var BG = () => ({ type: TG });
    ce.clearRequested = BG;
    var HG = (e, t) => ({
      type: OG,
      payload: { target: e, listenerParams: t },
    });
    ce.eventListenerAdded = HG;
    var kG = (e = 1) => ({ type: bG, payload: { step: e } });
    ce.testFrameRendered = kG;
    var jG = (e, t) => ({ type: SG, payload: { stateKey: e, newState: t } });
    ce.eventStateChanged = jG;
    var KG = (e, t) => ({ type: AG, payload: { now: e, parameters: t } });
    ce.animationFrameChanged = KG;
    var zG = (e, t) => ({ type: wG, payload: { key: e, value: t } });
    ce.parameterChanged = zG;
    var YG = (e) => ({ type: RG, payload: (0, f_.default)({}, e) });
    ce.instanceAdded = YG;
    var $G = (e, t) => ({ type: CG, payload: { instanceId: e, time: t } });
    ce.instanceStarted = $G;
    var QG = (e) => ({ type: NG, payload: { instanceId: e } });
    ce.instanceRemoved = QG;
    var ZG = (e, t, r, n) => ({
      type: qG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ce.elementStateChanged = ZG;
    var JG = ({ actionListId: e, isPlaying: t }) => ({
      type: PG,
      payload: { actionListId: e, isPlaying: t },
    });
    ce.actionListPlaybackChanged = JG;
    var eU = ({ width: e, mediaQueries: t }) => ({
      type: xG,
      payload: { width: e, mediaQueries: t },
    });
    ce.viewportWidthChanged = eU;
    var tU = () => ({ type: LG });
    ce.mediaQueriesDefined = tU;
  });
  var g_ = u((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.elementContains = pU;
    Le.getChildElements = gU;
    Le.getClosestElement = void 0;
    Le.getProperty = uU;
    Le.getQuerySelector = lU;
    Le.getRefType = _U;
    Le.getSiblingElements = EU;
    Le.getStyle = sU;
    Le.getValidDocument = fU;
    Le.isSiblingNode = vU;
    Le.matchSelector = cU;
    Le.queryDocument = dU;
    Le.setStyle = aU;
    var rU = Ht(),
      nU = We(),
      { ELEMENT_MATCHES: rs } = rU.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: p_,
        HTML_ELEMENT: iU,
        PLAIN_OBJECT: oU,
        WF_PAGE: v_,
      } = nU.IX2EngineConstants;
    function aU(e, t, r) {
      e.style[t] = r;
    }
    function sU(e, t) {
      return e.style[t];
    }
    function uU(e, t) {
      return e[t];
    }
    function cU(e) {
      return (t) => t[rs](e);
    }
    function lU({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(p_) !== -1) {
          let n = e.split(p_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(v_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function fU(e) {
      return e == null || e === document.documentElement.getAttribute(v_)
        ? document
        : null;
    }
    function dU(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function pU(e, t) {
      return e.contains(t);
    }
    function vU(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function gU(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function EU(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var hU = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[rs] && r[rs](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Le.getClosestElement = hU;
    function _U(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? iU
          : oU
        : null;
    }
  });
  var ns = u((Kj, h_) => {
    var yU = ft(),
      E_ = Object.create,
      mU = (function () {
        function e() {}
        return function (t) {
          if (!yU(t)) return {};
          if (E_) return E_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    h_.exports = mU;
  });
  var mi = u((zj, __) => {
    function IU() {}
    __.exports = IU;
  });
  var Ti = u((Yj, y_) => {
    var TU = ns(),
      OU = mi();
    function Ii(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ii.prototype = TU(OU.prototype);
    Ii.prototype.constructor = Ii;
    y_.exports = Ii;
  });
  var O_ = u(($j, T_) => {
    var m_ = Jt(),
      bU = Vr(),
      SU = qe(),
      I_ = m_ ? m_.isConcatSpreadable : void 0;
    function AU(e) {
      return SU(e) || bU(e) || !!(I_ && e && e[I_]);
    }
    T_.exports = AU;
  });
  var A_ = u((Qj, S_) => {
    var wU = Wn(),
      RU = O_();
    function b_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = RU), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? b_(s, t - 1, r, n, o)
            : wU(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    S_.exports = b_;
  });
  var R_ = u((Zj, w_) => {
    var CU = A_();
    function NU(e) {
      var t = e == null ? 0 : e.length;
      return t ? CU(e, 1) : [];
    }
    w_.exports = NU;
  });
  var N_ = u((Jj, C_) => {
    function qU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    C_.exports = qU;
  });
  var x_ = u((eK, P_) => {
    var PU = N_(),
      q_ = Math.max;
    function xU(e, t, r) {
      return (
        (t = q_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = q_(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), PU(e, this, s);
        }
      );
    }
    P_.exports = xU;
  });
  var D_ = u((tK, L_) => {
    function LU(e) {
      return function () {
        return e;
      };
    }
    L_.exports = LU;
  });
  var G_ = u((rK, F_) => {
    var DU = D_(),
      M_ = Ja(),
      MU = ei(),
      FU = M_
        ? function (e, t) {
            return M_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: DU(t),
              writable: !0,
            });
          }
        : MU;
    F_.exports = FU;
  });
  var X_ = u((nK, U_) => {
    var GU = 800,
      UU = 16,
      XU = Date.now;
    function VU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = XU(),
          o = UU - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= GU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    U_.exports = VU;
  });
  var W_ = u((iK, V_) => {
    var WU = G_(),
      BU = X_(),
      HU = BU(WU);
    V_.exports = HU;
  });
  var H_ = u((oK, B_) => {
    var kU = R_(),
      jU = x_(),
      KU = W_();
    function zU(e) {
      return KU(jU(e, void 0, kU), e + "");
    }
    B_.exports = zU;
  });
  var K_ = u((aK, j_) => {
    var k_ = ha(),
      YU = k_ && new k_();
    j_.exports = YU;
  });
  var Y_ = u((sK, z_) => {
    function $U() {}
    z_.exports = $U;
  });
  var is = u((uK, Q_) => {
    var $_ = K_(),
      QU = Y_(),
      ZU = $_
        ? function (e) {
            return $_.get(e);
          }
        : QU;
    Q_.exports = ZU;
  });
  var J_ = u((cK, Z_) => {
    var JU = {};
    Z_.exports = JU;
  });
  var os = u((lK, ty) => {
    var ey = J_(),
      eX = Object.prototype,
      tX = eX.hasOwnProperty;
    function rX(e) {
      for (
        var t = e.name + "", r = ey[t], n = tX.call(ey, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    ty.exports = rX;
  });
  var bi = u((fK, ry) => {
    var nX = ns(),
      iX = mi(),
      oX = 4294967295;
    function Oi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = oX),
        (this.__views__ = []);
    }
    Oi.prototype = nX(iX.prototype);
    Oi.prototype.constructor = Oi;
    ry.exports = Oi;
  });
  var iy = u((dK, ny) => {
    function aX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    ny.exports = aX;
  });
  var ay = u((pK, oy) => {
    var sX = bi(),
      uX = Ti(),
      cX = iy();
    function lX(e) {
      if (e instanceof sX) return e.clone();
      var t = new uX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = cX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    oy.exports = lX;
  });
  var cy = u((vK, uy) => {
    var fX = bi(),
      sy = Ti(),
      dX = mi(),
      pX = qe(),
      vX = _t(),
      gX = ay(),
      EX = Object.prototype,
      hX = EX.hasOwnProperty;
    function Si(e) {
      if (vX(e) && !pX(e) && !(e instanceof fX)) {
        if (e instanceof sy) return e;
        if (hX.call(e, "__wrapped__")) return gX(e);
      }
      return new sy(e);
    }
    Si.prototype = dX.prototype;
    Si.prototype.constructor = Si;
    uy.exports = Si;
  });
  var fy = u((gK, ly) => {
    var _X = bi(),
      yX = is(),
      mX = os(),
      IX = cy();
    function TX(e) {
      var t = mX(e),
        r = IX[t];
      if (typeof r != "function" || !(t in _X.prototype)) return !1;
      if (e === r) return !0;
      var n = yX(r);
      return !!n && e === n[0];
    }
    ly.exports = TX;
  });
  var gy = u((EK, vy) => {
    var dy = Ti(),
      OX = H_(),
      bX = is(),
      as = os(),
      SX = qe(),
      py = fy(),
      AX = "Expected a function",
      wX = 8,
      RX = 32,
      CX = 128,
      NX = 256;
    function qX(e) {
      return OX(function (t) {
        var r = t.length,
          n = r,
          o = dy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(AX);
          if (o && !a && as(i) == "wrapper") var a = new dy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = as(i),
            c = s == "wrapper" ? bX(i) : void 0;
          c &&
          py(c[0]) &&
          c[1] == (CX | wX | RX | NX) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[as(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && py(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && SX(g)) return a.plant(g).value();
          for (var v = 0, h = r ? t[v].apply(this, f) : g; ++v < r; )
            h = t[v].call(this, h);
          return h;
        };
      });
    }
    vy.exports = qX;
  });
  var hy = u((hK, Ey) => {
    var PX = gy(),
      xX = PX();
    Ey.exports = xX;
  });
  var yy = u((_K, _y) => {
    function LX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    _y.exports = LX;
  });
  var Iy = u((yK, my) => {
    var DX = yy(),
      ss = ti();
    function MX(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ss(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ss(t)), (t = t === t ? t : 0)),
        DX(ss(e), t, r)
      );
    }
    my.exports = MX;
  });
  var Uy = u((Ni) => {
    "use strict";
    var Ci = Ze().default;
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    Ni.default = void 0;
    var Ke = Ci(nr()),
      FX = Ci(hy()),
      GX = Ci(Jn()),
      UX = Ci(Iy()),
      kt = We(),
      us = ds(),
      Ai = yi(),
      XX = Ht(),
      {
        MOUSE_CLICK: VX,
        MOUSE_SECOND_CLICK: WX,
        MOUSE_DOWN: BX,
        MOUSE_UP: HX,
        MOUSE_OVER: kX,
        MOUSE_OUT: jX,
        DROPDOWN_CLOSE: KX,
        DROPDOWN_OPEN: zX,
        SLIDER_ACTIVE: YX,
        SLIDER_INACTIVE: $X,
        TAB_ACTIVE: QX,
        TAB_INACTIVE: ZX,
        NAVBAR_CLOSE: JX,
        NAVBAR_OPEN: eV,
        MOUSE_MOVE: tV,
        PAGE_SCROLL_DOWN: Ny,
        SCROLL_INTO_VIEW: qy,
        SCROLL_OUT_OF_VIEW: rV,
        PAGE_SCROLL_UP: nV,
        SCROLLING_IN_VIEW: iV,
        PAGE_FINISH: Py,
        ECOMMERCE_CART_CLOSE: oV,
        ECOMMERCE_CART_OPEN: aV,
        PAGE_START: xy,
        PAGE_SCROLL: sV,
      } = kt.EventTypeConsts,
      cs = "COMPONENT_ACTIVE",
      Ly = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Ty } = kt.IX2EngineConstants,
      { getNamespacedParameterId: Oy } = XX.IX2VanillaUtils,
      Dy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      on = Dy(({ element: e, nativeEvent: t }) => e === t.target),
      uV = Dy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      gt = (0, FX.default)([on, uV]),
      My = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !lV[o.eventTypeId]) return o;
        }
        return null;
      },
      cV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!My(e, n);
      },
      He = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          f = My(e, c);
        return (
          f &&
            (0, us.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Ty + n.split(Ty)[1],
              actionListId: (0, GX.default)(f, "action.config.actionListId"),
            }),
          (0, us.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, us.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      },
      rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      an = { handler: rt(gt, He) },
      Fy = (0, Ke.default)({}, an, { types: [cs, Ly].join(" ") }),
      ls = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      by = "mouseover mouseout",
      fs = { types: ls },
      lV = { PAGE_START: xy, PAGE_FINISH: Py },
      nn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, UX.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      fV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      dV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      pV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = nn(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return fV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      Gy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [cs, Ly].indexOf(n) !== -1 ? n === cs : r.isActive,
          i = (0, Ke.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      Sy = (e) => (t, r) => {
        let n = { elementHovered: dV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      vV = (e) => (t, r) => {
        let n = (0, Ke.default)({}, r, { elementVisible: pV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      Ay =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = nn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            g = f === "PX",
            v = o - i,
            h = Number((n / v).toFixed(2));
          if (r && r.percentTop === h) return r;
          let _ = (g ? c : (i * (c || 0)) / 100) / v,
            b,
            S,
            L = 0;
          r &&
            ((b = h > r.percentTop),
            (S = r.scrollingDown !== b),
            (L = S ? h : r.anchorTop));
          let A = s === Ny ? h >= L + _ : h <= L - _,
            R = (0, Ke.default)({}, r, {
              percentTop: h,
              inBounds: A,
              anchorTop: L,
              scrollingDown: b,
            });
          return (r && A && (S || R.inBounds !== r.inBounds) && e(t, R)) || R;
        },
      gV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      EV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      hV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      wy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      wi = (e = !0) =>
        (0, Ke.default)({}, Fy, {
          handler: rt(
            e ? gt : on,
            Gy((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        }),
      Ri = (e = !0) =>
        (0, Ke.default)({}, Fy, {
          handler: rt(
            e ? gt : on,
            Gy((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        }),
      Ry = (0, Ke.default)({}, fs, {
        handler: vV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === qy) === r
            ? (He(e), (0, Ke.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Cy = 0.05,
      _V = {
        [YX]: wi(),
        [$X]: Ri(),
        [zX]: wi(),
        [KX]: Ri(),
        [eV]: wi(!1),
        [JX]: Ri(!1),
        [QX]: wi(),
        [ZX]: Ri(),
        [aV]: { types: "ecommerce-cart-open", handler: rt(gt, He) },
        [oV]: { types: "ecommerce-cart-close", handler: rt(gt, He) },
        [VX]: {
          types: "click",
          handler: rt(
            gt,
            wy((e, { clickCount: t }) => {
              cV(e) ? t === 1 && He(e) : He(e);
            })
          ),
        },
        [WX]: {
          types: "click",
          handler: rt(
            gt,
            wy((e, { clickCount: t }) => {
              t === 2 && He(e);
            })
          ),
        },
        [BX]: (0, Ke.default)({}, an, { types: "mousedown" }),
        [HX]: (0, Ke.default)({}, an, { types: "mouseup" }),
        [kX]: {
          types: by,
          handler: rt(
            gt,
            Sy((e, t) => {
              t.elementHovered && He(e);
            })
          ),
        },
        [jX]: {
          types: by,
          handler: rt(
            gt,
            Sy((e, t) => {
              t.elementHovered || He(e);
            })
          ),
        },
        [tV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: g = 0,
              } = r,
              {
                clientX: v = i.clientX,
                clientY: h = i.clientY,
                pageX: _ = i.pageX,
                pageY: b = i.pageY,
              } = n,
              S = s === "X_AXIS",
              L = n.type === "mouseout",
              A = g / 100,
              R = c,
              T = !1;
            switch (a) {
              case kt.EventBasedOn.VIEWPORT: {
                A = S
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(h, window.innerHeight) / window.innerHeight;
                break;
              }
              case kt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: q,
                  scrollTop: P,
                  scrollWidth: x,
                  scrollHeight: X,
                } = nn();
                A = S ? Math.min(q + _, x) / x : Math.min(P + b, X) / X;
                break;
              }
              case kt.EventBasedOn.ELEMENT:
              default: {
                R = Oy(o, c);
                let q = n.type.indexOf("mouse") === 0;
                if (q && gt({ element: t, nativeEvent: n }) !== !0) break;
                let P = t.getBoundingClientRect(),
                  { left: x, top: X, width: $, height: Q } = P;
                if (!q && !gV({ left: v, top: h }, P)) break;
                (T = !0), (A = S ? (v - x) / $ : (h - X) / Q);
                break;
              }
            }
            return (
              L && (A > 1 - Cy || A < Cy) && (A = Math.round(A)),
              (a !== kt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) &&
                ((A = f ? 1 - A : A),
                e.dispatch((0, Ai.parameterChanged)(R, A))),
              { elementHovered: T, clientX: v, clientY: h, pageX: _, pageY: b }
            );
          },
        },
        [sV]: {
          types: ls,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = nn(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ai.parameterChanged)(r, s));
          },
        },
        [iV]: {
          types: ls,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = nn(),
              {
                basedOn: g,
                selectedAxis: v,
                continuousParameterGroupId: h,
                startsEntering: _,
                startsExiting: b,
                addEndOffset: S,
                addStartOffset: L,
                addOffsetValue: A = 0,
                endOffsetValue: R = 0,
              } = r,
              T = v === "X_AXIS";
            if (g === kt.EventBasedOn.VIEWPORT) {
              let q = T ? i / s : a / c;
              return (
                q !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(h, q)),
                { scrollPercent: q }
              );
            } else {
              let q = Oy(n, h),
                P = e.getBoundingClientRect(),
                x = (L ? A : 0) / 100,
                X = (S ? R : 0) / 100;
              (x = _ ? x : 1 - x), (X = b ? X : 1 - X);
              let $ = P.top + Math.min(P.height * x, f),
                ie = P.top + P.height * X - $,
                te = Math.min(f + ie, c),
                m = Math.min(Math.max(0, f - $), te) / te;
              return (
                m !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(q, m)),
                { scrollPercent: m }
              );
            }
          },
        },
        [qy]: Ry,
        [rV]: Ry,
        [Ny]: (0, Ke.default)({}, fs, {
          handler: Ay((e, t) => {
            t.scrollingDown && He(e);
          }),
        }),
        [nV]: (0, Ke.default)({}, fs, {
          handler: Ay((e, t) => {
            t.scrollingDown || He(e);
          }),
        }),
        [Py]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(on, EV(He)),
        },
        [xy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(on, hV(He)),
        },
      };
    Ni.default = _V;
  });
  var ds = u((qt) => {
    "use strict";
    var it = Ze().default,
      yV = Dt().default;
    Object.defineProperty(qt, "__esModule", { value: !0 });
    qt.observeRequests = YV;
    qt.startActionGroup = _s;
    qt.startEngine = Di;
    qt.stopActionGroup = hs;
    qt.stopAllActionGroups = zy;
    qt.stopEngine = Mi;
    var mV = it(nr()),
      IV = it(rh()),
      TV = it(xa()),
      Nt = it(Jn()),
      OV = it(Ih()),
      bV = it(Kh()),
      SV = it(Yh()),
      AV = it(Qh()),
      sn = it(n_()),
      wV = it(l_()),
      nt = We(),
      Wy = Ht(),
      be = yi(),
      Re = yV(g_()),
      RV = it(Uy()),
      CV = ["store", "computedStyle"],
      NV = Object.keys(nt.QuickEffectIds),
      ps = (e) => NV.includes(e),
      {
        COLON_DELIMITER: vs,
        BOUNDARY_SELECTOR: qi,
        HTML_ELEMENT: By,
        RENDER_GENERAL: qV,
        W_MOD_IX: Xy,
      } = nt.IX2EngineConstants,
      {
        getAffectedElements: Pi,
        getElementId: PV,
        getDestinationValues: gs,
        observeStore: jt,
        getInstanceId: xV,
        renderHTMLElement: LV,
        clearAllStyles: Hy,
        getMaxDurationItemIndex: DV,
        getComputedStyle: MV,
        getInstanceOrigin: FV,
        reduceListToGroup: GV,
        shouldNamespaceEventParameter: UV,
        getNamespacedParameterId: XV,
        shouldAllowMediaQuery: xi,
        cleanupHTMLElement: VV,
        clearObjectCache: WV,
        stringifyTarget: BV,
        mediaQueriesEqual: HV,
        shallowEqual: kV,
      } = Wy.IX2VanillaUtils,
      {
        isPluginType: Li,
        createPluginInstance: Es,
        getPluginDuration: jV,
      } = Wy.IX2VanillaPlugins,
      Vy = navigator.userAgent,
      KV = Vy.match(/iPad/i) || Vy.match(/iPhone/),
      zV = 12;
    function YV(e) {
      jt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: ZV }),
        jt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: JV,
        }),
        jt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: eW }),
        jt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: tW });
    }
    function $V(e) {
      jt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Mi(e),
            Hy({ store: e, elementApi: Re }),
            Di({ store: e, allowEvents: !0 }),
            ky();
        },
      });
    }
    function QV(e, t) {
      let r = jt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function ZV({ rawData: e, defer: t }, r) {
      let n = () => {
        Di({ store: r, rawData: e, allowEvents: !0 }), ky();
      };
      t ? setTimeout(n, 0) : n();
    }
    function ky() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function JV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: g } = e;
      if (n && o && g && s) {
        let v = g.actionLists[n];
        v && (g = GV({ actionList: v, actionItemId: o, rawData: g }));
      }
      if (
        (Di({ store: t, rawData: g, allowEvents: a, testManual: c }),
        (n && r === nt.ActionTypeConsts.GENERAL_START_ACTION) || ps(r))
      ) {
        hs({ store: t, actionListId: n }),
          Ky({ store: t, actionListId: n, eventId: i });
        let v = _s({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          v &&
          t.dispatch(
            (0, be.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function eW({ actionListId: e }, t) {
      e ? hs({ store: t, actionListId: e }) : zy({ store: t }), Mi(t);
    }
    function tW(e, t) {
      Mi(t), Hy({ store: t, elementApi: Re });
    }
    function Di({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, be.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, be.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(qi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (sW(e),
            rW(),
            e.getState().ixSession.hasDefinedMediaQueries && $V(e)),
          e.dispatch((0, be.sessionStarted)()),
          nW(e, n));
    }
    function rW() {
      let { documentElement: e } = document;
      e.className.indexOf(Xy) === -1 && (e.className += ` ${Xy}`);
    }
    function nW(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, be.animationFrameChanged)(n, i)),
          t ? QV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Mi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(iW), WV(), e.dispatch((0, be.sessionStopped)());
      }
    }
    function iW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function oW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: g } = e.getState(),
        { events: v } = f,
        h = v[n],
        { eventTypeId: _ } = h,
        b = {},
        S = {},
        L = [],
        { continuousActionGroups: A } = a,
        { id: R } = a;
      UV(_, o) && (R = XV(t, R));
      let T = g.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
      A.forEach((q) => {
        let { keyframe: P, actionItems: x } = q;
        x.forEach((X) => {
          let { actionTypeId: $ } = X,
            { target: Q } = X.config;
          if (!Q) return;
          let ie = Q.boundaryMode ? T : null,
            te = BV(Q) + vs + $;
          if (((S[te] = aW(S[te], P, X)), !b[te])) {
            b[te] = !0;
            let { config: M } = X;
            Pi({
              config: M,
              event: h,
              eventTarget: r,
              elementRoot: ie,
              elementApi: Re,
            }).forEach((m) => {
              L.push({ element: m, key: te });
            });
          }
        });
      }),
        L.forEach(({ element: q, key: P }) => {
          let x = S[P],
            X = (0, Nt.default)(x, "[0].actionItems[0]", {}),
            { actionTypeId: $ } = X,
            Q = Li($) ? Es($)(q, X) : null,
            ie = gs({ element: q, actionItem: X, elementApi: Re }, Q);
          ys({
            store: e,
            element: q,
            eventId: n,
            actionListId: i,
            actionItem: X,
            destination: ie,
            continuous: !0,
            parameterId: R,
            actionGroups: x,
            smoothing: s,
            restingValue: c,
            pluginInstance: Q,
          });
        });
    }
    function aW(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function sW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      jy(e),
        (0, sn.default)(r, (o, i) => {
          let a = RV.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          pW({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && cW(e);
    }
    var uW = ["resize", "orientationchange"];
    function cW(e) {
      let t = () => {
        jy(e);
      };
      uW.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, be.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function jy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, be.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var lW = (e, t) => (0, bV.default)((0, AV.default)(e, t), SV.default),
      fW = (e, t) => {
        (0, sn.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + vs + i;
            t(o, n, a);
          });
        });
      },
      dW = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Pi({ config: t, elementApi: Re });
      };
    function pW({ logic: e, store: t, events: r }) {
      vW(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        s = lW(r, dW);
      if (!(0, OV.default)(s)) return;
      (0, sn.default)(s, (v, h) => {
        let _ = r[h],
          { action: b, id: S, mediaQueries: L = i.mediaQueryKeys } = _,
          { actionListId: A } = b.config;
        HV(L, i.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()),
          b.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(_.config) ? _.config : [_.config]).forEach((T) => {
              let { continuousParameterGroupId: q } = T,
                P = (0, Nt.default)(a, `${A}.continuousParameterGroups`, []),
                x = (0, TV.default)(P, ({ id: Q }) => Q === q),
                X = (T.smoothing || 0) / 100,
                $ = (T.restingState || 0) / 100;
              x &&
                v.forEach((Q, ie) => {
                  let te = S + vs + ie;
                  oW({
                    store: t,
                    eventStateKey: te,
                    eventTarget: Q,
                    eventId: S,
                    eventConfig: T,
                    actionListId: A,
                    parameterGroup: x,
                    smoothing: X,
                    restingValue: $,
                  });
                });
            }),
          (b.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION ||
            ps(b.actionTypeId)) &&
            Ky({ store: t, actionListId: A, eventId: S });
      });
      let c = (v) => {
          let { ixSession: h } = t.getState();
          fW(s, (_, b, S) => {
            let L = r[b],
              A = h.eventState[S],
              { action: R, mediaQueries: T = i.mediaQueryKeys } = L;
            if (!xi(T, h.mediaQueryKey)) return;
            let q = (P = {}) => {
              let x = o(
                {
                  store: t,
                  element: _,
                  event: L,
                  eventConfig: P,
                  nativeEvent: v,
                  eventStateKey: S,
                },
                A
              );
              kV(x, A) || t.dispatch((0, be.eventStateChanged)(S, x));
            };
            R.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(L.config) ? L.config : [L.config]).forEach(q)
              : q();
          });
        },
        f = (0, wV.default)(c, zV),
        g = ({ target: v = document, types: h, throttle: _ }) => {
          h.split(" ")
            .filter(Boolean)
            .forEach((b) => {
              let S = _ ? f : c;
              v.addEventListener(b, S),
                t.dispatch((0, be.eventListenerAdded)(v, [b, S]));
            });
        };
      Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
    }
    function vW(e) {
      if (!KV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Re.getQuerySelector(i);
        t[a] ||
          ((o === nt.EventTypeConsts.MOUSE_CLICK ||
            o === nt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Ky({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        s = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, Nt.default)(c, "actionItemGroups[0].actionItems", []),
          g = (0, Nt.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!xi(g, o.mediaQueryKey)) return;
        f.forEach((v) => {
          var h;
          let { config: _, actionTypeId: b } = v,
            S =
              (_ == null || (h = _.target) === null || h === void 0
                ? void 0
                : h.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : _,
            L = Pi({ config: S, event: s, elementApi: Re }),
            A = Li(b);
          L.forEach((R) => {
            let T = A ? Es(b)(R, v) : null;
            ys({
              destination: gs({ element: R, actionItem: v, elementApi: Re }, T),
              immediate: !0,
              store: e,
              element: R,
              eventId: r,
              actionItem: v,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function zy({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, sn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          ms(r, e),
            o &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function hs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
      (0, sn.default)(i, (c) => {
        let f = (0, Nt.default)(c, "actionItem.config.target.boundaryMode"),
          g = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && g) {
          if (s && f && !Re.elementContains(s, c.element)) return;
          ms(c, e),
            c.verbose &&
              e.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function _s({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: g } = e.getState(),
        { events: v } = f,
        h = v[t] || {},
        { mediaQueries: _ = f.mediaQueryKeys } = h,
        b = (0, Nt.default)(f, `actionLists.${o}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: L } = b;
      if (!S || !S.length) return !1;
      i >= S.length && (0, Nt.default)(h, "config.loop") && (i = 0),
        i === 0 && L && i++;
      let R =
          (i === 0 || (i === 1 && L)) &&
          ps((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? h.config.delay
            : void 0,
        T = (0, Nt.default)(S, [i, "actionItems"], []);
      if (!T.length || !xi(_, g.mediaQueryKey)) return !1;
      let q = g.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null,
        P = DV(T),
        x = !1;
      return (
        T.forEach((X, $) => {
          let { config: Q, actionTypeId: ie } = X,
            te = Li(ie),
            { target: M } = Q;
          if (!M) return;
          let m = M.boundaryMode ? q : null;
          Pi({
            config: Q,
            event: h,
            eventTarget: r,
            elementRoot: m,
            elementApi: Re,
          }).forEach((G, V) => {
            let ee = te ? Es(ie)(G, X) : null,
              ne = te ? jV(ie)(G, X) : null;
            x = !0;
            let D = P === $ && V === 0,
              j = MV({ element: G, actionItem: X }),
              Y = gs({ element: G, actionItem: X, elementApi: Re }, ee);
            ys({
              store: e,
              element: G,
              actionItem: X,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: D,
              computedStyle: j,
              destination: Y,
              immediate: a,
              verbose: s,
              pluginInstance: ee,
              pluginDuration: ne,
              instanceDelay: R,
            });
          });
        }),
        x
      );
    }
    function ys(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, IV.default)(e, CV),
        {
          element: i,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: g,
          eventId: v,
        } = o,
        h = !f,
        _ = xV(),
        { ixElements: b, ixSession: S, ixData: L } = r.getState(),
        A = PV(b, i),
        { refState: R } = b[A] || {},
        T = Re.getRefType(i),
        q = S.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId],
        P;
      if (q && f)
        switch (
          (t = L.events[v]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case nt.EventTypeConsts.MOUSE_MOVE:
          case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            P = g;
            break;
          default:
            P = 0.5;
            break;
        }
      let x = FV(i, R, n, a, Re, c);
      if (
        (r.dispatch(
          (0, be.instanceAdded)(
            (0, mV.default)(
              {
                instanceId: _,
                elementId: A,
                origin: x,
                refType: T,
                skipMotion: q,
                skipToValue: P,
              },
              o
            )
          )
        ),
        Yy(document.body, "ix2-animation-started", _),
        s)
      ) {
        gW(r, _);
        return;
      }
      jt({ store: r, select: ({ ixInstances: X }) => X[_], onChange: $y }),
        h && r.dispatch((0, be.instanceStarted)(_, S.tick));
    }
    function ms(e, t) {
      Yy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === By && VV(i, n, Re), t.dispatch((0, be.instanceRemoved)(e.id));
    }
    function Yy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function gW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, be.instanceStarted)(t, 0)),
        e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      $y(n[t], e);
    }
    function $y(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: g,
          eventId: v,
          eventTarget: h,
          eventStateKey: _,
          actionListId: b,
          isCarrier: S,
          styleProp: L,
          verbose: A,
          pluginInstance: R,
        } = e,
        { ixData: T, ixSession: q } = t.getState(),
        { events: P } = T,
        x = P[v] || {},
        { mediaQueries: X = T.mediaQueryKeys } = x;
      if (xi(X, q.mediaQueryKey) && (n || r || o)) {
        if (f || (c === qV && o)) {
          t.dispatch((0, be.elementStateChanged)(i, s, f, a));
          let { ixElements: $ } = t.getState(),
            { ref: Q, refType: ie, refState: te } = $[i] || {},
            M = te && te[s];
          (ie === By || Li(s)) && LV(Q, te, M, v, a, L, Re, c, R);
        }
        if (o) {
          if (S) {
            let $ = _s({
              store: t,
              eventId: v,
              eventTarget: h,
              eventStateKey: _,
              actionListId: b,
              groupIndex: g + 1,
              verbose: A,
            });
            A &&
              !$ &&
              t.dispatch(
                (0, be.actionListPlaybackChanged)({
                  actionListId: b,
                  isPlaying: !1,
                })
              );
          }
          ms(e, t);
        }
      }
    }
  });
  var Zy = u((It) => {
    "use strict";
    var EW = Dt().default,
      hW = Ze().default;
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.actions = void 0;
    It.destroy = Qy;
    It.init = TW;
    It.setEnv = IW;
    It.store = void 0;
    Dl();
    var _W = Zo(),
      yW = hW(th()),
      Is = ds(),
      mW = EW(yi());
    It.actions = mW;
    var Fi = (0, _W.createStore)(yW.default);
    It.store = Fi;
    function IW(e) {
      e() && (0, Is.observeRequests)(Fi);
    }
    function TW(e) {
      Qy(), (0, Is.startEngine)({ store: Fi, rawData: e, allowEvents: !0 });
    }
    function Qy() {
      (0, Is.stopEngine)(Fi);
    }
  });
  var rm = u((OK, tm) => {
    var Jy = ke(),
      em = Zy();
    em.setEnv(Jy.env);
    Jy.define(
      "ix2",
      (tm.exports = function () {
        return em;
      })
    );
  });
  var im = u((bK, nm) => {
    var br = ke();
    br.define(
      "links",
      (nm.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = br.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          v,
          h;
        r.ready = r.design = r.preview = _;
        function _() {
          (o = i && br.env("design")),
            (h = br.env("slug") || a.pathname || ""),
            br.scroll.off(S),
            (v = []);
          for (var A = document.links, R = 0; R < A.length; ++R) b(A[R]);
          v.length && (br.scroll.on(S), S());
        }
        function b(A) {
          var R =
            (o && A.getAttribute("href-disabled")) || A.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var T = e(A);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var q = e(s.hash);
              q.length && v.push({ link: T, sec: q, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var P = s.href === a.href || R === h || (f.test(R) && g.test(h));
              L(T, c, P);
            }
          }
        }
        function S() {
          var A = n.scrollTop(),
            R = n.height();
          t.each(v, function (T) {
            var q = T.link,
              P = T.sec,
              x = P.offset().top,
              X = P.outerHeight(),
              $ = R * 0.5,
              Q = P.is(":visible") && x + X - $ >= A && x + $ <= A + R;
            T.active !== Q && ((T.active = Q), L(q, c, Q));
          });
        }
        function L(A, R, T) {
          var q = A.hasClass(R);
          (T && q) || (!T && !q) || (T ? A.addClass(R) : A.removeClass(R));
        }
        return r;
      })
    );
  });
  var am = u((SK, om) => {
    var Gi = ke();
    Gi.define(
      "scroll",
      (om.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          c = Gi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          _ = document.createElement("style");
        _.appendChild(document.createTextNode(h));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function L(M) {
          return S.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function T(M, m) {
          var F;
          switch (m) {
            case "add":
              (F = M.attr("tabindex")),
                F
                  ? M.attr("data-wf-tabindex-swap", F)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (F = M.attr("data-wf-tabindex-swap")),
                F
                  ? (M.attr("tabindex", F),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", m === "add");
        }
        function q(M) {
          var m = M.currentTarget;
          if (
            !(
              Gi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var F = L(m) ? m.hash : "";
            if (F !== "") {
              var G = e(F);
              G.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                P(F, M),
                window.setTimeout(
                  function () {
                    x(G, function () {
                      T(G, "add"),
                        G.get(0).focus({ preventScroll: !0 }),
                        T(G, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function P(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Gi.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function x(M, m) {
          var F = o.scrollTop(),
            G = X(M);
          if (F !== G) {
            var V = $(M, F, G),
              ee = Date.now(),
              ne = function () {
                var D = Date.now() - ee;
                window.scroll(0, Q(F, G, D, V)),
                  D <= V ? s(ne) : typeof m == "function" && m();
              };
            s(ne);
          }
        }
        function X(M) {
          var m = e(f),
            F = m.css("position") === "fixed" ? m.outerHeight() : 0,
            G = M.offset().top - F;
          if (M.data("scroll") === "mid") {
            var V = o.height() - F,
              ee = M.outerHeight();
            ee < V && (G -= Math.round((V - ee) / 2));
          }
          return G;
        }
        function $(M, m, F) {
          if (R()) return 0;
          var G = 1;
          return (
            a.add(M).each(function (V, ee) {
              var ne = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (G = ne);
            }),
            (472.143 * Math.log(Math.abs(m - F) + 125) - 2e3) * G
          );
        }
        function Q(M, m, F, G) {
          return F > G ? m : M + (m - M) * ie(F / G);
        }
        function ie(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: m } = t;
          i.on(m, v, q),
            i.on(M, g, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(_, document.head.firstChild);
        }
        return { ready: te };
      })
    );
  });
  var um = u((AK, sm) => {
    var OW = ke();
    OW.define(
      "touch",
      (sm.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          i.addEventListener("touchstart", v, !1),
            i.addEventListener("touchmove", h, !1),
            i.addEventListener("touchend", _, !1),
            i.addEventListener("touchcancel", b, !1),
            i.addEventListener("mousedown", v, !1),
            i.addEventListener("mousemove", h, !1),
            i.addEventListener("mouseup", _, !1),
            i.addEventListener("mouseout", b, !1);
          function v(L) {
            var A = L.touches;
            (A && A.length > 1) ||
              ((a = !0),
              A ? ((s = !0), (f = A[0].clientX)) : (f = L.clientX),
              (g = f));
          }
          function h(L) {
            if (a) {
              if (s && L.type === "mousemove") {
                L.preventDefault(), L.stopPropagation();
                return;
              }
              var A = L.touches,
                R = A ? A[0].clientX : L.clientX,
                T = R - g;
              (g = R),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", L, { direction: T > 0 ? "right" : "left" }), b());
            }
          }
          function _(L) {
            if (a && ((a = !1), s && L.type === "mouseup")) {
              L.preventDefault(), L.stopPropagation(), (s = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function S() {
            i.removeEventListener("touchstart", v, !1),
              i.removeEventListener("touchmove", h, !1),
              i.removeEventListener("touchend", _, !1),
              i.removeEventListener("touchcancel", b, !1),
              i.removeEventListener("mousedown", v, !1),
              i.removeEventListener("mousemove", h, !1),
              i.removeEventListener("mouseup", _, !1),
              i.removeEventListener("mouseout", b, !1),
              (i = null);
          }
          this.destroy = S;
        }
        function o(i, a, s) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var fm = u((wK, lm) => {
    var Kt = ke(),
      bW = vn(),
      ot = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      cm = !0,
      SW = /^#[a-zA-Z0-9\-_]+$/;
    Kt.define(
      "dropdown",
      (lm.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Kt.env(),
          i = !1,
          a,
          s = Kt.env.touch,
          c = ".w-dropdown",
          f = "w--open",
          g = bW.triggers,
          v = 900,
          h = "focusout" + c,
          _ = "keydown" + c,
          b = "mouseenter" + c,
          S = "mousemove" + c,
          L = "mouseleave" + c,
          A = (s ? "click" : "mouseup") + c,
          R = "w-close" + c,
          T = "setting" + c,
          q = e(document),
          P;
        (n.ready = x),
          (n.design = function () {
            i && m(), (i = !1), x();
          }),
          (n.preview = function () {
            (i = !0), x();
          });
        function x() {
          (a = o && Kt.env("design")), (P = q.find(c)), P.each(X);
        }
        function X(p, k) {
          var z = e(k),
            C = e.data(k, c);
          C ||
            (C = e.data(k, c, {
              open: !1,
              el: z,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = V(C)),
            (C.mouseLeave = ne(C)),
            (C.mouseUpOutside = G(C)),
            (C.mouseMoveOutside = D(C)),
            $(C);
          var se = C.toggle.attr("id"),
            Oe = C.list.attr("id");
          se || (se = "w-dropdown-toggle-" + p),
            Oe || (Oe = "w-dropdown-list-" + p),
            C.toggle.attr("id", se),
            C.toggle.attr("aria-controls", Oe),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", Oe),
            C.list.attr("aria-labelledby", se),
            C.links.each(function (d, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                SW.test(W.hash) && W.addEventListener("click", M.bind(null, C));
            }),
            C.el.off(c),
            C.toggle.off(c),
            C.nav && C.nav.off(c);
          var fe = ie(C, cm);
          a && C.el.on(T, Q(C)),
            a ||
              (o && ((C.hovering = !1), M(C)),
              C.config.hover && C.toggle.on(b, ee(C)),
              C.el.on(R, fe),
              C.el.on(_, j(C)),
              C.el.on(h, U(C)),
              C.toggle.on(A, fe),
              C.toggle.on(_, B(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(R, fe));
        }
        function $(p) {
          var k = Number(p.el.css("z-index"));
          (p.manageZ = k === v || k === v + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function Q(p) {
          return function (k, z) {
            (z = z || {}),
              $(p),
              z.open === !0 && te(p, !0),
              z.open === !1 && M(p, { immediate: !0 });
          };
        }
        function ie(p, k) {
          return r(function (z) {
            if (p.open || (z && z.type === "w-close"))
              return M(p, { forceClose: k });
            te(p);
          });
        }
        function te(p) {
          if (!p.open) {
            F(p),
              (p.open = !0),
              p.list.addClass(f),
              p.toggle.addClass(f),
              p.toggle.attr("aria-expanded", "true"),
              g.intro(0, p.el[0]),
              Kt.redraw.up(),
              p.manageZ && p.el.css("z-index", v + 1);
            var k = Kt.env("editor");
            a || q.on(A, p.mouseUpOutside),
              p.hovering && !k && p.el.on(L, p.mouseLeave),
              p.hovering && k && q.on(S, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function M(p, { immediate: k, forceClose: z } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !z)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var C = p.config;
            if (
              (g.outro(0, p.el[0]),
              q.off(A, p.mouseUpOutside),
              q.off(S, p.mouseMoveOutside),
              p.el.off(L, p.mouseLeave),
              window.clearTimeout(p.delayId),
              !C.delay || k)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, C.delay);
          }
        }
        function m() {
          q.find(c).each(function (p, k) {
            e(k).triggerHandler(R);
          });
        }
        function F(p) {
          var k = p.el[0];
          P.each(function (z, C) {
            var se = e(C);
            se.is(k) || se.has(k).length || se.triggerHandler(R);
          });
        }
        function G(p) {
          return (
            p.mouseUpOutside && q.off(A, p.mouseUpOutside),
            r(function (k) {
              if (p.open) {
                var z = e(k.target);
                if (!z.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(p.el[0], z.parents(c)) === -1,
                    se = Kt.env("editor");
                  if (C) {
                    if (se) {
                      var Oe =
                          z.parents().length === 1 &&
                          z.parents("svg").length === 1,
                        fe = z.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Oe || fe) return;
                    }
                    M(p);
                  }
                }
              }
            })
          );
        }
        function V(p) {
          return function () {
            p.list.removeClass(f),
              p.toggle.removeClass(f),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function ee(p) {
          return function () {
            (p.hovering = !0), te(p);
          };
        }
        function ne(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || M(p);
          };
        }
        function D(p) {
          return r(function (k) {
            if (p.open) {
              var z = e(k.target),
                C = e.inArray(p.el[0], z.parents(c)) === -1;
              if (C) {
                var se = z.parents(".w-editor-bem-EditorHoverControls").length,
                  Oe = z.parents(".w-editor-bem-RTToolbar").length,
                  fe = e(".w-editor-bem-EditorOverlay"),
                  d =
                    fe.find(".w-editor-edit-outline").length ||
                    fe.find(".w-editor-bem-RTToolbar").length;
                if (se || Oe || d) return;
                (p.hovering = !1), M(p);
              }
            }
          });
        }
        function j(p) {
          return function (k) {
            if (!(a || !p.open))
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case ot.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), Y(p), k.preventDefault())
                    : void 0;
                case ot.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      Y(p),
                      k.preventDefault())
                    : void 0;
                case ot.ESCAPE:
                  return M(p), p.toggle.focus(), k.stopPropagation();
                case ot.ARROW_RIGHT:
                case ot.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    Y(p),
                    k.preventDefault()
                  );
                case ot.ARROW_LEFT:
                case ot.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    Y(p),
                    k.preventDefault()
                  );
              }
          };
        }
        function Y(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function B(p) {
          var k = ie(p, cm);
          return function (z) {
            if (!a) {
              if (!p.open)
                switch (z.keyCode) {
                  case ot.ARROW_UP:
                  case ot.ARROW_DOWN:
                    return z.stopPropagation();
                }
              switch (z.keyCode) {
                case ot.SPACE:
                case ot.ENTER:
                  return k(), z.stopPropagation(), z.preventDefault();
              }
            }
          };
        }
        function U(p) {
          return r(function (k) {
            var { relatedTarget: z, target: C } = k,
              se = p.el[0],
              Oe = se.contains(z) || se.contains(C);
            return Oe || M(p), k.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var dm = u((Ts) => {
    "use strict";
    Object.defineProperty(Ts, "__esModule", { value: !0 });
    Ts.default = AW;
    function AW(e, t, r, n, o, i, a, s, c, f, g, v, h) {
      return function (_) {
        e(_);
        var b = _.form,
          S = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: n(),
          };
        let L = b.attr("data-wf-flow");
        L && (S.wfFlow = L), o(_);
        var A = i(b, S.fields);
        if (A) return a(A);
        if (((S.fileUploads = s(b)), c(_), !f)) {
          g(_);
          return;
        }
        v.ajax({
          url: h,
          type: "POST",
          data: S,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (_.success = !0), g(_);
          })
          .fail(function () {
            g(_);
          });
      };
    }
  });
  var vm = u((CK, pm) => {
    var Ui = ke();
    Ui.define(
      "forms",
      (pm.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          g = /^\S+@\S+$/,
          v = window.alert,
          h = Ui.env(),
          _,
          b,
          S,
          L = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !h && !_ && q();
            };
        function R() {
          (c = e("html").attr("data-wf-site")),
            (b = "https://webflow.com/api/v1/form/" + c),
            a &&
              b.indexOf("https://webflow.com") >= 0 &&
              (b = b.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${b}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(T);
        }
        function T(D, j) {
          var Y = e(j),
            B = e.data(j, s);
          B || (B = e.data(j, s, { form: Y })), P(B);
          var U = Y.closest("div.w-form");
          (B.done = U.find("> .w-form-done")),
            (B.fail = U.find("> .w-form-fail")),
            (B.fileUploads = U.find(".w-file-upload")),
            B.fileUploads.each(function (z) {
              V(z, B);
            });
          var p =
            B.form.attr("aria-label") || B.form.attr("data-name") || "Form";
          B.done.attr("aria-label") || B.form.attr("aria-label", p),
            B.done.attr("tabindex", "-1"),
            B.done.attr("role", "region"),
            B.done.attr("aria-label") ||
              B.done.attr("aria-label", p + " success"),
            B.fail.attr("tabindex", "-1"),
            B.fail.attr("role", "region"),
            B.fail.attr("aria-label") ||
              B.fail.attr("aria-label", p + " failure");
          var k = (B.action = Y.attr("action"));
          if (
            ((B.handler = null),
            (B.redirect = Y.attr("data-redirect")),
            L.test(k))
          ) {
            B.handler = m;
            return;
          }
          if (!k) {
            if (c) {
              B.handler = (() => {
                let z = dm().default;
                return z(P, i, Ui, ie, G, X, v, $, x, c, F, e, b);
              })();
              return;
            }
            A();
          }
        }
        function q() {
          (_ = !0),
            n.on("submit", s + " form", function (z) {
              var C = e.data(this, s);
              C.handler && ((C.evt = z), C.handler(C));
            });
          let D = ".w-checkbox-input",
            j = ".w-radio-input",
            Y = "w--redirected-checked",
            B = "w--redirected-focus",
            U = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", D],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + D + ")",
            (z) => {
              e(z.target).siblings(D).toggleClass(Y);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${D})`).map((se, Oe) =>
                e(Oe).siblings(j).removeClass(Y)
              );
              let C = e(z.target);
              C.hasClass("w-radio-input") || C.siblings(j).addClass(Y);
            }),
            k.forEach(([z, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${z}"]:not(` + C + ")",
                (se) => {
                  e(se.target).siblings(C).addClass(B),
                    e(se.target).filter(p).siblings(C).addClass(U);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${z}"]:not(` + C + ")",
                  (se) => {
                    e(se.target).siblings(C).removeClass(`${B} ${U}`);
                  }
                );
            });
        }
        function P(D) {
          var j = (D.btn = D.form.find(':input[type="submit"]'));
          (D.wait = D.btn.attr("data-wait") || null),
            (D.success = !1),
            j.prop("disabled", !1),
            D.label && j.val(D.label);
        }
        function x(D) {
          var j = D.btn,
            Y = D.wait;
          j.prop("disabled", !0), Y && ((D.label = j.val()), j.val(Y));
        }
        function X(D, j) {
          var Y = null;
          return (
            (j = j || {}),
            D.find(':input:not([type="submit"]):not([type="file"])').each(
              function (B, U) {
                var p = e(U),
                  k = p.attr("type"),
                  z =
                    p.attr("data-name") || p.attr("name") || "Field " + (B + 1),
                  C = p.val();
                if (k === "checkbox") C = p.is(":checked");
                else if (k === "radio") {
                  if (j[z] === null || typeof j[z] == "string") return;
                  C =
                    D.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (j[z] = C),
                  (Y = Y || te(p, k, z, C));
              }
            ),
            Y
          );
        }
        function $(D) {
          var j = {};
          return (
            D.find(':input[type="file"]').each(function (Y, B) {
              var U = e(B),
                p = U.attr("data-name") || U.attr("name") || "File " + (Y + 1),
                k = U.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (j[p] = k);
            }),
            j
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function ie() {
          return document.cookie.split("; ").reduce(function (j, Y) {
            let B = Y.split("="),
              U = B[0];
            if (U in Q) {
              let p = Q[U],
                k = B.slice(1).join("=");
              j[p] = k;
            }
            return j;
          }, {});
        }
        function te(D, j, Y, B) {
          var U = null;
          return (
            j === "password"
              ? (U = "Passwords cannot be submitted.")
              : D.attr("required")
              ? B
                ? f.test(D.attr("type")) &&
                  (g.test(B) ||
                    (U = "Please enter a valid email address for: " + Y))
                : (U = "Please fill out the required field: " + Y)
              : Y === "g-recaptcha-response" &&
                !B &&
                (U = "Please confirm you\u2019re not a robot."),
            U
          );
        }
        function M(D) {
          G(D), F(D);
        }
        function m(D) {
          P(D);
          var j = D.form,
            Y = {};
          if (/^https/.test(i.href) && !/^https/.test(D.action)) {
            j.attr("method", "post");
            return;
          }
          G(D);
          var B = X(j, Y);
          if (B) return v(B);
          x(D);
          var U;
          t.each(Y, function (C, se) {
            f.test(se) && (Y.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(se) && (U = C),
              /^(first[ _-]?name)$/i.test(se) && (Y.FNAME = C),
              /^(last[ _-]?name)$/i.test(se) && (Y.LNAME = C);
          }),
            U &&
              !Y.FNAME &&
              ((U = U.split(" ")),
              (Y.FNAME = U[0]),
              (Y.LNAME = Y.LNAME || U[1]));
          var p = D.action.replace("/post?", "/post-json?") + "&c=?",
            k = p.indexOf("u=") + 2;
          k = p.substring(k, p.indexOf("&", k));
          var z = p.indexOf("id=") + 3;
          (z = p.substring(z, p.indexOf("&", z))),
            (Y["b_" + k + "_" + z] = ""),
            e
              .ajax({ url: p, data: Y, dataType: "jsonp" })
              .done(function (C) {
                (D.success = C.result === "success" || /already/.test(C.msg)),
                  D.success || console.info("MailChimp error: " + C.msg),
                  F(D);
              })
              .fail(function () {
                F(D);
              });
        }
        function F(D) {
          var j = D.form,
            Y = D.redirect,
            B = D.success;
          if (B && Y) {
            Ui.location(Y);
            return;
          }
          D.done.toggle(B),
            D.fail.toggle(!B),
            B ? D.done.focus() : D.fail.focus(),
            j.toggle(!B),
            P(D);
        }
        function G(D) {
          D.evt && D.evt.preventDefault(), (D.evt = null);
        }
        function V(D, j) {
          if (!j.fileUploads || !j.fileUploads[D]) return;
          var Y,
            B = e(j.fileUploads[D]),
            U = B.find("> .w-file-upload-default"),
            p = B.find("> .w-file-upload-uploading"),
            k = B.find("> .w-file-upload-success"),
            z = B.find("> .w-file-upload-error"),
            C = U.find(".w-file-upload-input"),
            se = U.find(".w-file-upload-label"),
            Oe = se.children(),
            fe = z.find(".w-file-upload-error-msg"),
            d = k.find(".w-file-upload-file"),
            W = k.find(".w-file-remove-link"),
            Z = d.find(".w-file-upload-file-name"),
            K = fe.attr("data-w-size-error"),
            _e = fe.attr("data-w-type-error"),
            xt = fe.attr("data-w-generic-error");
          if (
            (h ||
              se.on("click keydown", function (y) {
                (y.type === "keydown" && y.which !== 13 && y.which !== 32) ||
                  (y.preventDefault(), C.click());
              }),
            se.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            h)
          )
            C.on("click", function (y) {
              y.preventDefault();
            }),
              se.on("click", function (y) {
                y.preventDefault();
              }),
              Oe.on("click", function (y) {
                y.preventDefault();
              });
          else {
            W.on("click keydown", function (y) {
              if (y.type === "keydown") {
                if (y.which !== 13 && y.which !== 32) return;
                y.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                Z.html(""),
                U.toggle(!0),
                k.toggle(!1),
                se.focus();
            }),
              C.on("change", function (y) {
                (Y = y.target && y.target.files && y.target.files[0]),
                  Y &&
                    (U.toggle(!1),
                    z.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    Z.text(Y.name),
                    O() || x(j),
                    (j.fileUploads[D].uploading = !0),
                    ee(Y, E));
              });
            var Et = se.outerHeight();
            C.height(Et), C.width(1);
          }
          function l(y) {
            var w = y.responseJSON && y.responseJSON.msg,
              J = xt;
            typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0
              ? (J = _e)
              : typeof w == "string" &&
                w.indexOf("MaxFileSizeError") === 0 &&
                (J = K),
              fe.text(J),
              C.removeAttr("data-value"),
              C.val(""),
              p.toggle(!1),
              U.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (j.fileUploads[D].uploading = !1),
              O() || P(j);
          }
          function E(y, w) {
            if (y) return l(y);
            var J = w.fileName,
              oe = w.postData,
              he = w.fileId,
              H = w.s3Url;
            C.attr("data-value", he), ne(H, oe, Y, J, I);
          }
          function I(y) {
            if (y) return l(y);
            p.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (j.fileUploads[D].uploading = !1),
              O() || P(j);
          }
          function O() {
            var y = (j.fileUploads && j.fileUploads.toArray()) || [];
            return y.some(function (w) {
              return w.uploading;
            });
          }
        }
        function ee(D, j) {
          var Y = new URLSearchParams({ name: D.name, size: D.size });
          e.ajax({ type: "GET", url: `${S}?${Y}`, crossDomain: !0 })
            .done(function (B) {
              j(null, B);
            })
            .fail(function (B) {
              j(B);
            });
        }
        function ne(D, j, Y, B, U) {
          var p = new FormData();
          for (var k in j) p.append(k, j[k]);
          p.append("file", Y, B),
            e
              .ajax({
                type: "POST",
                url: D,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                U(null);
              })
              .fail(function (z) {
                U(z);
              });
        }
        return r;
      })
    );
  });
  var Em = u((NK, gm) => {
    var Pt = ke(),
      wW = vn(),
      De = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    Pt.define(
      "navbar",
      (gm.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          s,
          c,
          f,
          g,
          v = Pt.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          _ = ".w-nav",
          b = "w--open",
          S = "w--nav-dropdown-open",
          L = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          T = wW.triggers,
          q = e();
        (r.ready = r.design = r.preview = P),
          (r.destroy = function () {
            (q = e()), x(), c && c.length && c.each(ie);
          });
        function P() {
          (f = v && Pt.env("design")),
            (g = Pt.env("editor")),
            (s = e(document.body)),
            (c = i.find(_)),
            c.length && (c.each(Q), x(), X());
        }
        function x() {
          Pt.resize.off($);
        }
        function X() {
          Pt.resize.on($);
        }
        function $() {
          c.each(U);
        }
        function Q(d, W) {
          var Z = e(W),
            K = e.data(W, _);
          K ||
            (K = e.data(W, _, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (K.menu = Z.find(".w-nav-menu")),
            (K.links = K.menu.find(".w-nav-link")),
            (K.dropdowns = K.menu.find(".w-dropdown")),
            (K.dropdownToggle = K.menu.find(".w-dropdown-toggle")),
            (K.dropdownList = K.menu.find(".w-dropdown-list")),
            (K.button = Z.find(".w-nav-button")),
            (K.container = Z.find(".w-container")),
            (K.overlayContainerId = "w-nav-overlay-" + d),
            (K.outside = Y(K));
          var _e = Z.find(".w-nav-brand");
          _e &&
            _e.attr("href") === "/" &&
            _e.attr("aria-label") == null &&
            _e.attr("aria-label", "home"),
            K.button.attr("style", "-webkit-user-select: text;"),
            K.button.attr("aria-label") == null &&
              K.button.attr("aria-label", "menu"),
            K.button.attr("role", "button"),
            K.button.attr("tabindex", "0"),
            K.button.attr("aria-controls", K.overlayContainerId),
            K.button.attr("aria-haspopup", "menu"),
            K.button.attr("aria-expanded", "false"),
            K.el.off(_),
            K.button.off(_),
            K.menu.off(_),
            m(K),
            f
              ? (te(K), K.el.on("setting" + _, F(K)))
              : (M(K),
                K.button.on("click" + _, D(K)),
                K.menu.on("click" + _, "a", j(K)),
                K.button.on("keydown" + _, G(K)),
                K.el.on("keydown" + _, V(K))),
            U(d, W);
        }
        function ie(d, W) {
          var Z = e.data(W, _);
          Z && (te(Z), e.removeData(W, _));
        }
        function te(d) {
          d.overlay && (fe(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function M(d) {
          d.overlay ||
            ((d.overlay = e(h).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            fe(d, !0));
        }
        function m(d) {
          var W = {},
            Z = d.config || {},
            K = (W.animation = d.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(K)),
            (W.animDirect = /left$/.test(K) ? -1 : 1),
            Z.animation !== K && d.open && t.defer(ne, d),
            (W.easing = d.el.attr("data-easing") || "ease"),
            (W.easing2 = d.el.attr("data-easing2") || "ease");
          var _e = d.el.attr("data-duration");
          (W.duration = _e != null ? Number(_e) : 400),
            (W.docHeight = d.el.attr("data-doc-height")),
            (d.config = W);
        }
        function F(d) {
          return function (W, Z) {
            Z = Z || {};
            var K = o.width();
            m(d),
              Z.open === !0 && se(d, !0),
              Z.open === !1 && fe(d, !0),
              d.open &&
                t.defer(function () {
                  K !== o.width() && ne(d);
                });
          };
        }
        function G(d) {
          return function (W) {
            switch (W.keyCode) {
              case De.SPACE:
              case De.ENTER:
                return D(d)(), W.preventDefault(), W.stopPropagation();
              case De.ESCAPE:
                return fe(d), W.preventDefault(), W.stopPropagation();
              case De.ARROW_RIGHT:
              case De.ARROW_DOWN:
              case De.HOME:
              case De.END:
                return d.open
                  ? (W.keyCode === De.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation())
                  : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function V(d) {
          return function (W) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                W.keyCode)
              ) {
                case De.HOME:
                case De.END:
                  return (
                    W.keyCode === De.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case De.ESCAPE:
                  return (
                    fe(d),
                    d.button.focus(),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case De.ARROW_LEFT:
                case De.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case De.ARROW_RIGHT:
                case De.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
              }
          };
        }
        function ee(d) {
          if (d.links[d.selectedIdx]) {
            var W = d.links[d.selectedIdx];
            W.focus(), j(W);
          }
        }
        function ne(d) {
          d.open && (fe(d, !0), se(d, !0));
        }
        function D(d) {
          return a(function () {
            d.open ? fe(d) : se(d);
          });
        }
        function j(d) {
          return function (W) {
            var Z = e(this),
              K = Z.attr("href");
            if (!Pt.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            K && K.indexOf("#") === 0 && d.open && fe(d);
          };
        }
        function Y(d) {
          return (
            d.outside && i.off("click" + _, d.outside),
            function (W) {
              var Z = e(W.target);
              (g && Z.closest(".w-editor-bem-EditorOverlay").length) || B(d, Z);
            }
          );
        }
        var B = a(function (d, W) {
          if (d.open) {
            var Z = W.closest(".w-nav-menu");
            d.menu.is(Z) || fe(d);
          }
        });
        function U(d, W) {
          var Z = e.data(W, _),
            K = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !K && !f && fe(Z, !0), Z.container.length)) {
            var _e = k(Z);
            Z.links.each(_e), Z.dropdowns.each(_e);
          }
          Z.open && Oe(Z);
        }
        var p = "max-width";
        function k(d) {
          var W = d.container.css(p);
          return (
            W === "none" && (W = ""),
            function (Z, K) {
              (K = e(K)), K.css(p, ""), K.css(p) === "none" && K.css(p, W);
            }
          );
        }
        function z(d, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function C(d, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function se(d, W) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(z),
            d.links.addClass(R),
            d.dropdowns.addClass(S),
            d.dropdownToggle.addClass(L),
            d.dropdownList.addClass(A),
            d.button.addClass(b);
          var Z = d.config,
            K = Z.animation;
          (K === "none" || !n.support.transform || Z.duration <= 0) && (W = !0);
          var _e = Oe(d),
            xt = d.menu.outerHeight(!0),
            Et = d.menu.outerWidth(!0),
            l = d.el.height(),
            E = d.el[0];
          if (
            (U(0, E),
            T.intro(0, E),
            Pt.redraw.up(),
            f || i.on("click" + _, d.outside),
            W)
          ) {
            y();
            return;
          }
          var I = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (d.overlay &&
              ((q = d.menu.prev()), d.overlay.show().append(d.menu)),
            Z.animOver)
          ) {
            n(d.menu)
              .add(I)
              .set({ x: Z.animDirect * Et, height: _e })
              .start({ x: 0 })
              .then(y),
              d.overlay && d.overlay.width(Et);
            return;
          }
          var O = l + xt;
          n(d.menu).add(I).set({ y: -O }).start({ y: 0 }).then(y);
          function y() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function Oe(d) {
          var W = d.config,
            Z = W.docHeight ? i.height() : s.height();
          return (
            W.animOver
              ? d.menu.height(Z)
              : d.el.css("position") !== "fixed" && (Z -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(Z),
            Z
          );
        }
        function fe(d, W) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(b);
          var Z = d.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (W = !0),
            T.outro(0, d.el[0]),
            i.off("click" + _, d.outside),
            W)
          ) {
            n(d.menu).stop(), E();
            return;
          }
          var K = "transform " + Z.duration + "ms " + Z.easing2,
            _e = d.menu.outerHeight(!0),
            xt = d.menu.outerWidth(!0),
            Et = d.el.height();
          if (Z.animOver) {
            n(d.menu)
              .add(K)
              .start({ x: xt * Z.animDirect })
              .then(E);
            return;
          }
          var l = Et + _e;
          n(d.menu).add(K).start({ y: -l }).then(E);
          function E() {
            d.menu.height(""),
              n(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(C),
              d.links.removeClass(R),
              d.dropdowns.removeClass(S),
              d.dropdownToggle.removeClass(L),
              d.dropdownList.removeClass(A),
              d.overlay &&
                d.overlay.children().length &&
                (q.length ? d.menu.insertAfter(q) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  Ds();
  Fs();
  Us();
  Ws();
  vn();
  rm();
  im();
  am();
  um();
  fm();
  vm();
  Em();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-2" },
      },
      mediaQueries: ["main"],
      target: {
        id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd470f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd470f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1645132283476,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4719",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4719",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1643487468757,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4719",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4719",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1643487468757,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-6" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4727",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64df64d1b01060106793c29a|1e2c0d4f-1c76-51fe-c044-f6c947dd4727",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1645068841947,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|f4de846c-0c41-a209-7203-918079d9cc14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1692363436380,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|f4de846c-0c41-a209-7203-918079d9cc14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1692363436380,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|7a2be12f-f2f0-fbab-4f46-e9bbe0542bac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1692363615484,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|7a2be12f-f2f0-fbab-4f46-e9bbe0542bac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1692363615484,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".waves---expandable-item",
        originalId:
          "62d6c03a6672f738121c205d|4f7015af-b754-4c2e-f5d8-1e5018ee5cf6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".waves---expandable-item",
          originalId:
            "62d6c03a6672f738121c205d|4f7015af-b754-4c2e-f5d8-1e5018ee5cf6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658243815639,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".waves---expandable-item",
        originalId:
          "62d6c03a6672f738121c205d|4f7015af-b754-4c2e-f5d8-1e5018ee5cf6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".waves---expandable-item",
          originalId:
            "62d6c03a6672f738121c205d|4f7015af-b754-4c2e-f5d8-1e5018ee5cf6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658243815641,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-14" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64df64d1b01060106793c29a|ff103969-4efa-e8d3-38ae-cfd1b231b64d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64df64d1b01060106793c29a|ff103969-4efa-e8d3-38ae-cfd1b231b64d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1661005113830,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-resource-visual-item",
        originalId:
          "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbfce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-resource-visual-item",
          originalId:
            "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbfce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666047141204,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-visual-features-item.navbar",
        originalId:
          "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbf70",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-visual-features-item.navbar",
          originalId:
            "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbf70",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666047141204,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-340",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-visual-features-item.navbar",
        originalId: "c3a9735d-191d-48c8-95b3-04ebcce6e1f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-visual-features-item.navbar",
          originalId: "c3a9735d-191d-48c8-95b3-04ebcce6e1f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1644990836000,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-resource-visual-item",
        originalId: "b776c43d-79cf-c98c-c2d7-0d04e04556ac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-resource-visual-item",
          originalId: "b776c43d-79cf-c98c-c2d7-0d04e04556ac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1644992378588,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-resource-visual-item",
        originalId: "b776c43d-79cf-c98c-c2d7-0d04e04556ac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-resource-visual-item",
          originalId: "b776c43d-79cf-c98c-c2d7-0d04e04556ac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1644992378541,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-resource-visual-item",
        originalId:
          "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbfce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-resource-visual-item",
          originalId:
            "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbfce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666047141204,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-247",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-visual-features-item.navbar",
        originalId:
          "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbf70",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-visual-features-item.navbar",
          originalId:
            "64df64d1b01060106793c29a|10ffd5d7-82d4-3631-9989-83c8427cbf70",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666047141204,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-263",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cf-visual-features-item.navbar",
        originalId: "c3a9735d-191d-48c8-95b3-04ebcce6e1f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cf-visual-features-item.navbar",
          originalId: "c3a9735d-191d-48c8-95b3-04ebcce6e1f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1644990835995,
    },
  },
  actionLists: {
    "a-3": {
      id: "a-3",
      title: "Call Button / IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-call-arrow",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d25"],
                },
                xValue: 22,
                yValue: -22,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-call-arrow-down",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d24"],
                },
                xValue: 21,
                yValue: -21,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-button-gradient",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d23"],
                },
                xValue: 3,
                yValue: 3,
                locked: true,
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-button-gradient",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d23"],
                },
                zValue: 20,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1620990679203,
    },
    "a-4": {
      id: "a-4",
      title: "Call Button / OUT 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-call-arrow",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d25"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-call-arrow-down",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d24"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-button-gradient",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d23"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-button-gradient",
                  selectorGuids: ["5ec772f2-3272-71f1-411e-0e6726b78d23"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1620990679203,
    },
    "a-6": {
      id: "a-6",
      title: "WAVES / Expand",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expand-line.vertical",
                  selectorGuids: [
                    "64f814da-dc38-6d80-6286-2f70f770e6b1",
                    "64f814da-dc38-6d80-6286-2f70f770e6c0",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expand-line.vertical",
                  selectorGuids: [
                    "64f814da-dc38-6d80-6286-2f70f770e6b1",
                    "64f814da-dc38-6d80-6286-2f70f770e6c0",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658242693387,
    },
    "a-7": {
      id: "a-7",
      title: "WAVES / Collapse",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expand-line.vertical",
                  selectorGuids: [
                    "64f814da-dc38-6d80-6286-2f70f770e6b1",
                    "64f814da-dc38-6d80-6286-2f70f770e6c0",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".waves---expandable-open",
                  selectorGuids: ["64f814da-dc38-6d80-6286-2f70f770e6b5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1658242693387,
    },
    "a-8": {
      id: "a-8",
      title: "Nav Dropdown Hover OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-arrow-icon",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299649"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-underline",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299648"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1644990840277,
    },
    "a-9": {
      id: "a-9",
      title: "Nav Dropdown Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-arrow-icon",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299649"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-underline",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299648"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-arrow-icon",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299649"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cf-nav-underline",
                  selectorGuids: ["fb2e147e-72e4-4b24-a5cb-2e7898299648"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1644990840277,
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
