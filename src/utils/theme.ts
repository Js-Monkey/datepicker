import {on} from "./event"
import {_Event} from "../types/event"
import {State} from "../types/store"
import {has} from "./typeOf";

export function resetHoverColor(el: HTMLElement, theme: string): void {
  function hover(e: _Event) {
    el.style.color = e.type ==='mouseenter' ? theme : ''
  }
  on(el,hover, 'mouseenter')
  on(el,hover, 'mouseleave')
}


export function resetSelectColor(el: HTMLElement, state: State,classes: string): void {
  const {themeColor, rangeBgColor} = state.options
  const div = Array.from(el.children).shift() as HTMLElement
  if(!div) return
  const {style} = div
  if(rangeBgColor){
    style.backgroundColor = has(classes, 'inRange') ? rangeBgColor : ''
  }
  if(themeColor){
    style.backgroundColor = has(classes, ['selected','range-start', 'range-end', 'weekStart','weekEnd']) ? themeColor : rangeBgColor ? style.backgroundColor: ''
    style.borderColor = has(classes, 'today') ? themeColor : ''
  }
}
