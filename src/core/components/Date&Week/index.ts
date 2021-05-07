import {createElement} from '../../../utils/element'
import {State, RangeType} from '../../../types/store'
import {isDayPage, utilStyle} from '../utils'
import {CreateElementOptions} from '../../../types/utils'
import {dayEvent} from "./event"
import _for from "../../../utils/for"
import {getWeeks} from "../../../utils/date"

let type: keyof RangeType = 'start'
const rowsCount = 6
const colsCount = 7


const tableStyle = {
    height: '40px',
    width: '40px',
    padding: '3px 0'
}

function config(child: any, name: 'text' | 'status' = 'status') {
    return {
        key: {
            name: [name],
            child
        },
        cb: (val: string) => val
    }
}

function tBody(state: State): Node {
    function tr(): CreateElementOptions[] {
        return _for((rc) => {
            return {
                name: 'tr',
                children: td(rc)
            }
        }, rowsCount)
    }

    function td(rc: number): CreateElementOptions[] {
        return _for((cc) => {
            const idx = rc * 7 + cc
            const child = state[type]._date[idx]
            return {
                name: 'td',
                children: [
                    {
                        text: config(child, 'text'),
                    }
                ],
                style: tableStyle,
                class: config(child),
                event: {
                    listener: dayEvent(child)[state.type as 'date'],
                    arg: child
                }
            }
        }, colsCount)
    }

    return createElement(
        {
            children: tr(),
            name: 'tbody'
        },
        state
    )
}

function bar(state: State): Node {
    const offset = state.locale.weekStart
    const {weekdays} = state.locale
    return createElement(
        {
            name: 'thead',
            children: getWeeks<string>(weekdays, offset).map(name => {
                return {text: name, name: 'th', style: tableStyle}
            })
        },
        state
    )
}

export function Day(state: State, t: keyof RangeType = 'start'): Node {
    type = t
    const classes = ['date']
    if (state.type === 'week') classes.push('week')
    return createElement(
        {
            name: 'table',
            children: [bar, tBody],
            class: classes,
            style: utilStyle,
            $style: {
                display: {
                    key: ['page'],
                    cb: isDayPage
                }
            }
        },
        state
    )
}

export function endDay(state: State): Node {
    return Day(state, 'end')
}
