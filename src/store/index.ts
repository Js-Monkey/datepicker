import {State} from '../types/store'
import initState from './state'
import Options from '../types/options'

const Store = (function () {
  let uid = 0
  const states = [] as any[]

  function get(key: keyof State) {
    return states[uid][key]
  }

  function getState() {
    return states[uid]
  }

  function set(key: keyof State, val: unknown) {
    states[uid][key] = val
  }

  function createState(options: Options): void {
    const state = initState(options)
    state.type = options.type
    states.push(state)
    uid = states.length - 1
  }

  return {get, set, createState, getState}
})()

export const {get, set, createState, getState} = Store
