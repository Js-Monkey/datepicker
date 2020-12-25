import {createElement} from '../../utils/element'
import {monthNames} from '../i18n'
import {month} from '../../utils/classes'
import {toDayPage} from './utils'
import {State} from '../../types/store'

export function Month(state: State): Node {
  return document.createElement('div')
  // return createElement(
  //   {
  //     class: [month],
  //     children: monthNames.map((item, idx: number) => {
  //       return {
  //         name: 'span',
  //         text: item,
  //         event: {
  //           cb: toDayPage,
  //           params: [++idx]
  //         }
  //       }
  //     })
  //     // deps: [
  //     //   {
  //     //     name: ['page'],
  //     //     classCb(page) {
  //     //       return page === 'month' ? 'show' : 'hidden'
  //     //     }
  //     //   }
  //     // ]
  //   },
  //   state
  // )
}
