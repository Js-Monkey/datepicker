import {Sub} from "./observer"

export interface Listeners<T = Sub>{
  'date-range': T[]
  date: T[]
  month: T[]
  'month-range': T[]
  year: T[]
  'year-range': T[]
}

export interface ReverseMap {
  start: 'end',
  end: 'start'
}
