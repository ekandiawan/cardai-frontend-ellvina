"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [4659],
  {
    6291: function (e) {
      function n(e) {
        !(function (e) {
          function n(e) {
            return function () {
              return e;
            };
          }
          var r =
              /\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,
            s = "\\b(?!" + r.source + ")(?!\\d)\\w+\\b",
            a = /align\s*\((?:[^()]|\([^()]*\))*\)/.source,
            o =
              "(?!\\s)(?:!?\\s*(?:" +
              /(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(
                /<ALIGN>/g,
                n(a)
              ) +
              "\\s*)*" +
              /(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(
                /<ID>/g,
                n(s)
              ) +
              ")+";
          (e.languages.zig = {
            comment: [
              { pattern: /\/\/[/!].*/, alias: "doc-comment" },
              /\/{2}.*/,
            ],
            string: [
              {
                pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: /([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,
                lookbehind: !0,
                greedy: !0,
              },
            ],
            char: {
              pattern:
                /(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
              lookbehind: !0,
              greedy: !0,
            },
            builtin: /\B@(?!\d)\w+(?=\s*\()/,
            label: {
              pattern:
                /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
              lookbehind: !0,
            },
            "class-name": [
              /\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,
              {
                pattern: RegExp(
                  /(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source
                    .replace(/<TYPE>/g, n(o))
                    .replace(/<ALIGN>/g, n(a))
                ),
                lookbehind: !0,
                inside: null,
              },
              {
                pattern: RegExp(
                  /(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source
                    .replace(/<TYPE>/g, n(o))
                    .replace(/<ALIGN>/g, n(a))
                ),
                lookbehind: !0,
                inside: null,
              },
            ],
            "builtin-type": {
              pattern:
                /\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,
              alias: "keyword",
            },
            keyword: r,
            function: /\b(?!\d)\w+(?=\s*\()/,
            number:
              /\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,
            boolean: /\b(?:false|true)\b/,
            operator:
              /\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,
            punctuation: /[.:,;(){}[\]]/,
          }),
            e.languages.zig["class-name"].forEach(function (n) {
              null === n.inside && (n.inside = e.languages.zig);
            });
        })(e);
      }
      (e.exports = n), (n.displayName = "zig"), (n.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_zig.83784451.chunk.js.map
