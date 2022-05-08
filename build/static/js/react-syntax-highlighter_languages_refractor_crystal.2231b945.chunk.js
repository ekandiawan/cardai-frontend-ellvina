"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [1130, 369],
  {
    1706: function (e, n, t) {
      var r = t(9082);
      function a(e) {
        e.register(r),
          (function (e) {
            (e.languages.crystal = e.languages.extend("ruby", {
              keyword: [
                /\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,
                { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 },
              ],
              number:
                /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,
              operator: [/->/, e.languages.ruby.operator],
              punctuation: /[(){}[\].,;\\]/,
            })),
              e.languages.insertBefore("crystal", "string-literal", {
                attribute: {
                  pattern: /@\[.*?\]/,
                  inside: {
                    delimiter: { pattern: /^@\[|\]$/, alias: "punctuation" },
                    attribute: {
                      pattern: /^(\s*)\w+/,
                      lookbehind: !0,
                      alias: "class-name",
                    },
                    args: {
                      pattern: /\S(?:[\s\S]*\S)?/,
                      inside: e.languages.crystal,
                    },
                  },
                },
                expansion: {
                  pattern: /\{(?:\{.*?\}|%.*?%)\}/,
                  inside: {
                    content: {
                      pattern: /^(\{.)[\s\S]+(?=.\}$)/,
                      lookbehind: !0,
                      inside: e.languages.crystal,
                    },
                    delimiter: {
                      pattern: /^\{[\{%]|[\}%]\}$/,
                      alias: "operator",
                    },
                  },
                },
                char: {
                  pattern:
                    /'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,
                  greedy: !0,
                },
              });
          })(e);
      }
      (e.exports = a), (a.displayName = "crystal"), (a.aliases = []);
    },
    9082: function (e) {
      function n(e) {
        !(function (e) {
          (e.languages.ruby = e.languages.extend("clike", {
            comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
            "class-name": {
              pattern:
                /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
            operator:
              /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
            punctuation: /[(){}[\].,;]/,
          })),
            e.languages.insertBefore("ruby", "operator", {
              "double-colon": { pattern: /::/, alias: "punctuation" },
            });
          var n = {
            pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
            lookbehind: !0,
            inside: {
              content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby,
              },
              delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
            },
          };
          delete e.languages.ruby.function;
          var t =
              "(?:" +
              [
                /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
                /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
                /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/
                  .source,
                /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source,
              ].join("|") +
              ")",
            r =
              /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/
                .source;
          e.languages.insertBefore("ruby", "keyword", {
            "regex-literal": [
              {
                pattern: RegExp(/%r/.source + t + /[egimnosux]{0,6}/.source),
                greedy: !0,
                inside: { interpolation: n, regex: /[\s\S]+/ },
              },
              {
                pattern:
                  /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                lookbehind: !0,
                greedy: !0,
                inside: { interpolation: n, regex: /[\s\S]+/ },
              },
            ],
            variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
            symbol: [
              {
                pattern: RegExp(/(^|[^:]):/.source + r),
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: RegExp(
                  /([\r\n{(,][ \t]*)/.source + r + /(?=:(?!:))/.source
                ),
                lookbehind: !0,
                greedy: !0,
              },
            ],
            "method-definition": {
              pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
              lookbehind: !0,
              inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./,
              },
            },
          }),
            e.languages.insertBefore("ruby", "string", {
              "string-literal": [
                {
                  pattern: RegExp(/%[qQiIwWs]?/.source + t),
                  greedy: !0,
                  inside: { interpolation: n, string: /[\s\S]+/ },
                },
                {
                  pattern:
                    /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                  greedy: !0,
                  inside: { interpolation: n, string: /[\s\S]+/ },
                },
                {
                  pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                      inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ },
                    },
                    interpolation: n,
                    string: /[\s\S]+/,
                  },
                },
                {
                  pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                      inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/ },
                    },
                    string: /[\s\S]+/,
                  },
                },
              ],
              "command-literal": [
                {
                  pattern: RegExp(/%x/.source + t),
                  greedy: !0,
                  inside: {
                    interpolation: n,
                    command: { pattern: /[\s\S]+/, alias: "string" },
                  },
                },
                {
                  pattern:
                    /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
                  greedy: !0,
                  inside: {
                    interpolation: n,
                    command: { pattern: /[\s\S]+/, alias: "string" },
                  },
                },
              ],
            }),
            delete e.languages.ruby.string,
            e.languages.insertBefore("ruby", "number", {
              builtin:
                /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
              constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/,
            }),
            (e.languages.rb = e.languages.ruby);
        })(e);
      }
      (e.exports = n), (n.displayName = "ruby"), (n.aliases = ["rb"]);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_crystal.2231b945.chunk.js.map
