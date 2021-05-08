import { visible} from '../../../utils/element'
import {utilStyle} from '../utils'
import {State,RangeType} from '../../../types/store'
import {
    ComponentsType,
    createMonthOrYearComponentsFunction,
    CreateMonthOrYearComponentsOptions,
} from "../../../types/components"
import {monthEvent, yearEvent} from "./event"
import {CreateElementPartOptions} from "../../../types/utils"
import _for from "../../../utils/for"
import {getTenRange} from "../../../utils/date"

let type: keyof RangeType = 'start'
const rows = 3
const cols = 4

const components: CreateMonthOrYearComponentsOptions = {
    month: {
        listener: (child, state) => monthEvent(child)[state.type as 'date'],
        children: (idx, months) => [
            {text: months[idx]}
        ]
    },
    year: {
        listener: (child, state) => yearEvent(child)[state.type as 'date'],
        children: (idx: number) => [{
            text: {
                key: {
                    name: type,
                    childKey: ['year']
                },
                cb: y => String(getTenRange(y)[idx])
            }
        }]
    }
}

export function YM(componentName: keyof ComponentsType =  'month'): createMonthOrYearComponentsFunction {
    const {children, listener} = components[componentName]
    return function (state: State, t: keyof RangeType = 'start'): CreateElementPartOptions{
        type = t

        function tBody(): CreateElementPartOptions {

            return {
                children: tr(),
                name: 'tbody'
            }
        }

        function tr(): CreateElementPartOptions[] {
            return _for((rc) => {
                return {
                    name: 'tr',
                    children: td(rc)
                }
            }, rows)
        }

        function td(rc: number): CreateElementPartOptions[] {
            return _for((cc) => {
                const idx = rc * cols + cc
                const child = state[type][('_' + componentName) as '_month'][idx]
                return {
                    name: 'td',
                    event: {
                        listener: listener(child, state),
                        arg: child
                    },
                    children: children(idx, state.locale.months),
                    class: {
                        key: {
                            name: ['status'],
                            child
                        },
                        cb: (val: string) => val
                    },
                }
            }, cols)
        }

        return {
            name: 'table',
            children: [tBody()],
            class: [componentName],
            style: utilStyle,
            $style: {
                display: {
                    key: ['page'],
                    cb: (page: string) => visible(page === componentName)
                }
            }
        }
    }
}

export const Month = YM()

export function endMonth(state: State): CreateElementPartOptions{
    return Month(state, 'end')
}

export const Year = YM('year')

export function endYear(state: State): CreateElementPartOptions {
    return Year(state, 'end')
}
