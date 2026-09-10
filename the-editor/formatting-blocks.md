---
title: "Formatting blocks"
order: 1
outline: deep
---

# Formatting blocks

You can think of each ‘chunk’ of your document as a block of some kind. You might have a ‘Heading 1’ block followed by a paragraph block, followed by a ‘Heading 2’ block… and so on and so forth.

The default block in Lorist is a paragraph block, which basically means every time you start a new line with `Return`, you’ll be typing a paragraph. You can use standard Markdown on a new line to open any other type of block. For example, starting a line with `#` will open a ‘Heading 1’ block, `##` a ‘Heading 2’, etc.

## Common blocks

Here’s some common blocks and their respective Markdown marks:

| Block           | Markdown      |
| --------------- | ------------- |
| Heading 1       | `# Heading`   |
| Heading 2       | `## Heading`  |
| Heading 3       | `### Heading` |
| Paragraph       | plain text    |
| Blockquote      | `> text`      |
| Unordered list  | `- item`      |
| Ordered list    | `1. item`     |
| Task list       | `- [ ] item`  |
| Code block      | ` ``` `       |
| Horizontal rule | `---`         |
| Image           | `![alt](url)` |

## A note on image blocks

You can use the standard `![alt](url)` Markdown to place an image in your document, but you can also drag/drop an image from your device directly into the editor, or simply copy and paste an image into your documents.

Keep in mind that pasting or drag/droppping a _lot_ of images can make document data pretty large. There’s no file size limit to documents or any images you add, but if you’re dumping a lot of hi-res images into your documents, you might start eating up a lot of your disk space.

For larger images that you already have saved, it’s recommended to use the Markdown syntax, where the URL is either `https://{your-image-location}` for images hosted online, or `file://{your-image-location}` for images you already have saved.
