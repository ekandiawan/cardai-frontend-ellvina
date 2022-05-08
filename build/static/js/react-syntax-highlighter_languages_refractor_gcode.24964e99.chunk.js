"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [9674],
  {
    1769: function (e) {
      function t(e) {
        e.languages.gcode = {
          comment: /;.*|\B\(.*?\)\B/,
          string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
          keyword: /\b[GM]\d+(?:\.\d+)?\b/,
          property: /\b[A-Z]/,
          checksum: { pattern: /(\*)\d+/, lookbehind: !0, alias: "number" },
          punctuation: /[:*]/,
        };
      }
      (e.exports = t), (t.displayName = "gcode"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gcode.24964e99.chunk.js.map
