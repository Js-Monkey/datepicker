import nextTick from '../../utils/nexttick'
import {Rect, Transform} from '../../types/utils'
import {createElement} from '../../utils/element'
import {wrapper} from '../../utils/classes'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export function createPopover(): HTMLElement | Element {
  return createElement({
    class: [wrapper]
  })
}

export function setPopoverLocation(popover: HTMLElement, reference: HTMLElement, placement: keyof Transform): void {
  if (!popover || popover.style.display === 'none') return
  const rect = reference.getBoundingClientRect()
  setPosition(popover, placement, rect)
  setTransform(popover, placement)
}

export function setTransform(el: HTMLElement, placement: keyof Transform): void {
  nextTick(() => (el.style.transform = transform[placement]))
}

export function setPosition(el: HTMLElement, placement: keyof Transform, rect: Rect): void {
  const position = getPosition(rect)
  Array.from(['left', 'top'] as ['left', 'top']).forEach(attr => (el.style[attr] = position[placement][attr] + 'px'))
}

export function getPosition({top, left, height, width}: Rect): Transform<{left: number; top: number}> {
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
