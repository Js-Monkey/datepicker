import type { Plugin } from 'vite'
import transformToVue from "./md-loader"

function MarkDownLoader(): Plugin {

  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    transform(raw, id) {
      if (id.endsWith('.md'))
        return transformToVue(raw)
    },
  }
}

export default MarkDownLoader
