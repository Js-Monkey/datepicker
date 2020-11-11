import {
  getYear,
  getMonth,
  getDay,
  daysInAMonth,
  monthFirstDay,
  joinDate,
  transformDate,
  getNextMonth,
  getPreMonth
} from '../../src/utils/date'

describe('date function', () => {
  const date = new Date('2020-9-1')
  const today = new Date()
  test('getYear', () => {
    expect(getYear()).toEqual(getYear(today))
    expect(getYear(date)).toBe(2020)
  })
  test('getMonth', () => {
    expect(getMonth()).toEqual(getMonth(today))
    expect(getMonth(date)).toBe(9)
  })

  test('getDay', () => {
    expect(getDay()).toEqual(getDay(today))
    expect(getDay(date)).toBe(1)
  })

  test('daysInAMonth', () => {
    expect(daysInAMonth(2020, 9)).toBe(30)
  })
  test('monthFirstDay', () => {
    expect(monthFirstDay(2020, 9)).toBe(2)
  })
  test('joinDate', () => {
    expect(joinDate(2020, 9, 10)).toBe('2020/9/10')
  })
  test('transformDate', () => {
    expect(transformDate(date)).toBe('2020/9/1')
  })
  test('getNextMonth', () => {
    expect(getNextMonth(10)).toBe(11)
    expect(getNextMonth(12)).toBe(1)
    expect(getNextMonth(1)).toBe(2)
  })
  test('getPreMonth', () => {
    expect(getPreMonth(10)).toBe(9)
    expect(getPreMonth(12)).toBe(11)
    expect(getPreMonth(1)).toBe(12)
  })
})
