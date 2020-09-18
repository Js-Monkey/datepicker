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
