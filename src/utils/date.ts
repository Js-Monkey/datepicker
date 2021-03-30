import {DateData, State} from "../types/store";
import {isArray, isObject} from "./typeOf";

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

export function getMinInTen(num: number): number {
  return num - Number(num.toString().slice(-1))
}

export function monthFirstDay(year: number, month: number): number {
  let firstDate = new Date(`${year}/${month}/01`).getDay()
  if (firstDate === 0) firstDate = 7
  return firstDate
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

export function isBigger(source: string | null, target: string | null): boolean {
  if (!source || !target) return false
  return Date.parse(source) > Date.parse(target)
}


export function dateCompare(source: string | null, target: string | null, precision = 2): boolean {
  if (!source || !target) return false
  source = source.split('/').slice(0,precision).join('/')
  target = target.split('/').slice(0,precision).join('/')
  return source === target
}

export function rangeSort(min: string | null, max: string | null): (string | null)[] {
  const range = [min, max]
  return isBigger(min, max) ? range : range.reverse()
}


export function isInRange<T = number>(max: string, min: string, date: string): string {
  return isBigger(max, date) && isBigger(date, min) ? 'in-range' : ''
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
