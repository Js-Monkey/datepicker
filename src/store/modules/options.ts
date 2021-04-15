import {stateUtil} from '../../types/store'
import Options, {LocaleConfig} from '../../types/options'

let locale: LocaleConfig = {
    name: 'en',
    weekStart: 0,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearFormat: 'yyyy',
    weekFormat: 'yyyy-wwth'
}

export default function (options: Options): stateUtil {

    return {
        options,
        visible: false,
        page: 'date',
        locale
    }
}


export function pickerLocale(config: LocaleConfig): void {
    locale = Object.assign({}, config)
}
