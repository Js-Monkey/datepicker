import {codeBlock, htmlBlock, scriptTag} from "./markdownTag";
import toMd from "./markdown";

interface VueComponents {
  componentNames: string
  componentsRender: string
}


function letStringToOneLine(str: string): string {
  return str.replace(/\n/g, '')
    .replace(/\r/gi, '').trim()

}


export default function getRenderComponent(demos: string[]): VueComponents {
  const componentNames = demos.map((_, idx) => '<component' + idx + '/>').join('')
  const _componentsCode = demos.reduce((componentsCode, demoCode, idx) => {
    function filterCode(name: string) {
      const cut = demoCode.split(name)
      const snippet = cut.shift()
      demoCode = cut.join('')
      return snippet
    }
    const title = filterCode(codeBlock)
    const content = filterCode(htmlBlock)
    const html = filterCode(scriptTag)
    const script = filterCode('```').split('</script')[0]
    const mdScript = toMd(script)

    const template = letStringToOneLine(
      `<div class=demo-card>
             <div class=demo>${html}</div>
             <div class=demo-description>
               <h2>${title}</h2>
               <div class=des>${content}</div>
               <div class=highlight>${mdScript}</div>
             </div>
           </div>
  `
    )
    return componentsCode + `"component${idx}":defineComponent({
         template: "${template}",
         mounted() {
            ${script}
         }
      }),`
  }, '')
  const componentsRender = `{${_componentsCode}}`
  return {
    componentNames,
    componentsRender
  }
}
