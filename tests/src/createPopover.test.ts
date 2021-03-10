import {createPopover, deleteRules} from "../../src/core/dom/create-popover"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"


function mockStyleSheets() {
  document.styleSheets[0] = {
    rules: [{
      name: 'hidden',
      type: 7,
      data: 'mockData'
    }] as unknown as CSSRuleList,
    deleteRule(index: number) {
      this.rules.splice(index, 1)
    }
  } as CSSStyleSheet
}


describe('deleteRules', () => {
  it('should delete cssStyleSheet first rule', () => {
    mockStyleSheets()
    const styleSheet = document.styleSheets[0]
    deleteRules()
    expect(styleSheet.rules.length).toEqual(0)
  })
})


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
