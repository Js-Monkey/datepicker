import {
  getYear,
  getMonth,
  getDay,
  daysInAMonth,
  monthFirstDay,
  joinDate,
  transformDate, getYearAndMonth, monthDiff
} from '../../src/utils/date'

describe('date function', () => {
  const date = new Date('1999-9-1')
  const today = new Date()

  describe('getYear', () => {
    test('parameter is empty', () => {
      expect(getYear()).toEqual(getYear(today))
    })

    test('support getYear', () => {
      expect(getYear(date)).toBe(1999)
    })
  })

  describe('getMonth', () => {
    test('parameter is empty', () => {
      expect(getMonth()).toEqual(getMonth(today))
    })

    test('support getMonth', () => {
      expect(getMonth(date)).toBe(9)
    })
  })

  describe('getDay', () => {
    test('parameter is empty', () => {
      expect(getDay()).toEqual(getDay(today))
    })

    test('support getDay', () => {
      expect(getDay(date)).toBe(1)
    })
  })

  describe('daysInAMonth', () => {
    test('support get how many days in a month', () => {
      expect(daysInAMonth(2020, 9)).toBe(30)
    })
  })

  describe('monthFirstDay', () => {
    test('support get the first day of the month', () => {
      expect(monthFirstDay(2020, 9)).toBe(2)
      expect(monthFirstDay(2021, 9)).toBe(3)
      expect(monthFirstDay(1999, 6)).toBe(2)
    })
  })

  describe('joinDate', () => {
    test('year/month/day', () => {
      expect(joinDate(9, 2020, 10)).toBe('2020/9/10')
    })
    test('year/month', () => {
      expect(joinDate(9, 2020)).toBe('2020/9/1')
    })
  })

  describe('getYearAndMonth', () => {
    test('year/month/day', () => {
      expect(getYearAndMonth('2021/10/1')).toEqual([2021, 10, 1])
    })
    test('year/month', () => {
      expect(getYearAndMonth('1999/03')).toEqual([1999, 3])
    })
  })
  describe('transformDate', () => {
    test('transform date to string', () => {
      expect(transformDate(date)).toBe('1999/9/1')
    })
    test('transform date to string', () => {
      expect(transformDate(new Date('2099/10/1'))).toBe('2099/10/1')
    })
    test('transform date to string', () => {
      expect(transformDate(new Date('2009/1/18'))).toBe('2009/1/18')
    })
  })

  describe('diffMonth：比较日期相等，精确到月份', () => {
    test('年份相同，月份相同则返回true', () => {
      expect(monthDiff('1999/9/1', '1999/9/10')).toBeTruthy()
      expect(monthDiff('2009/10/1', '2009/10/12')).toBeTruthy()
      expect(monthDiff('2099/1/1', '2099/1/1')).toBeTruthy()
    })
    test('年份不同，月份相同返回false', () => {
      expect(monthDiff('1999/9/1', '2009/9/10')).toBeFalsy()
      expect(monthDiff('2020/9/1', '2021/9/10')).toBeFalsy()
    })
    test('年份相同，月份不同返回false', () => {
      expect(monthDiff('1999/9/1', '1999/2/10')).toBeFalsy()
      expect(monthDiff('2020/9/1', '2020/10/10')).toBeFalsy()
    })
  })
})
