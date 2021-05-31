import {ComponentStatus, DateData, State} from "../../../../types/store"
import {
    isAfter,
    transformDateToArray,
    rangeSort,
    isDisabledDate,
} from "../../../../utils/date"
import {Sub} from "../../../../types/observer"
import {dispatchDateChange, getDate} from "../../../util/method"
import {mergeClasses} from "../../../../utils/merge"
import {DateComponentsType} from "../../../../types/components"
import {has, not} from "../../../../utils/typeOf"
import {monthStatus, yearStatus} from "./month&year/public"
import {dateStatus, weekStatus} from "./date&week/public"
import {GetStatusFunctionsType} from "../../../../types/core"

export function rangeStatus(date: string): ComponentStatus {
    const {start, end} = this.range
    const [max, min] = rangeSort(start, end)
    const isMin = date === min
    const isMax = date === max
    const isInRange = isAfter(max, date) && isAfter(date, min)
    const st = 'range-start'
    const et = 'range-end'
    if (isInRange) return 'inRange'
    if (isMax && isMin) {
        return mergeClasses(st, et) as ComponentStatus
    } else if (isMin) {
        return st
    } else if (isMax) {
        return et
    } else {
        return ''
    }
}

export const startDate: Sub = {
    key: {name: 'start', childKey: ['date']},
    cb(date: string) {
        if (!date) return
        const {start} = this
        ;[start.year, start.month] = transformDateToArray(date)
        this.date = getDate(this)
    }
}

export const endDate: Sub = {
    key: {name: 'end', childKey: ['date']},
    cb(date: string) {
        if (!date) return
        this.date = getDate(this)
    }
}

export const handleSelecting: Sub = {
    key: {name: 'range', childKey: ['status']},
    cb(status: string) {
        if (status === 'selecting') {
            this.range.end = null
        } else {
            finishSelect(this)
        }
    },
}

export const date: Sub = {
    key: ['date'],
    cb: dispatchDateChange
}

export const startMonthAndYear: Sub = {
    key: {name: 'start', childKey: ['year', 'month']},
    cb(year, month, state: DateData) {
        state._month.forEach((item, idx) => {
            item.status = month === (idx + 1) ? 'selected' : ''
        })
        state._year.forEach((item, idx) => {
            const [itemYear] = transformDateToArray(item.date)
            item.status = idx === 0 ? 'pre' : idx === 11 ? 'next' : year === itemYear ? 'selected' : ''
        })
    }
}

export function hoverSelect(type: keyof DateComponentsType = 'month'): Sub {
    return {
        key: {name: 'range', childKey: ['start', 'end']},
        cb() {
            (['start', 'end'] as const).forEach(name => {
                this[name][('_' + type) as '_month'].filter(item => not(item.status, ['pre', 'next'])).forEach((item, idx) => item.status = getStatus(this, item.date, idx, type))
            })
        }
    }
}

export function getStatus(self: State, date: string, idx: number, type: keyof DateComponentsType = 'month', preStatus = ''): ComponentStatus {
    const typeStatus: GetStatusFunctionsType = {
        year: yearStatus,
        month: monthStatus,
        date: dateStatus,
        week: weekStatus
    }

    function isToday() {
        return Date.parse(self.today) === Date.parse(date) ? 'today' : ''
    }

    const method = has(self.type, 'range') ? rangeStatus : typeStatus[type]
    return mergeClasses(method?.call(self, date, idx), isDisabledDate(self, date), isToday(), preStatus) as ''
}

function finishSelect(self: State) {
    self.visible = false
    const {start, end} = self.range
    ;[self.end.date, self.start.date] = rangeSort(start, end)
}
