import {watchComponents} from './components'
import {watchDate} from './date'
import Options from '../../types/options'

export function watch(options: Options): void {
  watchComponents()
  watchDate(options)
}
