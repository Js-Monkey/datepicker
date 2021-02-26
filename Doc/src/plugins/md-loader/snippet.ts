import toMd from "./markdown";
import getRenderComponent from "./render";
import {codeBlock, h2} from "./markdownTag";
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


export default function transformToVue(source: string): string {
  const snippet = source.split(h2)
  const title = toMd(snippet.shift())
  const snippetStr = snippet.join(h2)
  const componentsEndIdx = snippetStr.lastIndexOf(codeBlock) + codeBlock.length
  const components = snippetStr.slice(0, componentsEndIdx).split(h2)
  const {componentNames, componentsRender} = getRenderComponent(components)
  return `
 <template>
   ${title}
   ${componentNames}
 </template>
 <script>
 import {defineComponent} from 'vue'
 import * as Vue from 'vue'
 export default {
     name: 'demo-card',
     components: ${componentsRender}
 }
</script>

  `
}
