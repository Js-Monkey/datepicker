import {State, States} from '../types/store'
import initState from './state'
import Options from '../types/options'
import {has} from "../utils/has"

const Store = (function () {
  let id = 0
  const states: States = {}

  function getState() {
    return states[id]
  }

  function removeState(id: number) {
    delete states[id]
  }

  function createState(options: Options): State {
    const state = initState(options)
    state.type = options.type
    state._type = state.type.split('-').shift() as 'date'
    state.hasWW = has(state.options.format, 'w')
    state.id = ++id
    states[id] = state
    return state
  }

  return {createState, getState, removeState}
})()

export const {createState, getState, removeState} = Store
