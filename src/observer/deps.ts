import {State} from '../types/store'

let uid = 0

function updateView(sub: any) {
  //todo
}

export default class Dep {
  static target: any
  id: number
  subs: any[]
  name: keyof State

  constructor(name: keyof State) {
    this.id = uid++
    this.subs = []
    this.name = name
  }

  addSub(sub: any): void {
    this.subs.push(sub)
  }

  depend(): void {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify(): void {
    console.log(this.subs)
    this.subs.forEach(sub => {
      updateView(sub)
    })
  }
}

Dep.target = null

export function setTarget(target: any): void {
  Dep.target = target
}

export function cleanTarget(): void {
  Dep.target = null
}
