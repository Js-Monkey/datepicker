import {State} from '../types/store'
import initState from './state'
import Options from '../types/options'

const Store = (function () {
  let uid = 0
  const states = [] as State[]

  function getState() {
    return states[uid]
  }

  function createState(options: Options): State {
    const state = initState(options)
    state.type = options.type
    states.push(state)
    uid = states.length - 1
    return state
  }

  return {createState, getState}
})()

export const {createState, getState} = Store
