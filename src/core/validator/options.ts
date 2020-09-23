import Options from '../../types/options'
import {isArray, isNumber, isObject, isString} from '../../utils/typeOf'

const acceptOptions: Options = {
  placement: ['top', 'left', 'bottom', 'right'],
  type: ['date', 'date-range'],
  unlinkPanels: [true, false],
  format: (val: unknown) => isString(val),
  zIndex: (val: unknown) => isNumber(val)
}

const checkLists: (keyof Options)[] = ['placement', 'type', 'format']

function checkFormat(name: keyof Options, options: Options) {
  const optionVal = acceptOptions[name] as any
  if (isArray(optionVal)) {
    return optionVal.indexOf(options[name]) === -1
  } else {
    return !optionVal(options[name])
  }
}

function validate(name: keyof Options, options: Options): boolean {
  if (name in options && checkFormat(name, options)) {
    console.error(`Invalid ${name}`)
    return false
  }
  return true
}

export default function validateOptions(options?: Options): boolean {
  if (typeof options === 'undefined') return true
  if (isObject(options)) return checkLists.every(list => validate(list, options))
  console.error('Invalid argument provided.Options must be an object')
  return false
}
