import nextTick from '../../utils/nexttick'
import {Rect, Transform} from '../../types/utils'
import {addAttr, createElement, toggleCls} from '../../utils/element'
import {hidden, show, wrapper} from '../../utils/classes'
import {StateExtends} from '../../types/store'
import {get} from '../../store'
import {Header} from '../components/header'
import {Day} from '../components/day'
import {Month} from '../components/month'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export function createPopover(): Node {
  // const {type} = get('options')
  return createElement({
    class: [wrapper],
    children: [Header, Day, Month]
  })
}

export function updatePopover(rec: StateExtends, vis: boolean): void {
  const {popover} = rec.components
  if (vis) setPopoverLocation()
  toggleCls(popover as HTMLElement, [show, hidden], vis)
}

export function setPopoverStyle(el: HTMLElement, zx: number): void {
  const style = {
    position: 'absolute',
    zIndex: zx
  }
  addAttr(el, style, 'style')
}

export function setPopoverLocation(): void {
  const pop = get('popover')
  const ref = get('reference')
  const {placement} = get('options')
  const rect = ref.getBoundingClientRect()
  setPosition(pop, placement, rect)
  setTransform(pop, placement)
}

export function setTransform(el: HTMLElement, plt: keyof Transform): void {
  nextTick(() => (el.style.transform = transform[plt]))
}

export function setPosition(el: HTMLElement, plt: keyof Transform, rect: Rect): void {
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
