import {stateUtil} from '../../types/store'
import Options from '../../types/options'

export default function (options: Options): stateUtil {
  return {
    options,
    visible: false,
    page: 'date'
  }
}
