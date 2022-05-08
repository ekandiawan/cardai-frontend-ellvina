"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [5867],
  {
    9142: function (e) {
      function a(e) {
        e.languages.gedcom = {
          "line-value": {
            pattern:
              /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
            lookbehind: !0,
            inside: {
              pointer: {
                pattern:
                  /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: "variable",
              },
            },
          },
          tag: {
            pattern:
              /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
            lookbehind: !0,
            alias: "string",
          },
          level: { pattern: /(^[\t ]*)\d+/m, lookbehind: !0, alias: "number" },
          pointer: {
            pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
            alias: "variable",
          },
        };
      }
      (e.exports = a), (a.displayName = "gedcom"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_gedcom.d5596aa6.chunk.js.map
