"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [7561],
  {
    2786: function (s, n, e) {
      var a = e(6316);
      function t(s) {
        s.register(a),
          (s.languages.jsonp = s.languages.extend("json", {
            punctuation: /[{}[\]();,.]/,
          })),
          s.languages.insertBefore("jsonp", "punctuation", {
            function:
              /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
          });
      }
      (s.exports = t), (t.displayName = "jsonp"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsonp.7396b679.chunk.js.map
