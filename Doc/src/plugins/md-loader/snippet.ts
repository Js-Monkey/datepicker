import getRenderComponent from "./render"
import {codeBlock, h2} from "./markdownTag"
import toMd from "./markdown"
import mdPlugin from 'vite-plugin-md'
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
  if (source.indexOf(':::') === -1) {
    const plugin = mdPlugin() as any
    return plugin.transform(source, 'xxx.md') as string
  }
  const snippet = source.split(h2)
  const title = snippet[0].slice(0, 2) === '# ' ? toMd(snippet.shift()) : ''
  const snippetStr = snippet.join(h2)
  const componentsEndIdx = snippetStr.lastIndexOf(codeBlock) + codeBlock.length
  const components = snippetStr.slice(0, componentsEndIdx).split(h2)
  const {componentNames, componentsRender} = getRenderComponent(components)
  return `
 <template>
   <div class="demo">
     <div v-if="String(${title})" class="demo-title">
       ${title}
     </div>
     ${componentNames}
   </div>
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
