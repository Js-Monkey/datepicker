import {createElement} from '../../utils/element'
import {day} from '../../utils/classes'

export function Year(): Node {
  return createElement({
    class: [day]
  })
}
