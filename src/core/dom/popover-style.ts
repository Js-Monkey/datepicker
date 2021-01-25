import {Rect, Transform} from '../../types/utils'
import {hidden, show} from '../../utils/classes'
import {addAttr, toggleCls} from '../../utils/attribute'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export function updatePopover(popover: HTMLElement, vis: boolean): void {
  if (vis) setPopoverLocation.call(this)
  toggleCls(popover as HTMLElement, [show, hidden], vis)
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
