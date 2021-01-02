import {State} from './store'
import {CreateElement, CreateElementOptions} from './utils'

export type HeaderType = 'left' | 'right' | 'main'

export type Components = (state: State, ...arg: any) => Node

export interface PopoverType {
  date: (CreateElementOptions | CreateElement)[]
  'date-range': (CreateElementOptions | CreateElement)[]
}
