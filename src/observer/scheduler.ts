import {Watcher} from "../types/observer"

export function queueWatcher(watcher: Watcher): void {
  watcher.getter()
}
