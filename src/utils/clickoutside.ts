import {getState, set} from '../store'
import {_Event} from '../types/event'

export default function clickOutside(e: _Event): void {
  const {visible, reference, popover} = getState()
  if (!visible || reference?.contains(e.target) || popover?.contains(e.target)) return
  set('visible', false)
}
