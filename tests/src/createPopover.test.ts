import {createPopover} from "../../src/core/dom/create-popover"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"



describe('createPopover', () => {
  it('should add eventListener on animationend', () => {
    const state = createState(defaultOptions())
    const reference = document.createElement('input')
    state.popover =  createPopover(state)
    document.body.appendChild(state.popover)
    state.reference = reference
    const ev = new Event('animationend')
    state.popover.dispatchEvent(ev)
    expect(state.popover.style.display).toBe('inline-block')
  })
})
