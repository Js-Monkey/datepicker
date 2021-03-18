import {Rect, Transform} from '../../types/utils'
import {addAttr} from '../../utils/attribute'
import {isInBody} from "../../utils/isInBody"
import {deleteRules} from "./create-popover"

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export const sheetRuleStatus = {
  true: {
    animation: 'show .3s',
    rule: (orn: string) => `@keyframes show { 0% {display: block;opacity: 0;transform:scaleY(.8) ${orn};} 100% {display: block;opacity: 1;transform: scaleY(1) ${orn};} }`
  },
  false: {
    animation: 'hidden .3s',
    rule: (orn: string) => `@keyframes hidden { 0% {opacity: 1;transform: ${orn} scaleY(1);} 100% {opacity: 0;visibility: hidden;transform: ${orn} scaleY(.8);} }`
  }
}

  export function updatePopover(vis: boolean): void {
  const el = this.popover
  if(!el) return
  const ss = document.styleSheets[0]
  const {zIndex} = this.options
  deleteRules(ss)
  if (vis) {
    el.style.display = 'inline-block'
    setPopoverLocation.call(this)
  }
  setPopoverStyle(el, zIndex)
  const {animation, rule} = sheetRuleStatus[vis as unknown as 'false']
  el.style.animation = animation
  if (ss) {
    ss.insertRule(rule(el.style.transform), 0)
  } else {
    el.style.display = vis ? 'inline-block' : 'none'
  }
}

export function setPopoverStyle(el: HTMLElement, zx: number): void {
  const style = {
    position: 'absolute',
    'z-index': zx
  }
  addAttr(el, style, 'style')
}

export function setPopoverLocation(): void {
  function setTransform(): void {
    popover.style.transform = transform[placement as 'left']
  }

  function setPosition(): void {
    const position = getPosition(rect, offset)
    Array.from(['left', 'top'] as ['left', 'top']).forEach(attr => (popover.style[attr] = position[placement as 'left'][attr] + 'px'))
  }

  function fixReferencePosition() {
    const {parentNode} = reference
    if (parentNode && parentNode.style) parentNode.style.position = 'relative'
  }

  function setCloseToReference() {
    const {offsetWidth, offsetHeight} = reference
    const x = offsetWidth + offset + 'px'
    const transform = {
      bottom: {
        top: (offsetHeight + offset) + 'px',
        left: 0
      },
      top: {
        top: `calc(-100% - ${offset}px)`,
        left: 0
      },
      left: {
        top: 0,
        right: x
      },
      right: {
        top: 0,
        left: x
      }
    }
    const tp = transform[placement as 'top']
    Object.keys(tp).forEach(key => popover.style[key] = tp[key as never])
  }

  const {popover, reference, options} = this
  const {offset, placement} = options
  const rect = reference.getBoundingClientRect()
  const popInBody = isInBody(popover)
  if (popInBody) {
    setPosition()
    setTransform()
  } else {
    setCloseToReference()
    fixReferencePosition()
  }
}

export function getPosition({top, left, height, width}: Rect, offset: number): Transform<{ left: number; top: number }> {
  const _tTop = top + window.scrollY - offset
  const _bTop = top + height + window.scrollY + offset
  const _tLeft = left + window.scrollX
  const _rLeft = left + width + window.scrollX
  return {
    top: {top: _tTop, left: _tLeft},
    left: {top: _tTop, left: _tLeft},
    bottom: {top: _bTop, left: _rLeft - width},
    right: {top: _tTop, left: _rLeft}
  }
}
