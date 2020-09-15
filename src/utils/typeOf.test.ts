import {isString, isArray, isFunc, isNumber, isObject} from './typeOf'

describe('type-of', () => {
  test('variable is number', () => {
    expect(isNumber(12)).toBe(true)
    expect(isNumber('123')).toBe(false)
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Number('123'))).toBe(true)
  })

  test('variable is Array', () => {
    expect(isArray(12)).toBe(false)
    expect(isArray([123])).toBe(true)
    expect(isArray(Array.from([123]))).toBe(true)
    ;(function () {
      expect(isArray(arguments)).toBe(false)
    })()
  })

  test('variable is Function', () => {
    expect(isFunc(12)).toBe(false)
    expect(isFunc({})).toBe(false)

    const testArrowFn = () => null

    function testFn() {
      return null
    }

    expect(isFunc(testArrowFn)).toBe(true)

    expect(isFunc(testFn)).toBe(true)
  })

  test('variable is String', () => {
    expect(isString(12)).toBe(false)
    expect(isString('123')).toBe(true)
    expect(isString(Number('123'))).toBe(false)
    const testObj = {
      name: 123
    }
    expect(isString(testObj.toString())).toBe(true)
  })

  test('variable is Object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
    expect(isObject([])).toBe(false)
    expect(isObject(() => null)).toBe(false)
    const testObj = {
      name: 123
    }
    expect(isObject(testObj.toString())).toBe(true)
  })
})
