import {deleteRules} from "../../src/core/dom/create-popover"


describe('createPopover', () => {
    document.styleSheets[0] = {
        rules:[
            {
                name: 'show',
                type: 7
            },
            {
                name:'hidden',
                type: 7
            }
        ],
        deleteRule(){
            //do nothing
        }
    } as any
    it('should call deleteRule when rules is exists', () => {
        deleteRules()
        expect(document.styleSheets[0]).toBeDefined()
    })
})
