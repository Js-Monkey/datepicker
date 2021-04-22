import {ComponentStatus, DateData} from "../../../../../types/store"
import {isSame, joinDate, getTenRange} from "../../../../../utils/date"
import {getStatus} from "../public"


export function monthStatus(date: string): ComponentStatus {
    return isSame(this.start.date, date) ? 'selected' : ''
}


export function yearStatus(date: string, idx: number): ComponentStatus {
    return idx === 0 ? 'pre' : idx === 11 ? 'next' : isSame(this.start.date, date, 1) ? 'selected' : ''
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
