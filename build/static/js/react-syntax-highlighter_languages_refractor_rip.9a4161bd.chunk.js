"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [1768],
  {
    3616: function (e) {
      function t(e) {
        e.languages.rip = {
          comment: { pattern: /#.*/, greedy: !0 },
          char: { pattern: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/, greedy: !0 },
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          regex: {
            pattern:
              /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,
          builtin: /@|\bSystem\b/,
          boolean: /\b(?:false|true)\b/,
          date: /\b\d{4}-\d{2}-\d{2}\b/,
          time: /\b\d{2}:\d{2}:\d{2}\b/,
          datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
          symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
          number: /[+-]?\b(?:\d+\.\d+|\d+)\b/,
          punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
          reference:
            /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
        };
      }
      (e.exports = t), (t.displayName = "rip"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_rip.9a4161bd.chunk.js.map
