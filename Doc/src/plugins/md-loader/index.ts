import type {Plugin} from 'vite'
import transformToVue from "./snippet"

function MarkDownLoader(): Plugin {

  return {
    name: 'vite-plugin-markdown-to-vue',
    enforce: 'pre',
    transform(raw, id) {
      if (id.endsWith('.md')) return transformToVue(raw)
    },
  }
}

export default MarkDownLoader
