"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [4576],
  {
    7150: function (e) {
      function n(e) {
        !(function (e) {
          (e.languages.ignore = {
            comment: /^#.*/m,
            entry: {
              pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
              alias: "string",
              inside: {
                operator: /^!|\*\*?|\?/,
                regex: { pattern: /(^|[^\\])\[[^\[\]]*\]/, lookbehind: !0 },
                punctuation: /\//,
              },
            },
          }),
            (e.languages.gitignore = e.languages.ignore),
            (e.languages.hgignore = e.languages.ignore),
            (e.languages.npmignore = e.languages.ignore);
        })(e);
      }
      (e.exports = n),
        (n.displayName = "ignore"),
        (n.aliases = ["gitignore", "hgignore", "npmignore"]);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ignore.fe0f3d20.chunk.js.map
