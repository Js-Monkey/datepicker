import {addWatch} from '../../../observer/watcher'
import Options from '../../../types/options'
import {appendChild} from '../../../utils/element'
import {updatePopover} from '../../dom/updatePopover'
import {Sub} from "../../../types/observer"

const popoverOpt: Sub = {
  key: ['options', 'popover'],
  cb(options: Options, pop: HTMLElement): void {
    if (pop === null) return
    const {insertTo} = this.options
    appendChild(pop, insertTo === 'body' ? undefined : this.reference?.parentNode as HTMLElement)
  }
}


const popoverVisible = {
  key: ['visible'],
  cb: updatePopover
}

export function watchComponents(): void {
  addWatch([
    popoverOpt,
    popoverVisible
  ])
}
