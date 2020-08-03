import {State, stateKey} from '../types/store'

const Store = (function () {
  let uid = 0
  let states = [] as State[]

  function get(key: stateKey) {
    return states[uid][key]
  }

  function set(key: stateKey, data: unknown) {
    states[uid][key] = data
  }

  function removeNull() {
    states = states.filter(state => Object.keys(state).length > 0) //state滤除空对象
  }

  function changeUID(el: HTMLElement) {
    removeNull()
    uid = states.findIndex(state => state.reference === el)
  }

  return {get, set, changeUID}
})()

export const {get, set, changeUID} = Store
