"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8497],
  {
    5699: function (n) {
      function t(n) {
        (n.languages.bnf = {
          string: { pattern: /"[^\r\n"]*"|'[^\r\n']*'/ },
          definition: {
            pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
            alias: ["rule", "keyword"],
            inside: { punctuation: /^<|>$/ },
          },
          rule: { pattern: /<[^<>\r\n\t]+>/, inside: { punctuation: /^<|>$/ } },
          operator: /::=|[|()[\]{}*+?]|\.{3}/,
        }),
          (n.languages.rbnf = n.languages.bnf);
      }
      (n.exports = t), (t.displayName = "bnf"), (t.aliases = ["rbnf"]);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bnf.69c9ee5e.chunk.js.map
