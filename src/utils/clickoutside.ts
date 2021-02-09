import {State} from '../types/store'

export default function clickOutside(state: State, e:Event): void {
  const {visible, reference, popover} = state
  if (!visible || reference?.contains(e.target as any) || popover?.contains(e.target as any)) return
  state.visible = false
}
