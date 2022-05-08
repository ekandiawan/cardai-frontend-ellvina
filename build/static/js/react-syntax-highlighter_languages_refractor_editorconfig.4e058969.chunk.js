"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [1151],
  {
    9153: function (t) {
      function e(t) {
        t.languages.editorconfig = {
          comment: /[;#].*/,
          section: {
            pattern: /(^[ \t]*)\[.+\]/m,
            lookbehind: !0,
            alias: "selector",
            inside: {
              regex: /\\\\[\[\]{},!?.*]/,
              operator: /[!?]|\.\.|\*{1,2}/,
              punctuation: /[\[\]{},]/,
            },
          },
          key: {
            pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
            lookbehind: !0,
            alias: "attr-name",
          },
          value: {
            pattern: /=.*/,
            alias: "attr-value",
            inside: { punctuation: /^=/ },
          },
        };
      }
      (t.exports = e), (e.displayName = "editorconfig"), (e.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_editorconfig.4e058969.chunk.js.map
