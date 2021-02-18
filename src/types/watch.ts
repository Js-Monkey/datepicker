import {Sub} from "./observer"

export interface Listeners<T = Sub>{
  'date-range': T[]
  date: T[]
  month: T[]
  'month-range': T[]
}
