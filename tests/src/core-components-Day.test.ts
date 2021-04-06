import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"
import {endDay} from "../../src/core/components/Date&Week"

const state = createState(defaultOptions())
describe('endDay',()=>{
  it('should return HTMLElement',()=>{
    expect(endDay(state)).toBeInstanceOf(HTMLElement)
  })
})

