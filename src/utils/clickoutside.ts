import {set} from '../store'
import {StateExtends} from '../types/store'

export default function clickOutside(rec: StateExtends, e: any): void {
  const {visible} = rec.utils
  const {reference, popover} = rec.components
  if (!visible || reference?.contains(e.target) || popover?.contains(e.target)) return
  set('visible', false)
}
