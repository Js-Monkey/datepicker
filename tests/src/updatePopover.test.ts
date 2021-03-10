import {setPopoverLocation, sheetRuleStatus} from "../../src/core/dom/updatePopover"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"

describe('sheetRuleStatus', () => {
  it('should match Snapshot', () => {
    expect(sheetRuleStatus).toMatchSnapshot()
  })
  it('should get keyframes rules', () => {
    const transform = 'translate(0,0)'
    const hiddenRules = sheetRuleStatus['false'].rule(transform)
    expect(hiddenRules).toEqual(`@keyframes hidden { 0% {opacity: 1;transform: translate(0,0) scaleY(1);} 100% {opacity: 0;visibility: hidden;transform: translate(0,0) scaleY(.8);} }`)

    const showRules = sheetRuleStatus['true'].rule(transform)
    expect(showRules).toEqual(`@keyframes show { 0% {display: block;opacity: 0;transform:scaleY(.8) translate(0,0);} 100% {display: block;opacity: 1;transform: scaleY(1) translate(0,0);} }`)
  })
})


describe('setPopover', () => {
  it('should set `popover` location when `popover` is in Body', () => {
    const state = createState(defaultOptions())
    const reference = document.createElement('input')
    const popover = document.createElement('div')
    document.body.appendChild(popover)
    state.popover = popover
    state.reference = reference
    setPopoverLocation.call(state)
    expect(popover.style.top).toBe('12px')
    expect(popover.style.left).toBe('0px')
    expect(popover.style.transform).toBe('translate(0,0)')
  })
  it('should set `popover` location when `popover` is in ParentNode', () => {
    const state = createState(defaultOptions())
    const reference = document.createElement('input')
    const parentNode = document.createElement('div')
    parentNode.appendChild(reference)
    const popover = document.createElement('div')
    parentNode.appendChild(popover)
    state.popover = popover
    state.reference = reference
    setPopoverLocation.call(state)
    expect(parentNode.style.position).toBe('relative')
    expect(popover.style.left).toBe('0px')
    expect(popover.style.top).toBe('12px')
  })
})

