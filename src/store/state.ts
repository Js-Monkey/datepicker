import date from './modules/date'
import components from './modules/components'
import utils from './modules/util'
import {State} from '../types/store'
import {observe} from '../observer'

function State(): any {
  return Object.assign(components(), date(), utils())
}

export default function initState(): State {
  const state = State()
  return observe(state)
}
