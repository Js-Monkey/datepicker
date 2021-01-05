import {_Event} from '../types/event'
import {State} from '../types/store'

export default function clickOutside(e: _Event, state: State): void {
  const {visible, reference, popover} = state
  if (!visible || reference?.contains(e.target as any) || popover?.contains(e.target as any)) return
  state.visible = false
}
