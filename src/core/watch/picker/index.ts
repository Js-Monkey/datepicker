import {addWatch} from '../../../observer/watcher'
import Options from '../../../types/options'
import {appendChild} from '../../../utils/element'
import {setPopoverStyle, updatePopover} from '../../dom/updatePopover'
import {Sub} from "../../../types/observer"

const popoverOpt: Sub = {
  key: ['options', 'popover'],
  cb(options: Options, pop: HTMLElement): void {
    if (pop === null) return
    const {insertTo} = this.options
    appendChild(pop, insertTo === 'body' ? undefined : this.reference?.parentNode as HTMLElement)
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
    popoverOpt,
    popoverVisible
  ])
}
