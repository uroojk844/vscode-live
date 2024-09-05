import { editor, languages } from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import HTMLWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import CSSWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import JSONWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import TSWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker: function (_, label) {
    switch (label) {
      case "json":
        return new JSONWorker();
      case "css":
      case "scss":
      case "less":
        return new CSSWorker();
      case "html":
        return new HTMLWorker();
      case "typescript":
      case "javascript":
        return new TSWorker();
      default:
        return new EditorWorker();
    }
  },
};

export function createEditor(element: HTMLElement, lang: string) {
  let codeEditor = editor.create(element);
  editor.setTheme("vs-dark");
  editor.setModelLanguage(codeEditor.getModel()!, lang);
  return codeEditor;
}

languages.registerCompletionItemProvider("html", {
  provideCompletionItems: (): any => {
    return {
      suggestions: [
        {
          label: "html",
          kind: 27,
          documentation: "Generate HTML Template",
          insertText: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    
  </body>
</html>`,
        },
      ],
    };
  },
});

languages.registerCompletionItemProvider("css", {
  provideCompletionItems: (): any => {
    return {
      suggestions: [
        {
          label: "reset",
          kind: 27,
          documentation: "Reset default padding, margin and box-sizing",
          insertText: `* {
\tbox-sizing: border-box;
\tmargin:0;
\tpadding:0;
}

html, body {
\twidth: 100%;
\theight: 100%;
}`,
        },
      ],
    };
  },
});
