import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"
import {HeaderLeft, HeaderRight} from "../../src/core/components/Header"

const state = createState(defaultOptions())

describe('HeaderLeft',()=>{
  it('should return HTMLElement',()=>{
    expect(HeaderLeft(state)).toBeInstanceOf(HTMLElement)
  })
})

describe('HeaderRight',()=>{
  it('should return HTMLElement',()=>{
    expect(HeaderRight(state)).toBeInstanceOf(HTMLElement)
  })
})
