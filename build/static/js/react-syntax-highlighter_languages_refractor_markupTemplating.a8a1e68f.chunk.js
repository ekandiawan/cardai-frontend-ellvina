"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [3047],
  {
    9791: function (e) {
      function n(e) {
        !(function (e) {
          function n(e, n) {
            return "___" + e.toUpperCase() + n + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (t, a, r, o) {
                if (t.language === a) {
                  var c = (t.tokenStack = []);
                  (t.code = t.code.replace(r, function (e) {
                    if ("function" === typeof o && !o(e)) return e;
                    for (
                      var r, i = c.length;
                      -1 !== t.code.indexOf((r = n(a, i)));

                    )
                      ++i;
                    return (c[i] = e), r;
                  })),
                    (t.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                  t.grammar = e.languages[a];
                  var r = 0,
                    o = Object.keys(t.tokenStack);
                  !(function c(i) {
                    for (var s = 0; s < i.length && !(r >= o.length); s++) {
                      var u = i[s];
                      if (
                        "string" === typeof u ||
                        (u.content && "string" === typeof u.content)
                      ) {
                        var p = o[r],
                          l = t.tokenStack[p],
                          g = "string" === typeof u ? u : u.content,
                          f = n(a, p),
                          k = g.indexOf(f);
                        if (k > -1) {
                          ++r;
                          var h = g.substring(0, k),
                            m = new e.Token(
                              a,
                              e.tokenize(l, t.grammar),
                              "language-" + a,
                              l
                            ),
                            d = g.substring(k + f.length),
                            y = [];
                          h && y.push.apply(y, c([h])),
                            y.push(m),
                            d && y.push.apply(y, c([d])),
                            "string" === typeof u
                              ? i.splice.apply(i, [s, 1].concat(y))
                              : (u.content = y);
                        }
                      } else u.content && c(u.content);
                    }
                    return i;
                  })(t.tokens);
                }
              },
            },
          });
        })(e);
      }
      (e.exports = n), (n.displayName = "markupTemplating"), (n.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.a8a1e68f.chunk.js.map
