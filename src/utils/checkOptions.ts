import Options, {AcceptOptions} from '../types/options'
import {isArray, isBoolean, isFunc, isNumber, isString} from './typeOf'
import {has} from "./has"



const acceptOptions: AcceptOptions = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range', 'month', 'month-range'],
  unlinkPanels: isBoolean,
  format: isString,
  zIndex: isNumber,
  disabled: isBoolean,
  disabledDate: isFunc,
  offset: isNumber,
  insertTo: ['body', 'parent'],
  binding: isBoolean,
  themeColor: isString,
  rangeBgColor: isString,
}

export function checkOptions(key: keyof Options, val: unknown): boolean {
  const optionVal = acceptOptions[key] as any
  if (isArray<string>(optionVal)) {
    return has(optionVal, val as string)
  } else {
    return optionVal(val)
  }
}
