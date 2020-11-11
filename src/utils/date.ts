export function getYear(date?: Date): number {
  if (!date) date = new Date()
  return date.getFullYear()
}

export function getMonth(date?: Date): number {
  if (!date) date = new Date()
  return date.getMonth() + 1
}

export function getDay(date?: Date): number {
  if (!date) date = new Date()
  return date.getDate()
}

export function getDate(year: number, month: number, day: number): Date {
  return new Date(joinDate(year, month, day))
}

export function daysInAMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

export function monthFirstDay(year: number, month: number): number {
  let firstDate = new Date(`${year},${month}, 01`).getDay()
  if (firstDate === 0) firstDate = 7
  return firstDate
}

export function joinDate<T = number, U = string>(year: T | U, month: T | U, day: T | U): string {
  return year + '/' + month + '/' + day
}

export function transformDate(date: Date): string {
  return joinDate(getYear(date), getMonth(date), getDay(date))
}

export function getNextMonth(m: number, y?: number, cb: () => void = () => null): number {
  let month = ++m
  if (month === 13) {
    cb()
    month = 1
  }
  return month
}

export function getPreMonth<T = number>(m: number, y?: number, cb: () => void = () => null): T {
  let month = --m
  if (month === 0) {
    cb()
    month = 12
    if (y) ++y
  }
  if (y) {
    return ({preMonth: month, preYear: y} as unknown) as T
  }
  return (month as unknown) as T
}
