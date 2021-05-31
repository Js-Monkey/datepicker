import {ComponentStatus, DateData} from "../../../../../types/store"
import {
    daysInAMonth,
    getNext,
    getPre,
    getWeekRange,
    isAfter,
    isSame,
    joinDate,
    monthStartDay
} from "../../../../../utils/date"
import {getStatus} from "../public"

export function updateDays(
    month: number,
    year: number,
    date: string,
    state: DateData
): void {
    const [preMonth, preYear] = getPre(month, year)
    const preDays = daysInAMonth(preYear, preMonth)
    const [fd, days] = [monthStartDay(year, month, this.locale.weekStart), daysInAMonth(year, month)]
    state._date.forEach((item, index) => {
        const idx = index + 1
        const currentIdx = idx - fd
        const status: ComponentStatus = index < fd ? 'pre' : fd + days <= index ? 'next' : ''
        const newDate = {
                pre() {
                    const day = preDays + currentIdx
                    return [String(day), joinDate(getPre(month, year), day)]
                },
                next() {
                    const day = currentIdx - days
                    return [String(day), joinDate(getNext(month, year), day)]
                },
                other() {
                    const date = joinDate(month, year, currentIdx)
                    return [String(currentIdx), date]
                }
            }
        ;[item.text, item.date] = newDate[status || 'other']()
        item.status = getStatus(this, item.date, idx, this._type, status)
    })
}

export function dateStatus(date: string): ComponentStatus {
    return this.start.date === date ? 'selected' : ''
}


export function weekStatus(curDate: Date): ComponentStatus {
    const {date} = this.start
    if (!date) return ''
    const {start, end} = getWeekRange(this.start.date, this.locale.weekStart)
    if (isSame(curDate, start, 3)) return 'weekStart'
    if (isSame(curDate, end, 3)) return 'weekEnd'
    return (isAfter(curDate, start) && isAfter(end, curDate)) ? 'inRangeWeek' : ''
}
