import {dependence, dependencies, stateUtil, utilsWatcherFn} from '../../types/store'
import {updatePopover} from '../../core/dom/create-popover'
import {get} from '../index'

export const uw: utilsWatcherFn = {
  options(): void {
    //todo
  },
  visible(target, key, val, rec): void {
    updatePopover(rec, val as boolean)
  }
}

export function updateDeps(deps: dependencies): void {
  deps.forEach(dep => {
    const params = dep.depName.map(name => get(name))
    dep.el.innerText = dep.fn(...params)
  })
}

const handler = {
  set(target: dependencies, key: 'length' | 0, val: dependence) {
    updateDeps(target)
    return Reflect.set(target, key, val)
  }
}

export default function (): stateUtil {
  return {
    options: {
      placement: 'bottom',
      zIndex: 1000,
      format: 'yyyy-mm-dd'
    },
    visible: false,
    deps: {
      startDate: new Proxy([], handler),
      startMonth: new Proxy([], handler),
      startYear: new Proxy([], handler)
    }
  }
}
