import {codeBlock, htmlBlock, scriptTag} from "./markdownTag"
import toMd from "./markdown"
import {compileTemplate, SFCTemplateCompileOptions} from '@vue/compiler-sfc'
import Better from '../../../../src'
interface VueComponents {
  componentNames: string
  componentsRender: string
}

export default function getRenderComponent(demos: string[]): VueComponents {
  const componentNames = demos.map((_, idx) => '<component' + idx + '/>').join('')
  const _componentsCode = demos.reduce((componentsCode, demoCode, idx) => {
    function filterCode(name: string): string {
      const cut = demoCode.split(name)
      const snippet = cut.shift()
      demoCode = cut.join('')
      return snippet || ''
    }

    const title = filterCode(codeBlock)
    const content = toMd(filterCode(htmlBlock))
    const html = filterCode(scriptTag)
    let script = filterCode('```').split('</script')[0]
    const mdScript = toMd(script).replace('this.','')
    const source = `
    <div class=demo-card>
       <div class=demo-card-component>${html}</div>
         <div class=demo-card-description>
            <h2>${title}</h2>
            <div class=des>${content}</div>
            <div class=highlight>${mdScript}</div>
         </div>
   </div>
    `
    const options: SFCTemplateCompileOptions = {
      id: String(Date.parse(new Date() as any)),
      source,
      filename: 'inline-component',
      compilerOptions: {
        mode: 'function',
      }
    }
    const compiled = compileTemplate(options)
    const renderFunction = `${(compiled.code)}`
    const filterImportField = script.split('import')
    script = filterImportField[filterImportField.length - 1]
    return componentsCode + `component${idx}:(function (){
            const render = (function(){  ${renderFunction}})()
             return defineComponent({
               render,
               mounted(){
                    try{${script}}catch(err){}
               }
            })
         })(),`
  }, '')
  const componentsRender = `{${_componentsCode}}`
  return {
    componentNames,
    componentsRender
  }
}
