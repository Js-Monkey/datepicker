//https://github.com/vuejs/vue/blob/dev/src/core/observer/scheduler.js
//mini scheduler
import {Watcher} from "../types/observer"
import {UtilObject} from "../types/utils"
import nextTick from "../utils/nexttick"

const queue: Watcher[] = []
let has: UtilObject = {}
let waiting = false
let index = 0

function flushSchedulerQueue() {
    let watcher, id
    for (index = 0; index < queue.length; index++) {
        watcher = queue[index]
        watcher.getter()
        id = watcher.id
        has[id] = null
    }
    reset()
}

function reset() {
    waiting = false
    has = {}
    queue.length = index = 0
}

export function queueWatcher(watcher: Watcher): void {
    const {id} = watcher
    if (!has[id]) {
        has[id] = true
        queue.push(watcher)
        if (!waiting) {
            waiting = true
            nextTick(() => flushSchedulerQueue())
        }
    }
}
