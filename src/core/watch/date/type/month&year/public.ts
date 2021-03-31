import {ComponentStatus, DateData, State} from "../../../../../types/store"
import {isDisabledDate, dateCompare, joinDate, getTenRange} from "../../../../../utils/date"
import {rangeStatus} from "../public"
import {mergeClasses} from "../../../../../utils/merge"
import {RangeComponentName} from "../../../../../types/components"
import {GetStatusFunctionsType} from "../../../../../types/core"

export function monthStatus(state: State, date: string): ComponentStatus {
    return dateCompare(state.start.date, date) ? 'selected' : ''
}


export function yearStatus(state: State, date: string, idx: number): ComponentStatus {
    return idx === 0 ? 'pre' : idx === 11 ? 'next' : dateCompare(state.start.date, date, 1) ? 'selected' : ''
}


export function getStatus(self: State, date: string, idx: number, type: RangeComponentName = 'month',preStatus = ''): ComponentStatus {
    const typeStatus: GetStatusFunctionsType = {
        year: {
            year: yearStatus,
            date: yearStatus,
            'year-range': rangeStatus
        },
        month: {
            month: monthStatus,
            date: monthStatus,
            'month-range': rangeStatus
        },
        date: {
            date: () => self.start.date === date ? 'selected' : '',
            'date-range': () => rangeStatus(self, date)
        }
    }
    function isToday() {
        return Date.parse(self.today) === Date.parse(date) ? 'today' : ''
    }
    return mergeClasses(typeStatus[type][self.type as 'date'](self, date, idx), isDisabledDate(self, date),preStatus,isToday()) as ''
}


export function updateMonth(year: number, date: string, state: DateData): void {
    state._month.forEach((item, idx) => {
        item.date = joinDate(idx + 1, year)
        item.status = getStatus(this, item.date, idx)
    })
}

export function updateYear(year: number, date: string, state: DateData): void {
    const range = getTenRange(year)
    state._year.forEach((item, idx) => {
        item.date = joinDate(1, range[idx])
        const status = idx === 0 ? 'pre' : idx === 11 ? 'next':''
        item.status = getStatus(this, item.date, idx, 'year',status)
    })
}
