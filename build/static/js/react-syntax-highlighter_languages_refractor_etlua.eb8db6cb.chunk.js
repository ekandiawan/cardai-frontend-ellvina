"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8126, 8119, 3047],
  {
    2949: function (e, n, t) {
      var a = t(3294),
        r = t(9791);
      function o(e) {
        e.register(a),
          e.register(r),
          (function (e) {
            (e.languages.etlua = {
              delimiter: { pattern: /^<%[-=]?|-?%>$/, alias: "punctuation" },
              "language-lua": { pattern: /[\s\S]+/, inside: e.languages.lua },
            }),
              e.hooks.add("before-tokenize", function (n) {
                e.languages["markup-templating"].buildPlaceholders(
                  n,
                  "etlua",
                  /<%[\s\S]+?%>/g
                );
              }),
              e.hooks.add("after-tokenize", function (n) {
                e.languages["markup-templating"].tokenizePlaceholders(
                  n,
                  "etlua"
                );
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "etlua"), (o.aliases = []);
    },
    3294: function (e) {
      function n(e) {
        e.languages.lua = {
          comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
          string: {
            pattern:
              /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0,
          },
          number:
            /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
          keyword:
            /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
          function: /(?!\d)\w+(?=\s*(?:[({]))/,
          operator: [
            /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
            { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
          ],
          punctuation: /[\[\](){},;]|\.+|:+/,
        };
      }
      (e.exports = n), (n.displayName = "lua"), (n.aliases = []);
    },
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
                  var i = (t.tokenStack = []);
                  (t.code = t.code.replace(r, function (e) {
                    if ("function" === typeof o && !o(e)) return e;
                    for (
                      var r, u = i.length;
                      -1 !== t.code.indexOf((r = n(a, u)));

                    )
                      ++u;
                    return (i[u] = e), r;
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
                  !(function i(u) {
                    for (var s = 0; s < u.length && !(r >= o.length); s++) {
                      var l = u[s];
                      if (
                        "string" === typeof l ||
                        (l.content && "string" === typeof l.content)
                      ) {
                        var c = o[r],
                          p = t.tokenStack[c],
                          g = "string" === typeof l ? l : l.content,
                          f = n(a, c),
                          d = g.indexOf(f);
                        if (d > -1) {
                          ++r;
                          var k = g.substring(0, d),
                            m = new e.Token(
                              a,
                              e.tokenize(p, t.grammar),
                              "language-" + a,
                              p
                            ),
                            b = g.substring(d + f.length),
                            h = [];
                          k && h.push.apply(h, i([k])),
                            h.push(m),
                            b && h.push.apply(h, i([b])),
                            "string" === typeof l
                              ? u.splice.apply(u, [s, 1].concat(h))
                              : (l.content = h);
                        }
                      } else l.content && i(l.content);
                    }
                    return u;
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
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.eb8db6cb.chunk.js.map
