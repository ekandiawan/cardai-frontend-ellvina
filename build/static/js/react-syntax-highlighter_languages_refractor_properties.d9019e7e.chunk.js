"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [81],
  {
    8614: function (t) {
      function s(t) {
        t.languages.properties = {
          comment: /^[ \t]*[#!].*$/m,
          "attr-value": {
            pattern:
              /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
            lookbehind: !0,
          },
          "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
          punctuation: /[=:]/,
        };
      }
      (t.exports = s), (s.displayName = "properties"), (s.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_properties.d9019e7e.chunk.js.map
