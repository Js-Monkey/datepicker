const json = require("rollup-plugin-json")
const typescript = require("rollup-plugin-typescript2")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const sourceMaps = require("rollup-plugin-sourcemaps")

const {rollup} = require('rollup')
const fs = require('fs')
const {terser} = require('rollup-plugin-terser')


async function build(option: any) {
    const bundle = await rollup(option.input)
    await bundle.write(option.output)
}

const rollupConfig = (config: any) => {
    const {input, fileName, name} = config
    console.log(fileName)
    return {
        input: {
            input,
            plugins: [
                json(),
                typescript({useTsconfigDeclarationDir: true}),
                commonjs(),
                resolve(),
                sourceMaps(),
                terser()
            ],
        },
        output: {
            file: fileName,
            format: 'umd',
            name
        }
    }
}


(async () => {
    try {
        const locales = await fs.readdirSync('./src/locale')
        console.log(locales)
        locales.forEach((l: string) => {
            build(rollupConfig({
                input: `./src/locale/${l}`,
                fileName: `./dist/locale/${l.replace('ts', 'js')}`,
                name: l.split('.ts').shift()
            }))
        })
    } catch (e) {
        console.error(e)
    }
})()
