"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [5259],
  {
    883: function (e) {
      function t(e) {
        (e.languages.groovy = e.languages.extend("clike", {
          string: [
            {
              pattern:
                /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
              greedy: !0,
            },
            { pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          ],
          keyword:
            /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
          number:
            /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
          operator: {
            pattern:
              /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
            lookbehind: !0,
          },
          punctuation: /\.+|[{}[\];(),:$]/,
        })),
          e.languages.insertBefore("groovy", "string", {
            shebang: { pattern: /#!.+/, alias: "comment" },
          }),
          e.languages.insertBefore("groovy", "punctuation", {
            "spock-block":
              /\b(?:and|cleanup|expect|given|setup|then|when|where):/,
          }),
          e.languages.insertBefore("groovy", "function", {
            annotation: {
              pattern: /(^|[^.])@\w+/,
              lookbehind: !0,
              alias: "punctuation",
            },
          }),
          e.hooks.add("wrap", function (t) {
            if ("groovy" === t.language && "string" === t.type) {
              var n = t.content.value[0];
              if ("'" != n) {
                var a = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
                "$" === n && (a = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
                  (t.content.value = t.content.value
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&")),
                  (t.content = e.highlight(t.content.value, {
                    expression: {
                      pattern: a,
                      lookbehind: !0,
                      inside: e.languages.groovy,
                    },
                  })),
                  t.classes.push("/" === n ? "regex" : "gstring");
              }
            }
          });
      }
      (e.exports = t), (t.displayName = "groovy"), (t.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_groovy.df984023.chunk.js.map
