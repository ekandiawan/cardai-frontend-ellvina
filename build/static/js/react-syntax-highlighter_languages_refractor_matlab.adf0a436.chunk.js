"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8404],
  {
    2046: function (e) {
      function t(e) {
        e.languages.matlab = {
          comment: [/%\{[\s\S]*?\}%/, /%.+/],
          string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
          number:
            /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
          keyword:
            /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
          function: /\b(?!\d)\w+(?=\s*\()/,
          operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
          punctuation: /\.{3}|[.,;\[\](){}!]/,
        };
      }
      (e.exports = t), (t.displayName = "matlab"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_matlab.adf0a436.chunk.js.map
