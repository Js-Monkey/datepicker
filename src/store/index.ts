import {StateExtends} from '../types/store'
import initState from './state'
import {_Event} from '../types/event'

const Store = (function () {
  let uid = 0
  let states = [] as any[]

  function getState() {
    return states[uid]
  }

  function get(key: keyof StateExtends) {
    return states[uid][key]
  }

  function set(key: keyof StateExtends, val: unknown) {
    states[uid][key] = val
  }

  // function removeNull(): void {
  //   states = states.filter(state => Object.keys(state).length > 0) //state滤除空对象
  // }

  function createState(): void {
    states.push(initState())
    uid = states.length - 1
  }

  function changeUID(e: _Event) {
    const el = e.target || e
    states = states.filter(s => Object.keys(s).length > 0)
    uid = states.findIndex(s => s.reference === el)
  }

  function closeOther(): void {
    states.forEach((s, idx) => {
      if (idx !== uid && s.popover) {
        s.visible = false
      }
    })
  }

  function openPopover(e: _Event): void {
    changeUID(e)
    closeOther()
    if (states[uid].visible) return
    states[uid].visible = true
  }

  return {get, set, changeUID, openPopover, createState, getState}
})()

export const {get, set, changeUID, openPopover, createState, getState} = Store
