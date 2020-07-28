import Flex from "./core"
import extend from "./utils/extend"
import Options from "./types/options"

function createInstance():any {
    return function(el:HTMLElement,options:Options){
        const context = new Flex()
        const instance = Flex.create.apply(context,arguments)
        extend(context,instance)
        return instance
    }
}
const flex = createInstance()
flex.create = function create(el:HTMLElement,options:Options) {
    return Flex.create.apply(this,arguments)
}


export default flex
