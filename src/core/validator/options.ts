import Options, {AcceptOptions} from '../../types/options'
import {isArray, isNumber, isObject, isString} from '../../utils/typeOf'

const acceptOptions: AcceptOptions = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range'],
  unlinkPanels: [true, false],
  format: (val: unknown) => isString(val),
  zIndex: (val: unknown) => isNumber(val)
}

const checkLists: (keyof Options)[] = ['placement', 'type', 'format']

function checkFormat(name: keyof Options, opt: Options) {
  const optionVal = acceptOptions[name] as any
  if (isArray(optionVal)) {
    return optionVal.indexOf(opt[name]) === -1
  } else {
    return !optionVal(opt[name])
  }
}

function validate(name: keyof Options, opt: Options): boolean {
  if (name in opt && checkFormat(name, opt)) {
    console.error(`Invalid ${name}`)
    return false
  }
  return true
}

export default function validateOptions(opt?: Options): boolean {
  if (typeof opt === 'undefined') return true
  if (isObject(opt)) return checkLists.every(list => validate(list, opt))
  console.error('Invalid argument provided.Options must be an object')
  return false
}
