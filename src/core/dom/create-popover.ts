import nextTick from '../../utils/nexttick'
import {Rect, Transform} from '../../types/utils'

const transform: Transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}

export function createPopover() {
  // const {type} = getState('options')
  // return createNode(popoverByType[type as 'date'])
}

export function setPopoverLocation(popover: HTMLElement, reference: HTMLElement, placement: keyof Transform) {
  if (!popover || popover.style.display === 'none') return
  const rect = reference.getBoundingClientRect()
  setPosition(popover, placement, rect)
  setTransform(popover, placement)
}

export function setTransform(el: HTMLElement, placement: keyof Transform) {
  nextTick(() => (el.style.transform = transform[placement]))
}

export function setPosition(el: HTMLElement, placement: keyof Transform, rect: Rect) {
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

export function dispatchChange() {
  // nextTick(() => {
  //   const {type} = getState('options')
  //   const onChange = getState('dateChange')
  //   const [startDate, endDate] = [getState('date'), getState('endDate')]
  //   const date = type === 'date-range' ? [startDate, endDate] : startDate
  //   if (onChange) {
  //     onChange(date)
  //   }
  // })
}
