"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [7176, 3047],
  {
    918: function (e, n, t) {
      var a = t(9791);
      function s(e) {
        e.register(a),
          (function (e) {
            (e.languages.ejs = {
              delimiter: {
                pattern: /^<%[-_=]?|[-_]?%>$/,
                alias: "punctuation",
              },
              comment: /^#[\s\S]*/,
              "language-javascript": {
                pattern: /[\s\S]+/,
                inside: e.languages.javascript,
              },
            }),
              e.hooks.add("before-tokenize", function (n) {
                e.languages["markup-templating"].buildPlaceholders(
                  n,
                  "ejs",
                  /<%(?!%)[\s\S]+?%>/g
                );
              }),
              e.hooks.add("after-tokenize", function (n) {
                e.languages["markup-templating"].tokenizePlaceholders(n, "ejs");
              }),
              (e.languages.eta = e.languages.ejs);
          })(e);
      }
      (e.exports = s), (s.displayName = "ejs"), (s.aliases = ["eta"]);
    },
    9791: function (e) {
      function n(e) {
        !(function (e) {
          function n(e, n) {
            return "___" + e.toUpperCase() + n + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (t, a, s, r) {
                if (t.language === a) {
                  var i = (t.tokenStack = []);
                  (t.code = t.code.replace(s, function (e) {
                    if ("function" === typeof r && !r(e)) return e;
                    for (
                      var s, o = i.length;
                      -1 !== t.code.indexOf((s = n(a, o)));

                    )
                      ++o;
                    return (i[o] = e), s;
                  })),
                    (t.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                  t.grammar = e.languages[a];
                  var s = 0,
                    r = Object.keys(t.tokenStack);
                  !(function i(o) {
                    for (var u = 0; u < o.length && !(s >= r.length); u++) {
                      var c = o[u];
                      if (
                        "string" === typeof c ||
                        (c.content && "string" === typeof c.content)
                      ) {
                        var l = r[s],
                          g = t.tokenStack[l],
                          p = "string" === typeof c ? c : c.content,
                          f = n(a, l),
                          k = p.indexOf(f);
                        if (k > -1) {
                          ++s;
                          var d = p.substring(0, k),
                            m = new e.Token(
                              a,
                              e.tokenize(g, t.grammar),
                              "language-" + a,
                              g
                            ),
                            h = p.substring(k + f.length),
                            v = [];
                          d && v.push.apply(v, i([d])),
                            v.push(m),
                            h && v.push.apply(v, i([h])),
                            "string" === typeof c
                              ? o.splice.apply(o, [u, 1].concat(v))
                              : (c.content = v);
                        }
                      } else c.content && i(c.content);
                    }
                    return o;
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
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.25d57377.chunk.js.map
