import Options from "../types/options"

export default class Flex {
    options: Options
    static el:any
    constructor(initialOptions: any) {
        this.options = initialOptions
    }
    static create(el: HTMLInputElement, options: any) {
        return this
    }

}
