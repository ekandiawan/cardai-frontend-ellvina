"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [902],
  {
    6800: function (a) {
      function e(a) {
        !(function (a) {
          var e = (a.languages.javadoclike = {
            parameter: {
              pattern:
                /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
              lookbehind: !0,
            },
            punctuation: /[{}]/,
          });
          Object.defineProperty(e, "addSupport", {
            value: function (e, t) {
              "string" === typeof e && (e = [e]),
                e.forEach(function (e) {
                  !(function (e, t) {
                    var n = "doc-comment",
                      r = a.languages[e];
                    if (r) {
                      var i = r[n];
                      if (!i) {
                        var o = {
                          "doc-comment": {
                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                            lookbehind: !0,
                            alias: "comment",
                          },
                        };
                        i = (r = a.languages.insertBefore(e, "comment", o))[n];
                      }
                      if (
                        (i instanceof RegExp && (i = r[n] = { pattern: i }),
                        Array.isArray(i))
                      )
                        for (var s = 0, c = i.length; s < c; s++)
                          i[s] instanceof RegExp && (i[s] = { pattern: i[s] }),
                            t(i[s]);
                      else t(i);
                    }
                  })(e, function (a) {
                    a.inside || (a.inside = {}), (a.inside.rest = t);
                  });
                });
            },
          }),
            e.addSupport(["java", "javascript", "php"], e);
        })(a);
      }
      (a.exports = e), (e.displayName = "javadoclike"), (e.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoclike.9d45375a.chunk.js.map
