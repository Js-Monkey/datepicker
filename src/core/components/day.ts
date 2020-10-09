import {createElement} from '../../utils/element'
import {day, dayBar, dayContent} from '../../utils/classes'
import {dayBarNames} from '../i18n'

function content(): Node {
  return createElement({
    class: [dayContent],
    children: Array.from({length: 42}).map((d, idx) => {
      return {text: String(idx + 1), name: 'span'}
    })
  })
}

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
    children: [bar, content]
  })
}
