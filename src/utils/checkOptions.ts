import Options, {CheckOptions} from '../types/options'
import {isArray, isBoolean, isFunc, isNumber, isString, has, isObject} from './typeOf'


const str = isString
const bool = isBoolean
const num = isNumber
const acceptOptions: CheckOptions = {
    placement: ['top', 'left', 'bottom', 'right'],
    type: ['date', 'date-range', 'week', 'month', 'month-range', 'year', 'year-range'],
    unlinkPanels: bool,
    format: str,
    zIndex: num,
    disabled: bool,
    disabledDate: isFunc,
    style: isObject,
    classes: isArray,
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
