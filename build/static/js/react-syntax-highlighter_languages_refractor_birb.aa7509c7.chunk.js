"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8486],
  {
    609: function (e) {
      function a(e) {
        (e.languages.birb = e.languages.extend("clike", {
          string: { pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/, greedy: !0 },
          "class-name": [
            /\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,
            /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/,
          ],
          keyword:
            /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,
          operator:
            /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
          variable: /\b[a-z_]\w*\b/,
        })),
          e.languages.insertBefore("birb", "function", {
            metadata: { pattern: /<\w+>/, greedy: !0, alias: "symbol" },
          });
      }
      (e.exports = a), (a.displayName = "birb"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_birb.aa7509c7.chunk.js.map
