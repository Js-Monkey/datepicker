import {State, stateKey} from '../types/store'
import initState from './state'

const Store = (function () {
  let uid = 0
  let states = [initState()] as any[]

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
    // todo
    uid = 1 // 防止eslint报错，暂时这样写
  }

  return {get, set, changeUID}
})()

export const {get, set, changeUID} = Store
