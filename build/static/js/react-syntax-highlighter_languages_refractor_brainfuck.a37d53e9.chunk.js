"use strict";
(self.webpackChunkreact_scripts = self.webpackChunkreact_scripts || []).push([
  [5539],
  {
    6334: function (e) {
      function a(e) {
        e.languages.brainfuck = {
          pointer: { pattern: /<|>/, alias: "keyword" },
          increment: { pattern: /\+/, alias: "inserted" },
          decrement: { pattern: /-/, alias: "deleted" },
          branching: { pattern: /\[|\]/, alias: "important" },
          operator: /[.,]/,
          comment: /\S+/,
        };
      }
      (e.exports = a), (a.displayName = "brainfuck"), (a.aliases = []);
    },
  },
]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_brainfuck.a37d53e9.chunk.js.map
