import {createState, destroyed,getState} from "../../src/store";
import {mergeOptions} from "../../src/utils/merge";
import defaultOptions from "../../src/core/util/default-options";

describe('can i use Store', () => {
    const options = mergeOptions(defaultOptions(),{
        type: 'date',
        reference: document.createElement('input'),
        popover: document.createElement('div')
    })

    // it('should create state', () => {
    //     expect(createState(options)).toMatchSnapshot(
    //     )
    // })

    it('should destroyed state', () => {
        expect(destroyed()).toBeUndefined()
        expect(getState()).toBeUndefined()
    })

    it('should destroyed state: ids', () => {
        createState(options)
        expect(destroyed([{id:0} as any,{id:1},{id:2}])).toBeUndefined()
    })
})
