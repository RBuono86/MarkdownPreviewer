import React, { useState } from "react";
import { marked } from "marked";

const initialMarkdown = `# Welcome to Markdown Previewer!

Type some *Markdown* here, and see the preview on the right.

## Features
- Live preview
- React + TypeScript
- Uses **marked** library

> This is a blockquote.

\`\`\`js
console.log("Hello, world!");
\`\`\`
`;

const MarkdownPreviewer: React.FC = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true, gfm: true });
    return { __html: rawMarkup };
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <textarea
        style={{
          flex: 1,
          marginRight: 20,
          fontSize: 16,
          fontFamily: "monospace",
          padding: 10,
        }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        style={{
          flex: 1,
          padding: 10,
          border: "1px solid #ccc",
          overflowY: "auto",
          backgroundColor: "#fff",
        }}
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default MarkdownPreviewer;
