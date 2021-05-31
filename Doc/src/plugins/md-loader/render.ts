import {codeBlock, htmlBlock, scriptTag} from "./markdownTag"
import toMd from "./markdown"
import {compileTemplate, SFCTemplateCompileOptions} from '@vue/compiler-sfc'

interface VueComponents {
    componentNames: string[]
    componentsRender: string
}

export default function getRenderComponent(demos: string[]): VueComponents {
    demos = demos.filter(item => item)
    const componentNames = demos.map((_, idx) => '<component' + idx + '/>')
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
        const mdScript = toMd(script).replace(/this\./g, 'const ')
        const source = `
   <demo-card>
     <div class=demo-card-description>
         <h2>${title}</h2>
         <div class=des>${content}</div>
     </div>
     <template v-slot:Result>
         <div  class=demo-card-component>${html}</div>
     </template>
     <template v-slot:JS>
         <div class=highlight>${mdScript}</div>
     </template>
   </demo-card>
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
               data(){
                return {
                    clear: null,
                    destroyed: null,
                    update: null,
                    create: null,
                    onChange: null,
                    getCurrentDate: null,
                    getDate: null,
                    open: null,
                    setPlacementLeft: ()=>{},
                    close: null,
                 }
               },
               mounted(){
                    try{${script}}catch(err){console.error(err)}
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
