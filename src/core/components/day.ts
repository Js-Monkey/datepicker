import {createElement} from '../../utils/element'
import {day, dayBar} from '../../utils/classes'
import {dayBarNames} from '../i18n'

function bar(): Node {
  return createElement({
    class: [dayBar],
    children: dayBarNames.map(name => {
      return {text: name, name: 'span'}
    })
  })
}

export function Day(): Node {
  return createElement({
    class: [day],
    children: [bar]
  })
}
