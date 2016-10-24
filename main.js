var LanguageManager = brackets.getModule("language/LanguageManager");

LanguageManager.defineLanguage("go", {
    name: "Go",
    mode: "go",
    fileExtensions: ["go"],
    blockComment: ["/*", "*/"],
    linecomment: ["//"]
});
