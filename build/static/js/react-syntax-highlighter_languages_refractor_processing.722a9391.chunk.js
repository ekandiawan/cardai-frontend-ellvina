"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [9770],
  {
    8685: function (e) {
      function s(e) {
        (e.languages.processing = e.languages.extend("clike", {
          keyword:
            /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
          function: /\b\w+(?=\s*\()/,
          operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/,
        })),
          e.languages.insertBefore("processing", "number", {
            constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
            type: {
              pattern:
                /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
              alias: "class-name",
            },
          });
      }
      (e.exports = s), (s.displayName = "processing"), (s.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_processing.722a9391.chunk.js.map
