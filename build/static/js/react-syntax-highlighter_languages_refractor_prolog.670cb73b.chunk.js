"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [4045],
  {
    3160: function (t) {
      function e(t) {
        t.languages.prolog = {
          comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 },
          string: {
            pattern:
              /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
            greedy: !0,
          },
          builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
          function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
          number: /\b\d+(?:\.\d*)?/,
          operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
          punctuation: /[(){}\[\],]/,
        };
      }
      (t.exports = e), (e.displayName = "prolog"), (e.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_prolog.670cb73b.chunk.js.map
