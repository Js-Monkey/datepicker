export function getFullYear(date?: Date): number {
  if (!date) date = new Date()
  return date.getFullYear()
}

export function getRealMonth(date?: Date): number {
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

export function whatDayIsMonthFirstDay(year: number, month: number): number {
  const firstDate = new Date(`${year},${month}, 01`)
  return firstDate.getDay()
}

export function joinDate<T = number, U = string>(year: T | U, month: T | U, day: T | U) {
  return year + '/' + month + '/' + day
}

export function transformDateToN(date: Date) {
  if (!date) return ''
  return joinDate(getFullYear(date), getRealMonth(date), getDay(date))
}

export function getNextMonth(val: number): number {
  let month = ++val
  if (month === 13) month = 1
  return month
}

export function getBackMonth(val: number): number {
  let month = --val
  if (month === 0) month = 12
  return month
}
