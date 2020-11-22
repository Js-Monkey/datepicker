import {stateComponent} from '../../types/store'

// export const cw: componentsWatcherFn = {
//   reference(target, key, val, rec): void {
//     on(val, openPopover)
//     on(document.body, clickOutside.bind(null, rec))
//     listenToScrollParents(val as HTMLElement)
//     set('popover', createPopover())
//   },
//   popover(target, key, value, rec): void {
//     const {popover} = target
//     const {zIndex} = rec.utils.options
//     if (!isInBody(popover)) {
//       appendChild(value as Element)
//       setPopoverStyle(value as HTMLElement, zIndex as number)
//     }
//   }
// }

const dayComponents = Array.from({length: 42}).map((_: unknown) => {
  return {
    el: null,
    text: ''
  }
})

export default function (): stateComponent {
  return {
    reference: null,
    popover: null,
    dayComponents
  }
}
