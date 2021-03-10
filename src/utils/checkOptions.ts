import Options, {AcceptOptions} from '../types/options'
import {isArray, isFunc, isNumber, isString} from './typeOf'

const acceptOptions: AcceptOptions = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range', 'month', 'month-range'],
  unlinkPanels: [true, false],
  format: (val: unknown) => isString(val),
  zIndex: (val: unknown) => isNumber(val),
  disabled: (val: unknown) => isFunc(val),
  offset: (val: unknown) => isNumber(val),
  insertTo: ['body', 'parent']
}

export function checkOptions(key: keyof Options, val: unknown): boolean {
  const optionVal = acceptOptions[key] as any
  if (isArray(optionVal)) {
    return optionVal.indexOf(val) > -1
  } else {
    return optionVal(val)
  }
}
