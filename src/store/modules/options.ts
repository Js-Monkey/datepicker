import {stateUtil} from '../../types/store'
import Options from '../../types/options'

export default function (options: Options): stateUtil {
    return {
        options,
        visible: false,
        page: 'date',
        locale: {
            name: 'en',
            weekStart: 0,
            weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    }
}
