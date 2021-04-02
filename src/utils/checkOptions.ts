import Options, {AcceptOptions} from '../types/options'
import {isArray, isBoolean, isFunc, isNumber, isString} from './typeOf'
import {has} from "./has"


const str = isString
const bool = isBoolean
const num = isNumber
const acceptOptions: AcceptOptions = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range', 'month', 'month-range','year','year-range'],
  unlinkPanels: bool,
  format: str,
  zIndex: num,
  disabled: bool,
  disabledDate: isFunc,
  offset: num,
  insertTo: ['body', 'parent'],
  binding: bool,
  themeColor: str,
  rangeBgColor: str,
  tdColor: str,
  thColor: str
}

export function checkOptions(key: keyof Options, val: unknown): boolean {
  const optionVal = acceptOptions[key] as any
  if (isArray<string>(optionVal)) {
    return has(optionVal, val as string)
  } else {
    return optionVal(val)
  }
}
