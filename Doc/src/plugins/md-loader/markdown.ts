import MarkdownIt from "markdown-it"

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
export default function toMd(source: any): string {
  return markdown.render(source, {})
}
