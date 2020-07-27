import Flex from "./core"

function createInstance(config: any):any {
    return function(el:HTMLElement,options:any){
        const context = new Flex(config)
        const instance = Flex.create.apply(context,arguments as any)
        extend(context,instance)
        return instance
    }
}
const flex = createInstance(new InitOptions())
flex.create = function create(el:HTMLElement,options:any) {
    return Flex.create.apply(this,arguments as any)
}


export default flex
