"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [4052],
  {
    592: function (e) {
      function n(e) {
        !(function (e) {
          var n =
            /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
          e.languages.nginx = {
            comment: { pattern: /(^|[\s{};])#.*/, lookbehind: !0, greedy: !0 },
            directive: {
              pattern:
                /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                string: {
                  pattern:
                    /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    escape: { pattern: /\\["'\\nrt]/, alias: "entity" },
                    variable: n,
                  },
                },
                comment: { pattern: /(\s)#.*/, lookbehind: !0, greedy: !0 },
                keyword: { pattern: /^\S+/, greedy: !0 },
                boolean: { pattern: /(\s)(?:off|on)(?!\S)/, lookbehind: !0 },
                number: { pattern: /(\s)\d+[a-z]*(?!\S)/i, lookbehind: !0 },
                variable: n,
              },
            },
            punctuation: /[{};]/,
          };
        })(e);
      }
      (e.exports = n), (n.displayName = "nginx"), (n.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_nginx.3a3a3f9d.chunk.js.map
