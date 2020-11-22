export interface ObjectProperty {
  get: () => unknown
  set: (...arg: any) => void
}

export interface Dep {
  depend: () => void
  addSub: (sub: any) => void
  updateView: () => void
}
