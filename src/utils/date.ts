import {DateData, State} from "../types/store"
import {isArray, isObject} from "./typeOf"
import _for from "./for"

export function date(date: string | null): Date | null {
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

export function transformDate(date: Date): string {
    return joinDate(getMonth(date), getYear(date), getDay(date))
}

export function isAfter(source: string | null, target: string | null): boolean {
    if (!source || !target) return false
    return Date.parse(source) > Date.parse(target)
}


export function isSame(source: string | null, target: string | null, precision = 2): boolean {
    if (!source || !target) return false
    source = source.split('/').slice(0, precision).join('/')
    target = target.split('/').slice(0, precision).join('/')
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


export function getYearWeek(date: Date): number {
    // const [y,m,d] = transformDateToArray(transformDate(date))
    // //const yearStart = this.$locale().yearStart || 1
    // const yearStart = 1
    // if (this.month() === 11 && this.date() > 25) {
    //
    //     // d(this) is for badMutable
    //     const nextYearStartDay = d(this).startOf(Y).add(1, Y).date(yearStart)
    //
    //     const thisEndOfWeek = d(this).endOf(W)
    //     if (nextYearStartDay.isBefore(thisEndOfWeek)) {
    //         return 1
    //     }
    // }
    // const yearStartDay = d(this).startOf(Y).date(yearStart)
    // const yearStartWeek = yearStartDay.startOf(W).subtract(1, MS)
    // const diffInWeek = this.diff(yearStartWeek, W, true)
    // if (diffInWeek < 0) {
    //     return d(this).startOf('week').week()
    // }
    // return Math.ceil(diffInWeek)
   return 1 
}
