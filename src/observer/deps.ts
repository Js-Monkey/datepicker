import {Watcher} from '../types/observer'
import {State} from '../types/store'

let uid = 0

export default class Dep<T = State> {
    static target: any
    id: number
    subs: Watcher[]
    state: State
    child: any

    constructor(child: any, state: State) {
        this.id = uid++
        this.subs = []
        this.state = state
        this.child = child
    }

    addSub(sub: Watcher): void {
        this.subs.push(sub)
    }

    depend(): void {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    notify(): void {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

Dep.target = null

export function setTarget(target: Watcher): void {
    Dep.target = target
}

export function clearTarget(): void {
    Dep.target = null
}
