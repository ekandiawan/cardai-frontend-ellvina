"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [5951],
  {
    8174: function (s) {
      function e(s) {
        (s.languages.less = s.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
          s.languages.insertBefore("less", "property", {
            variable: [
              { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
              /@@?[\w-]+/,
            ],
            "mixin-usage": {
              pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
              lookbehind: !0,
              alias: "function",
            },
          });
      }
      (s.exports = e), (e.displayName = "less"), (e.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_less.4a754878.chunk.js.map
