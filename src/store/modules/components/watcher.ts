import {componentsWatchers, stateComponent} from '../../../types/store'

export function watchReference(target: stateComponent, key: keyof componentsWatchers, value: unknown) {
  console.log(target[key])
  console.log(value)
}
