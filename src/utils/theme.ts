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
  const {themeColor} = state.options
  const div = el.children[0] as HTMLElement
  if(themeColor && div){
    if(has(classes, 'selected')){
      div.style.backgroundColor = themeColor
    }else{
      div.style.backgroundColor = ''
    }
    if(has(classes, 'today')){
      div.style.color = themeColor
    }else{
      div.style.color = ''
    }
  }
}
