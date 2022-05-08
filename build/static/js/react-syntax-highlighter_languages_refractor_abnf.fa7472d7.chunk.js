"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [9073],
  {
    6187: function (n) {
      function t(n) {
        !(function (n) {
          var t =
            "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
          n.languages.abnf = {
            comment: /;.*/,
            string: {
              pattern: /(?:%[is])?"[^"\n\r]*"/,
              greedy: !0,
              inside: { punctuation: /^%[is]/ },
            },
            range: {
              pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
              alias: "number",
            },
            terminal: {
              pattern:
                /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
              alias: "number",
            },
            repetition: {
              pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
              lookbehind: !0,
              alias: "operator",
            },
            definition: {
              pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
              lookbehind: !0,
              alias: "keyword",
              inside: { punctuation: /<|>/ },
            },
            "core-rule": {
              pattern: RegExp(
                "(?:(^|[^<\\w-])" + t + "|<" + t + ">)(?![\\w-])",
                "i"
              ),
              lookbehind: !0,
              alias: ["rule", "constant"],
              inside: { punctuation: /<|>/ },
            },
            rule: {
              pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
              lookbehind: !0,
              inside: { punctuation: /<|>/ },
            },
            operator: /=\/?|\//,
            punctuation: /[()\[\]]/,
          };
        })(n);
      }
      (n.exports = t), (t.displayName = "abnf"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_abnf.fa7472d7.chunk.js.map
