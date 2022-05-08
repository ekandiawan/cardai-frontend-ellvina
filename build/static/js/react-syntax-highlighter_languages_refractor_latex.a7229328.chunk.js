"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [4732],
  {
    1009: function (a) {
      function e(a) {
        !(function (a) {
          var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
            t = { "equation-command": { pattern: e, alias: "regex" } };
          (a.languages.latex = {
            comment: /%.*/,
            cdata: {
              pattern:
                /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: !0,
            },
            equation: [
              {
                pattern:
                  /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
                inside: t,
                alias: "string",
              },
              {
                pattern:
                  /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                lookbehind: !0,
                inside: t,
                alias: "string",
              },
            ],
            keyword: {
              pattern:
                /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
              lookbehind: !0,
            },
            url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
            headline: {
              pattern:
                /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
              lookbehind: !0,
              alias: "class-name",
            },
            function: { pattern: e, alias: "selector" },
            punctuation: /[[\]{}&]/,
          }),
            (a.languages.tex = a.languages.latex),
            (a.languages.context = a.languages.latex);
        })(a);
      }
      (a.exports = e),
        (e.displayName = "latex"),
        (e.aliases = ["tex", "context"]);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_latex.a7229328.chunk.js.map
