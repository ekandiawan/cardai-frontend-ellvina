"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [8513],
  {
    3171: function (e) {
      function t(e) {
        e.languages.monkey = {
          comment: { pattern: /^#Rem\s[\s\S]*?^#End|'.+/im, greedy: !0 },
          string: { pattern: /"[^"\r\n]*"/, greedy: !0 },
          preprocessor: {
            pattern: /(^[ \t]*)#.+/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
          function: /\b\w+(?=\()/,
          "type-char": { pattern: /\b[?%#$]/, alias: "class-name" },
          number: {
            pattern:
              /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
            lookbehind: !0,
          },
          keyword:
            /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
          operator:
            /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
          punctuation: /[.,:;()\[\]]/,
        };
      }
      (e.exports = t), (t.displayName = "monkey"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_monkey.0f2951e9.chunk.js.map
