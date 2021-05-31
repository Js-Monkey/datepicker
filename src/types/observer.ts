import {State} from './store'

export interface Dep {
    depend: () => void
    addSub: (sub: any) => void
    updateView: () => void
}


export interface ChildKey {
    name: string
    childKey: SubKey | string[]
    idx?: number
}

export interface ChildKeyPad {
    name: string[]
    child: any
}

export type SubKey = ChildKeyPad | ChildKey | string[]

export interface Sub<T = void> {
    key: SubKey
    cb: (this: State, ...arg: any) => T
}

export interface ReWriteSub<T = void> {
    key: string[]
    cb: (...arg: any) => T
}

export interface Watcher {
    id: number;

    addDep(dep: Dep): void

    update(): void

    getter(): void

    watcher: ReWriteSub
}
