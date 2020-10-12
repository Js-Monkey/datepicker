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

export function monthHasDays(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

export function monthFirstDay(year: number, month: number): number {
  const firstDate = new Date(`${year},${month}, 01`)
  return firstDate.getDay()
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

interface Pre {
  preMonth: number
  preYear: number
}

export function getPreMonth<T = number>(m: number, y?: number, cb: () => void = () => null): T {
  let month = --m
  if (month === 0) {
    cb()
    month = 12
  }
  if (y) {
    ++y
    return ({preMonth: month, preYear: y} as unknown) as T
  }
  return (month as unknown) as T
}
