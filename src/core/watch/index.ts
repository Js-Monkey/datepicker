import {on} from '../../utils/event'
import {openPopover, set} from '../../store'
import clickOutside from '../../utils/clickoutside'
import {listenToScrollParents} from '../../utils/listenToParents'
import {isInBody} from '../../utils/isInBody'
import {createPopover} from '../dom/create-popover'
import {appendChild} from '../../utils/element'
import {setPopoverStyle} from '../dom/create-popover'

const reference = {
  name: ['reference'],
  cb(val: HTMLElement): void {
    on(val, openPopover)
    //on(document.body, clickOutside.bind(null, rec))
    listenToScrollParents(val)
    set('popover', createPopover())
  }
}

const popover = {
  name: ['popover'],
  cb(val: HTMLElement): void {
    // const {popover} = target
    // const {zIndex} = rec.utils.options
    // if (!isInBody(popover)) {
    //   appendChild(val as Element)
    //   setPopoverStyle(val as HTMLElement, zIndex as number)
    // }
    appendChild(val as Element)
    setPopoverStyle(val as HTMLElement, 2020)
  }
}
