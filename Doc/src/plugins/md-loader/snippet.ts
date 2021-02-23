import MarkdownIt from 'markdown-it'
import toMd from "./markdown";
/**
 * name: markdown to vue component
 */

/**
 * format:
 * #  H1 title (Required)
 * ## h2 title (Required)
 * ::: Description
 * <HTML>      (Required)
 * <script  lang="js">  (Required)
 *   todo something
 *</script>
 *
 */


const h2 = '##'
const codeBlock = ':::'

export default function transformToVue(source: string): string {
  const snippet = source.split(h2)
  const title = toMd(snippet.shift())
  const snippetStr = snippet.join(h2)
  const componentsEndIdx = snippetStr.lastIndexOf(codeBlock) + codeBlock.length
  const components = snippetStr.slice(0, componentsEndIdx).split(h2)
  console.log(components)
  return `
 <template>
   ${title}

 </template>
 <script >
 export default {

 }
</script>

  `
}
