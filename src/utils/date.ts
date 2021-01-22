export function getYear(date: Date = new Date()): number {
  return date.getFullYear()
}

export function getMonth(date: Date = new Date()): number {
  return date.getMonth() + 1
}

export function getDay(date: Date = new Date()): number {
  return date.getDate()
}

export function getYearAndMonth(date: string): number[] {
  return date.split('/').map(str => Number(str))
}


export function getDate(year: number, month: number, day: number): Date {
  return new Date(joinDate(month, year, day))
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

export function joinDate<T = number, U = string>(
  month?: number | string,
  year?:number | string,
  day?: number | string
): string {
  if(!day) day = 1
  return year + "/" + month + "/" + day
}

export function transformDate(date: Date): string {
  return joinDate(getMonth(date), getYear(date), getDay(date))
}

export function dateDiff(source: string | null, target: string | null): boolean {
  if (!source || !target) return false
  return Date.parse(source) > Date.parse(target)
}

export function isInRange<T = number>(max: string, min: string, date: string): string {
  return dateDiff(max, date) && dateDiff(date, min) ? 'in-range' : ''
}


export function getPre<T = number>(m: number, y: number): [number, number] {
  let month = --m
  if (month === 0) {
    month = 12
    --y
  }
  return [month, y]
}

export function getNext<T = number>(m: number, y: number): [number, number] {
  let month = ++m
  if (month === 13) {
    month = 1
    ++y
  }
  return [month, y]
}
