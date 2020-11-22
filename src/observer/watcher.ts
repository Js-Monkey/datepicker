import {setTarget} from './deps'
import {Dep} from '../types/observer'

const uid = 0

export default class Watcher {
  opt: any

  constructor(opt: any) {
    this.opt = opt
    setTarget(this.opt)
  }

  addDep(dep: Dep) {
    dep.addSub(this)
  }
}
