// const htmlTags = [
//   "a",
//   "abbr",
//   "address",
//   "area",
//   "article",
//   "aside",
//   "audio",
//   "b",
//   "base",
//   "bdi",
//   "bdo",
//   "blockquote",
//   "body",
//   "br",
//   "button",
//   "canvas",
//   "caption",
//   "cite",
//   "code",
//   "col",
//   "colgroup",
//   "data",
//   "datalist",
//   "dd",
//   "del",
//   "details",
//   "dfn",
//   "dialog",
//   "div",
//   "dl",
//   "dt",
//   "em",
//   "embed",
//   "fieldset",
//   "figcaption",
//   "figure",
//   "footer",
//   "form",
//   "h1",
//   "h2",
//   "h3",
//   "h4",
//   "h5",
//   "h6",
//   "head",
//   "header",
//   "hgroup",
//   "hr",
//   "html",
//   "i",
//   "iframe",
//   "img",
//   "input",
//   "ins",
//   "kbd",
//   "label",
//   "legend",
//   "li",
//   "link",
//   "main",
//   "map",
//   "mark",
//   "meta",
//   "meter",
//   "nav",
//   "noscript",
//   "object",
//   "ol",
//   "optgroup",
//   "option",
//   "output",
//   "p",
//   "param",
//   "picture",
//   "pre",
//   "progress",
//   "q",
//   "rp",
//   "rt",
//   "ruby",
//   "s",
//   "samp",
//   "script",
//   "section",
//   "select",
//   "small",
//   "source",
//   "span",
//   "strong",
//   "style",
//   "sub",
//   "summary",
//   "sup",
//   "table",
//   "tbody",
//   "td",
//   "template",
//   "textarea",
//   "tfoot",
//   "th",
//   "thead",
//   "time",
//   "title",
//   "tr",
//   "u",
//   "ul",
//   "var",
//   "video",
//   "wbr",
// ];

export const htmlSuggestions = {
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

// function addHTMLSuggestion(tag: string) {
//   htmlSuggestions.suggestions.push({
//     label: tag,
//     kind: 27,
//     documentation: `<${tag}></${tag}>`,
//     insertText: `<${tag}></${tag}>`,
//   });
// }

// htmlTags.forEach(addHTMLSuggestion);
