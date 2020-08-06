const transform = {
  top: `translate(0,-100%)`,
  left: `translate(-100%,0)`,
  bottom: `translate(0,0)`,
  right: `translate(0,0)`
}
export function createPopover() {
  // const {type} = getState('options')
  // return createNode(popoverByType[type as 'date'])
}

export function updatePopover(el: HTMLElement, value: boolean): void {
  if (value) {
    setPopoverLocation(el)
  } else {
  }
}

export function setPopoverLocation(el: HTMLElement) {
  // if (!isHTMLElement(el)) el = getState('popover')
  // if (!el || el.style.display === 'none') return
  // const placement = (getState('options') as any).placement.split('-')[0] as _spm
  // const reference = getState('reference')
  // const rect = reference.getBoundingClientRect()
  // setPosition(el, placement, rect)
  // setTransform(el, placement)
}

export function setTransform(el: HTMLElement, placement: any) {
  // nextTick(() => (el.style.transform = transform[placement as _spm]))
}

export function setPosition(el: HTMLElement, placement: _spm, rect: Rect) {
  // const position = getPosition(rect)
  // Array.from(['left', 'top']).forEach(
  //   attr => (el.style[attr as any] = position[placement as _spm][attr as positionAttr] + 'px')
  // )
}

export function getPosition({top, left, height, width}: Rect) {
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
