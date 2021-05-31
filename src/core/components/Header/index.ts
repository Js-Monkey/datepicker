import {DateComponentsType} from '../../../types/components'
import {visible} from '../../../utils/element'
import {nextMonth, nextYear, preMonth, preYear, isDayPage, toMonthPage, toYearPage} from '../utils'
import {pageName, State, RangeType} from '../../../types/store'
import {getTenRange} from '../../../utils/date'
import {CreateElementPartOptions} from '../../../types/utils'
import {Bind} from "../../../utils/bind"
import {getFormatDate} from "../../util/format"

let name: keyof RangeType = 'start'

const togglePage = {
    display: {
        key: ['page'],
        cb: isDayPage
    }
}

const getRange = (year: number) => {
    const min = getTenRange(year)[1]
    const max = min + 9
    return min + ' - ' + max
}

function format(date: string, state: State): string {
    return getFormatDate.call(state, date, state.locale.yearFormat) as string
}

function yearRange(): CreateElementPartOptions {
    return {
        name: 'span',
        text: {
            key: {
                name: 'start',
                childKey: ['year', '_date']
            },
            cb: (year: number) => getRange(year)
        },
        $style: {
            display: {
                key: ['page'],
                cb: (page: pageName) => visible(page === 'year')
            }
        },
        event: toYearPage
    }
}

function year(state: State): CreateElementPartOptions {
    return {
        name: 'span',
        text: {
            key: {
                name,
                childKey: ['year', '_date']
            },
            cb: year => format(year, state)
        },
        event: toYearPage,
        class: ['pointerCursor'],
        $style: {
            display: {
                key: ['page'],
                cb: (page: pageName) => visible(page !== 'year')
            }
        }
    }
}

function month(state: State): CreateElementPartOptions {
    return {
        name: 'span',
        text: {
            key: {
                name,
                childKey: ['month']
            },
            cb: (idx: number) => state.locale.months[idx - 1]
        },
        class: ['pointerCursor'],
        event: toMonthPage,
        $style: togglePage
    }
}

function date(state: State) {
    const textType: DateComponentsType = {
        date: {
            key: {
                name,
                childKey: ['month', 'year']
            },
            cb: (idx, year) => format(year, state) + ' ' + state.locale.months[idx - 1]
        },
        month: {
            key: {
                name,
                childKey: ['year']
            },
            cb: (year) => year
        },
        year: {
            key: {
                name,
                childKey: ['year', '_date']
            },
            cb: (year: number) => getRange(year)
        },
    }
    return {
        name: 'span',
        text: textType[state._type as 'date']

    }
}

function preYearIcon(): CreateElementPartOptions {
    return {
        name: 'svg',
        text: 'year',
        style: {
            position: 'absolute',
            left: '30px',
            width: '14px',
            height: '14px',
        },
        event: preYear
    }
}

function preMonthIcon() {
    return {
        name: 'svg',
        text: 'month',
        style: {
            position: 'absolute',
            left: '50px',
            width: '14px',
            height: '14px',
        },
        event: preMonth,
        $style: togglePage
    }
}

function nextYearIcon() {
    return {
        name: 'svg',
        text: 'year',
        style: {
            position: 'absolute',
            right: '30px',
            transform: 'rotate(180deg)',
            width: '14px',
            height: '14px',
        },
        event: Bind(nextYear, name)
    }
}

function nextMonthIcon() {
    return {
        name: 'svg',
        text: 'month',
        style: {
            position: 'absolute',
            right: '50px',
            transform: 'rotate(180deg)',
            width: '14px',
            height: '14px',
        },
        event: Bind(nextMonth, name),
        $style: togglePage
    }
}

const headerChildren: any = {
    start: [preYearIcon, preMonthIcon, date],
    main: [preYearIcon, preMonthIcon, yearRange, year, month, nextYearIcon, nextMonthIcon],
    end: [date, nextYearIcon, nextMonthIcon]
}

export function Header(state: State, t?: keyof RangeType): CreateElementPartOptions {
    name = t || 'start'
    return {
        class: ['header'],
        children: headerChildren[t || 'main'],
        style: {
            width: '298px',
            'text-align': 'center'
        }
    }
}

export function HeaderLeft(state: State): CreateElementPartOptions {
    return Header(state, 'start')
}

export function HeaderRight(state: State): CreateElementPartOptions {
    return Header(state, 'end')
}
