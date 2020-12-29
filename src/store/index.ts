import {State} from '../types/store'
import initState from './state'

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

  // function removeNull(): void {
  //   states = states.filter(state => Object.keys(state).length > 0) //state滤除空对象
  // }

  function createState(): void {
    states.push(initState())
    uid = states.length - 1
  }

  return {get, set, createState, getState}
})()

export const {get, set, createState, getState} = Store
