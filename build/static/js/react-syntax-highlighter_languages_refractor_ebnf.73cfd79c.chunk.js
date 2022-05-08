"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8614],
  {
    1433: function (e) {
      function a(e) {
        e.languages.ebnf = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 },
          special: {
            pattern: /\?[^?\r\n]*\?/,
            greedy: !0,
            alias: "class-name",
          },
          definition: {
            pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
            lookbehind: !0,
            alias: ["rule", "keyword"],
          },
          rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
          punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
          operator: /[-=|*/!]/,
        };
      }
      (e.exports = a), (a.displayName = "ebnf"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ebnf.73cfd79c.chunk.js.map
