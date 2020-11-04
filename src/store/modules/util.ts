import {dependence, dependencies, stateUtil, utilsWatcherFn} from '../../types/store'
import {updatePopover} from '../../core/dom/create-popover'
import {get} from '../index'
import {reflectSet} from '../../utils/window'

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
    const params = dep.name.map(name => get(name))
    if (dep.textCb) dep.el.innerText = String(dep.textCb(...params))
  })
}

const handler = {
  set(target: dependencies, key: 'length' | number, val: dependence) {
    if (key !== 'length' && !val.el.innerText) updateDeps([val])
    return reflectSet(target, key, val)
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
