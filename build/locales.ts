import json from "rollup-plugin-json"
import typescript from "rollup-plugin-typescript2"
import commonjs from  "rollup-plugin-commonjs"
import  resolve from  "rollup-plugin-node-resolve"
import sourceMaps from "rollup-plugin-sourcemaps"

const rollup = require('rollup')
const fs = require('fs')
const { terser } = require('rollup-plugin-terser')


async function build(option: any) {
    const bundle = await rollup.rollup(option.input)
    await bundle.write(option.output)
}

const rollupConfig = (config: any) => {
    const { input, fileName } = config
    return {
        input: {
            input,
            plugins: [
                json(),
                typescript({ useTsconfigDeclarationDir: true }),
                commonjs(),
                resolve(),
                sourceMaps(),
                terser()
            ],
        },
        output: {
            file: fileName,
            format: 'umd'
        }
    }
}


(async () => {
    try {
        const locales = await fs.readdirSync('./src/locale')
        locales.forEach((l: string) => {
            console.log()
            build(rollupConfig({
                input: `./src/locale/${l}`,
                fileName: `./dist/locale/${l.replace('ts','js')}`,
            }))
        })
    } catch (e) {
        console.error(e)
    }
})()
