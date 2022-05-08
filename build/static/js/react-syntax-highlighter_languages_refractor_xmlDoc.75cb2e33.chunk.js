"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [9389],
  {
    8560: function (e) {
      function a(e) {
        !(function (e) {
          function a(a, t) {
            e.languages[a] &&
              e.languages.insertBefore(a, "comment", { "doc-comment": t });
          }
          var t = e.languages.markup.tag,
            n = {
              pattern: /\/\/\/.*/,
              greedy: !0,
              alias: "comment",
              inside: { tag: t },
            },
            s = {
              pattern: /'''.*/,
              greedy: !0,
              alias: "comment",
              inside: { tag: t },
            };
          a("csharp", n), a("fsharp", n), a("vbnet", s);
        })(e);
      }
      (e.exports = a), (a.displayName = "xmlDoc"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_xmlDoc.75cb2e33.chunk.js.map
