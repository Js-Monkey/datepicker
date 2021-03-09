import {addWatch} from '../../../observer/watcher'
import {State} from '../../../types/store'
import {on} from '../../../utils/event'
import clickOutside from '../../../utils/clickoutside'
import {listenToScrollParents} from '../../../utils/listenToParents'
import Options from '../../../types/options'
import {appendChild} from '../../../utils/element'
import {setPopoverStyle, updatePopover} from '../../dom/updatePopover'
import {Bind} from "../../../utils/bind"

const reference = {
  key: ['reference'],
  cb(ref: HTMLElement, state: State): void {
    on(ref, () => {
      console.log(ref)
      state.visible = true
    })
    on(document.body, Bind(clickOutside, state))
    listenToScrollParents(ref, state)
  },
  notImmediate: true
}

const popoverOpt = {
  key: ['popover', 'options'],
  cb(pop: HTMLElement, options: Options): void {
    const {insertTo} = this.options
    appendChild(pop, insertTo === 'body' ? undefined : this.reference.parentNode)
    const {zIndex} = options
    setPopoverStyle(pop as HTMLElement, zIndex as number)
  },
  notImmediate: true
}


const popoverVisible = {
  key: ['visible'],
  cb: updatePopover,
  notImmediate: true
}

export function watchComponents(): void {
  addWatch([
    reference,
    popoverOpt,
    popoverVisible
  ])
}
