import {Sub} from "./observer"
import {DatepickerType} from "./options";

export type Listeners<T = Sub> = {
  [key in keyof DatepickerType]: T[]
}

export interface ReverseMap {
  start: 'end',
  end: 'start'
}
