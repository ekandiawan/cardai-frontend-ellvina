"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [7661],
  {
    2960: function (e) {
      function t(e) {
        !(function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            s = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function o(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function p(t, n, r) {
            var a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function l(t) {
            var n = {};
            n["interpolation-punctuation"] = a;
            var s = e.tokenize(t, n);
            if (3 === s.length) {
              var i = [1, 1];
              i.push.apply(i, p(s[1], e.languages.javascript, "javascript")),
                s.splice.apply(s, i);
            }
            return new e.Token("interpolation", s, r.alias, t);
          }
          function u(t, n, r) {
            var a = e.tokenize(t, {
                interpolation: { pattern: RegExp(s), lookbehind: !0 },
              }),
              i = 0,
              u = {},
              c = p(
                a
                  .map(function (e) {
                    if ("string" === typeof e) return e;
                    for (
                      var n, a = e.content;
                      -1 !== t.indexOf((n = o(i++, r)));

                    );
                    return (u[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              g = Object.keys(u);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= g.length) return;
                  var r = t[n];
                  if ("string" === typeof r || "string" === typeof r.content) {
                    var a = g[i],
                      s = "string" === typeof r ? r : r.content,
                      o = s.indexOf(a);
                    if (-1 !== o) {
                      ++i;
                      var p = s.substring(0, o),
                        c = l(u[a]),
                        f = s.substring(o + a.length),
                        y = [];
                      if ((p && y.push(p), y.push(c), f)) {
                        var v = [f];
                        e(v), y.push.apply(y, v);
                      }
                      "string" === typeof r
                        ? (t.splice.apply(t, [n, 1].concat(y)),
                          (n += y.length - 1))
                        : (r.content = y);
                    }
                  } else {
                    var d = r.content;
                    Array.isArray(d) ? e(d) : e([d]);
                  }
                }
              })(c),
              new e.Token(r, c, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:markdown|md)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          var c = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function g(e) {
            return "string" === typeof e
              ? e
              : Array.isArray(e)
              ? e.map(g).join("")
              : g(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in c &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var s = n[r];
                  if ("string" !== typeof s) {
                    var i = s.content;
                    if (Array.isArray(i))
                      if ("template-string" === s.type) {
                        var o = i[1];
                        if (
                          3 === i.length &&
                          "string" !== typeof o &&
                          "embedded-code" === o.type
                        ) {
                          var p = g(o),
                            l = o.alias,
                            c = Array.isArray(l) ? l[0] : l,
                            f = e.languages[c];
                          if (!f) continue;
                          i[1] = u(p, f, c);
                        }
                      } else t(i);
                    else "string" !== typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(e);
      }
      (e.exports = t), (t.displayName = "jsTemplates"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsTemplates.868e1fdb.chunk.js.map
