import {isString, isArray, isFunc, isNumber, isObject} from '../../src/utils/typeOf'

describe('type-of', () => {
  test('variable is number', () => {
    expect(isNumber(12)).toBeTruthy()
    expect(isNumber('123')).toBeFalsy()
    expect(isNumber(NaN)).toBeFalsy()
    expect(isNumber(Number('123'))).toBeTruthy()
  })

  test('variable is Array', () => {
    expect(isArray(12)).toBeFalsy()
    expect(isArray([123])).toBeTruthy()
    expect(isArray(Array.from([123]))).toBeTruthy()
    ;(function () {
      expect(isArray(arguments)).toBeFalsy()
    })()
  })

  test('variable is Function', () => {
    expect(isFunc(12)).toBeFalsy()
    expect(isFunc({})).toBeFalsy()

    const testArrowFn = () => null

    function testFn() {
      return null
    }

    expect(isFunc(testArrowFn)).toBeTruthy()

    expect(isFunc(testFn)).toBeTruthy()
  })

  test('variable is String', () => {
    expect(isString(12)).toBeFalsy()
    expect(isString('123')).toBeTruthy()
    expect(isString(Number('123'))).toBeFalsy()
    const testObj = {
      name: 123
    }
    expect(isString(testObj.toString())).toBeTruthy()
  })

  test('variable is Object', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(Object.create(null))).toBeTruthy()
    expect(isObject([])).toBeFalsy()
    expect(isObject(() => null)).toBeFalsy()
    const testObj = {
      name: 123
    }
    expect(isObject(testObj)).toBeTruthy()
  })
})
