import date from './modules/date'
import components from './modules/components'
import utils from './modules/util'
import {State} from '../types/store'
import {observe} from '../observer'
import Options from '../types/options'

function State(options: Options): State {
  return Object.assign(components(), date(), utils(options))
}

export default function initState(options: Options): State {
  const state = State(options)
  return observe(state)
}
