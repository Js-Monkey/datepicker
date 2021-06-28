import {MonthOrYearComponents, pageName, RangeStatus, RangeType} from '../../types/store'
import {RangeClickEvent} from '../../types/components'
import {_EventListener} from "../../types/utils"
import {getNext, getPre, transformDateToArray} from "../../utils/date"
import {visible} from "../../utils/element"

export const utilStyle = {
    'text-align': 'center',
    padding: '5px 20px',
    width: '320px'
}

const rangeClickEvent: RangeClickEvent = {
    complete: {
        plt: 'start',
        status: 'selecting'
    },
    selecting: {
        plt: 'end',
        status: 'complete'
    }
}

export function handleRange(state: MonthOrYearComponents): _EventListener[] {
    return [
        {
            name: 'click',
            handler() {
                const {range} = this
                const current = rangeClickEvent[range.status as RangeStatus]
                range[current.plt] = state.date
                range.status = current.status
            }
        },
        {
            name: 'mouseenter',
            handler() {
                const {range} = this
                if (range.status === 'selecting') {
                    range.end = state.date
                }
            }
        }
    ]
}


export function nextYear(type: keyof RangeType): void {
    const num = this.page === 'year' ? 10 : 1
    this[type].year += num
}

export function preYear(): void {
    const num = this.page === 'year' ? 10 : 1
    this.start.year -= num
}

export function nextMonth(type: keyof RangeType): void {
    const child = this[type]
    ;[child.month, child.year] = getNext(child)
}

export function preMonth(): void {
    const child = this.start
    ;[child.month, child.year] = getPre(child)
}

export function toMonthPage(state: MonthOrYearComponents): void {
    const {date} = state
    if (date) [this.start.year] = transformDateToArray(date)
    this.page = 'month'
}

export function selectYM(state: MonthOrYearComponents,name: 'year'| 'month'): void {
    const {date} = state
    this.start[name] = transformDateToArray(date)[name==='year'? 0: 1]
    this.start.date = date
    this.visible = false
}

export function toDayPage(state: MonthOrYearComponents): void {
    this.start.month = transformDateToArray(state.date)[1]
    this.page = 'date'
}

export function toYearPage(): void {
    this.page = 'year'
}

export function isDayPage(page: pageName): 'none' | 'inline-block' {
    return visible(page === 'date')
}
