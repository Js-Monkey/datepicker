import {componentsWatchers} from '../../../types/store'

export function watchReference(target: componentsWatchers, key: keyof componentsWatchers, value: unknown) {
  console.log(target[key])
  console.log(value)
}
