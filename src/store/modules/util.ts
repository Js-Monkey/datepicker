import {dependence, dependencies, stateUtil, utilsWatcherFn} from '../../types/store'
import {updatePopover} from '../../core/dom/create-popover'
import {get} from '../index'
import {reflectSet} from '../../utils/window'
import {resetAttr} from '../../utils/element'
import {mergeClasses} from '../../utils/merge'

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
    let params = dep.name.map(name => get(name))
    dep.paramsCb && (params = params.concat(dep.paramsCb(...params)))
    dep.textCb && (dep.el.innerText = String(dep.textCb(...params)))
    dep.classCb && resetAttr(dep.el, mergeClasses(dep.classCb(...params), dep.class))
  })
}

const handler = {
  set(target: dependencies, key: 'length' | number, val: dependence) {
    if (key !== 'length' && (!val.textCb || !val.el.innerText)) updateDeps([val])
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
    page: 1,
    deps: {
      startDate: new Proxy([], handler),
      startMonth: new Proxy([], handler),
      startYear: new Proxy([], handler),
      page: new Proxy([], handler)
    }
  }
}
