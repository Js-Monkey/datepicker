import {DateData, State} from "../types/store"
import {isArray, isObject, isString} from "./typeOf"
import _for from "./for"
import {LocaleConfig} from "../types/options"
import {WeekRange} from "../types/utils"

const Ms = 86400000

export function date(date: string | null | number): Date | null {
    if (!date) return null
    return new Date(date)
}

export function getYear(date: Date = new Date()): number {
    return date.getFullYear()
}

export function getMonth(date: Date = new Date()): number {
    return date.getMonth() + 1
}

export function getDay(date: Date = new Date()): number {
    return date.getDate()
}

export function transformDateToArray(date: string): number[] {
    return date.split('/').map(str => Number(str))
}

export function daysInAMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
}

export function getTenRange(year: number): number[] {
    return _for((idx) => year + idx - 1 - Number(year.toString().slice(-1)), 12)
}

export function monthStartDay(year: number, month: number, start = 0): number {
    let firstDate = new Date(`${year}/${month}/01`).getDay()
    if (firstDate === 0) firstDate = 7
    return firstDate - start
}

export function joinDate<T = (number | string)>(month?: T[] | T, year = 1, day = 1): string {
    if (isArray(month)) {
        return month.reverse().join('/') + "/" + year
    }
    return year + "/" + month + "/" + day
}

export function transformDate(date: Date | string): string {
    if (isString(date)) return date
    return joinDate(getMonth(date), getYear(date), getDay(date))
}

export function isAfter(source: string | null | Date, target: string | null | Date): boolean {
    if (!source || !target) return false
    return Date.parse(transformDate(source)) > Date.parse(transformDate(target))
}


export function isSame(source: string | null | Date, target: string | null | Date, precision = 2): boolean {
    if (!source || !target) return false
    source = transformDate(source).split('/').slice(0, precision).join('/')
    target = transformDate(target).split('/').slice(0, precision).join('/')
    return source === target
}

export function rangeSort(min: string | null, max: string | null): (string | null)[] {
    const range = [min, max]
    return isAfter(min, max) ? range : range.reverse()
}


export function isInRange<T = number>(max: string, min: string, date: string): string {
    return isAfter(max, date) && isAfter(date, min) ? 'in-range' : ''
}


export function getPre<T = number>(m: number, y?: number): [number, number] {
    if (isObject(m)) [m, y] = [m.month, m.year]
    let month = --m
    if (month === 0) {
        month = 12
        --(y as number)
    }
    return [month, y as number]
}

export function getNext<T = number>(m: number | DateData, y?: number): [number, number] {
    if (isObject(m)) [m, y] = [m.month, m.year]
    let month = ++m
    if (month === 13) {
        month = 1
        ++(y as number)
    }
    return [month, y as number]
}


export function isDisabledDate(state: State, date: string): string {
    const {disabledDate} = state.options
    return (disabledDate && disabledDate(new Date(date))) ? 'disabled' : ''
}


export function getYearWeek(date: Date, locale: LocaleConfig): number {
    const [y, m, d] = transformDateToArray(transformDate(date))
    const {yearStart, weekStart} = locale
    const {start,end} = getWeekRange(date,weekStart)
    if (m === 12 && d > 25) {
        const nextYearStartDay = new Date(y + 1, 0, yearStart)
        if (isAfter(end, nextYearStartDay)) return 1
    }
    const YearEnd = new Date(y, m - 1, d)
    const YearStart = new Date(y, 0, yearStart)
    const days = Math.round((YearEnd.valueOf() - YearStart.valueOf()) / Ms)
    const diff = (days + ((YearStart.getDay() + 1) - 1)) / 7
    if(diff<=0){
        return getYearWeek(start, locale)
    }
    return Math.ceil(diff)
}

export function getWeeks<S = number>(weekdays: S[], weekStart: number): S[] {
    return weekdays.slice(weekStart, weekdays.length).concat(weekdays.slice(0, weekStart))
}

const defaultWeeks = [0, 1, 2, 3, 4, 5, 6]



export function getWeekRange(d: Date | string, weekStart: number): WeekRange{
    if(isString(d)) d = date(d) as Date
    const weeks = getWeeks(defaultWeeks, weekStart)
    const  startDiff = weeks.findIndex(week => week === (d as Date).getDay())
    const endDiff = 6 - startDiff
    return {
        end:date(Date.parse(transformDate(d)) + (endDiff + 1) * Ms - 1) as Date,
        start: date(Date.parse(transformDate(d)) - startDiff * Ms)  as Date
    }
}
