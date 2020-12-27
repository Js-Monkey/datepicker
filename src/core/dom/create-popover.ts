import nextTick from '../../utils/nexttick'
import {Rect, Transform} from '../../types/utils'
import {createElement} from '../../utils/element'

import {hidden, show, wrapper} from '../../utils/classes'
import {Header} from '../components/header'
import {Day} from '../components/day'
import {State} from '../../types/store'
import {addAttr, toggleCls} from '../../utils/attribute'
import {Month} from '../components/month'
import {Year} from '../components/year'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export function createPopover(state: State): Node {
  return createElement(
    {
      class: [wrapper],
      children: [Header, Day, Month, Year]
    },
    state
  )
}

export function updatePopover(popover: HTMLElement, vis: boolean, state: State): void {
  if (vis) setPopoverLocation(state)
  toggleCls(popover as HTMLElement, [show, hidden], vis)
}

export function setPopoverStyle(el: HTMLElement, zx: number): void {
  const style = {
    position: 'absolute',
    'z-index': zx
  }
  addAttr(el, style, 'style')
}

export function setPopoverLocation(state: State): void {
  const {popover, reference, options} = state
  const {placement} = options
  const rect = reference?.getBoundingClientRect()
  setPosition(popover as HTMLElement, placement as 'left', rect as DOMRect)
  setTransform(popover as HTMLElement, placement as 'left')
}

export function setTransform(el: HTMLElement, plt: keyof Transform): void {
  nextTick(() => (el.style.transform = transform[plt]))
}

export function setPosition(el: HTMLElement, plt: 'top' | 'left' | 'bottom' | 'right', rect: DOMRect): void {
  const position = getPosition(rect)
  Array.from(['left', 'top'] as ['left', 'top']).forEach(attr => (el.style[attr] = position[plt][attr] + 'px'))
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
