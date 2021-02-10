import {Rect, Transform} from '../../types/utils'
import {addAttr} from '../../utils/attribute'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

const sheetRuleStatus = {
  true: {
    animation: 'show .3s',
    rule: '@keyframes show { 0% {display: block;opacity: 0;transform: scaleY(0.8);} 100% {display: block;opacity: 1;transform: scaleY(1);} }'
  },
  false: {
    animation: 'hidden .3s',
    rule: '@keyframes hidden { 0% {opacity: 1;transform: scaleY(1);} 100% {opacity: 0;visibility: hidden;transform: scaleY(.8);} }'
  }
}

export function updatePopover(popover: HTMLElement, vis: boolean): void {
  const ss = document.styleSheets[0]
  if (vis) {
    popover.style.display = 'inline-block'
    setPopoverLocation.call(this)
  }
  const {animation, rule} = sheetRuleStatus[vis as unknown as 'false']
  popover.style.animation = animation
  if (ss) {
    ss.insertRule(rule, 0)
  } else {
    popover.style.display = vis ? 'inline-block' : 'none'
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
  const {popover, reference, options} = this
  const {placement} = options
  const rect = reference?.getBoundingClientRect()
  setPosition(popover as HTMLElement, placement as 'left', rect as DOMRect)
  setTransform(popover as HTMLElement, placement as 'left')
}

export function setTransform(el: HTMLElement, plt: keyof Transform): void {
  el.style.transform = transform[plt]
}

export function setPosition(el: HTMLElement, plt: 'top' | 'left' | 'bottom' | 'right', rect: DOMRect): void {
  const position = getPosition(rect)
  Array.from(['left', 'top'] as ['left', 'top']).forEach(attr => (el.style[attr] = position[plt][attr] + 'px'))
}

export function getPosition({top, left, height, width}: Rect): Transform<{ left: number; top: number }> {
  const _tTop = top + window.scrollY
  const _bTop = top + height + window.scrollY + 7
  const _tLeft = left + window.scrollX
  const _rLeft = left + width + window.scrollX
  return {
    top: {top: _tTop, left: _tLeft},
    left: {top: _tTop, left: _tLeft},
    bottom: {top: _bTop, left: _rLeft - width},
    right: {top: _tTop, left: _rLeft}
  }
}
