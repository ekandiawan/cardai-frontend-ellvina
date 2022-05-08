"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [3520],
  {
    6322: function (e) {
      function n(e) {
        !(function (e) {
          function n(e) {
            return RegExp(
              /(\()/.source + "(?:" + e + ")" + /(?=[\s\)])/.source
            );
          }
          function a(e) {
            return RegExp(
              /([\s([])/.source + "(?:" + e + ")" + /(?=[\s)])/.source
            );
          }
          var s = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,
            r = "&" + s,
            t = "(\\()",
            o =
              /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/
                .source,
            i = {
              heading: { pattern: /;;;.*/, alias: ["comment", "title"] },
              comment: /;.*/,
              string: {
                pattern: /"(?:[^"\\]|\\.)*"/,
                greedy: !0,
                inside: {
                  argument: /[-A-Z]+(?=[.,\s])/,
                  symbol: RegExp("`" + s + "'"),
                },
              },
              "quoted-symbol": {
                pattern: RegExp("#?'" + s),
                alias: ["variable", "symbol"],
              },
              "lisp-property": { pattern: RegExp(":" + s), alias: "property" },
              splice: {
                pattern: RegExp(",@?" + s),
                alias: ["symbol", "variable"],
              },
              keyword: [
                {
                  pattern: RegExp(
                    "(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"
                  ),
                  lookbehind: !0,
                },
                {
                  pattern: RegExp(
                    "(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"
                  ),
                  lookbehind: !0,
                },
              ],
              declare: {
                pattern: n(/declare/.source),
                lookbehind: !0,
                alias: "keyword",
              },
              interactive: {
                pattern: n(/interactive/.source),
                lookbehind: !0,
                alias: "keyword",
              },
              boolean: { pattern: a(/nil|t/.source), lookbehind: !0 },
              number: {
                pattern: a(/[-+]?\d+(?:\.\d*)?/.source),
                lookbehind: !0,
              },
              defvar: {
                pattern: RegExp("(\\()def(?:const|custom|group|var)\\s+" + s),
                lookbehind: !0,
                inside: { keyword: /^def[a-z]+/, variable: RegExp(s) },
              },
              defun: {
                pattern: RegExp(
                  t +
                    /(?:cl-)?(?:defmacro|defun\*?)\s+/.source +
                    s +
                    /\s+\(/.source +
                    o +
                    /\)/.source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  keyword: /^(?:cl-)?def\S+/,
                  arguments: null,
                  function: { pattern: RegExp("(^\\s)" + s), lookbehind: !0 },
                  punctuation: /[()]/,
                },
              },
              lambda: {
                pattern: RegExp(
                  "(\\()lambda\\s+\\(\\s*(?:&?" +
                    s +
                    "(?:\\s+&?" +
                    s +
                    ")*\\s*)?\\)"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  keyword: /^lambda/,
                  arguments: null,
                  punctuation: /[()]/,
                },
              },
              car: { pattern: RegExp(t + s), lookbehind: !0 },
              punctuation: [
                /(?:['`,]?\(|[)\[\]])/,
                { pattern: /(\s)\.(?=\s)/, lookbehind: !0 },
              ],
            },
            l = {
              "lisp-marker": RegExp(r),
              varform: {
                pattern: RegExp(
                  /\(/.source + s + /\s+(?=\S)/.source + o + /\)/.source
                ),
                inside: i,
              },
              argument: {
                pattern: RegExp(/(^|[\s(])/.source + s),
                lookbehind: !0,
                alias: "variable",
              },
              rest: i,
            },
            p = "\\S+(?:\\s+\\S+)*",
            u = {
              pattern: RegExp(t + o + "(?=\\))"),
              lookbehind: !0,
              inside: {
                "rest-vars": {
                  pattern: RegExp("&(?:body|rest)\\s+" + p),
                  inside: l,
                },
                "other-marker-vars": {
                  pattern: RegExp("&(?:aux|optional)\\s+" + p),
                  inside: l,
                },
                keys: {
                  pattern: RegExp(
                    "&key\\s+" + p + "(?:\\s+&allow-other-keys)?"
                  ),
                  inside: l,
                },
                argument: { pattern: RegExp(s), alias: "variable" },
                punctuation: /[()]/,
              },
            };
          (i.lambda.inside.arguments = u),
            (i.defun.inside.arguments = e.util.clone(u)),
            (i.defun.inside.arguments.inside.sublist = u),
            (e.languages.lisp = i),
            (e.languages.elisp = i),
            (e.languages.emacs = i),
            (e.languages["emacs-lisp"] = i);
        })(e);
      }
      (e.exports = n), (n.displayName = "lisp"), (n.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp.36a3c802.chunk.js.map
