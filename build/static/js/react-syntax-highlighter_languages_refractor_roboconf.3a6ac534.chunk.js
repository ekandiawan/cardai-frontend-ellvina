"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [3236],
  {
    8320: function (t) {
      function a(t) {
        t.languages.roboconf = {
          comment: /#.*/,
          keyword: {
            pattern:
              /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
            lookbehind: !0,
          },
          component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: "variable" },
          property: /[\w.-]+(?=[ \t]*:)/,
          value: {
            pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
            lookbehind: !0,
            alias: "attr-value",
          },
          optional: { pattern: /\(optional\)/, alias: "builtin" },
          wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: "operator" },
          punctuation: /[{},.;:=]/,
        };
      }
      (t.exports = a), (a.displayName = "roboconf"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_roboconf.3a6ac534.chunk.js.map
