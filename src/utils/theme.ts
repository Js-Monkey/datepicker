import {on} from "./event"
import {_Event} from "../types/event"
import {State} from "../types/store"
import {has} from "./has";

export function resetHoverColor(el: HTMLElement, theme: string): void {
  function hover(e: _Event) {
    el.style.color = e.type ==='mouseenter' ? theme : ''
  }
  on(el,hover, 'mouseenter')
  on(el,hover, 'mouseleave')
}


export function resetSelectColor(el: HTMLElement, state: State,classes: string): void {
  const {themeColor, rangeBgColor} = state.options
  const div = el.children[0] as HTMLElement
  if(!div) return
  const {style} = div
  if(rangeBgColor){
    style.backgroundColor = has(classes, 'inRange') ? rangeBgColor : ''
  }
  if(themeColor){
    style.backgroundColor = has(classes, ['selected','range-start', 'range-end']) ? themeColor : rangeBgColor ? style.backgroundColor: ''
    style.color = has(classes, 'today') ? themeColor : ''
  }
}
