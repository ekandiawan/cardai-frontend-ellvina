"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [7393],
  {
    4216: function (e) {
      function a(e) {
        e.languages.yang = {
          comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
          string: { pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/, greedy: !0 },
          keyword: {
            pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
            lookbehind: !0,
          },
          namespace: { pattern: /(\s)[a-z_][\w.-]*(?=:)/i, lookbehind: !0 },
          boolean: /\b(?:false|true)\b/,
          operator: /\+/,
          punctuation: /[{};:]/,
        };
      }
      (e.exports = a), (a.displayName = "yang"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_yang.136052c7.chunk.js.map
