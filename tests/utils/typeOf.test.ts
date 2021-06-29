import {isString, isArray, isFunc, isNumber, isObject, isBoolean, not} from '../../src/utils/typeOf'

describe('type-of', () => {
    it('should return whether value is Number, NaN is not a Number type here', () => {
        expect(isNumber(12)).toBeTruthy()
        expect(isNumber('123')).toBeFalsy()
        expect(isNumber(NaN)).toBeFalsy()
        expect(isNumber(Number('123'))).toBeTruthy()
    })

    it('should return whether value  is Array', () => {
        expect(isArray(12)).toBeFalsy()
        expect(isArray([123])).toBeTruthy()
        expect(isArray(Array.from([123]))).toBeTruthy()
        ;(function () {
            expect(isArray(arguments)).toBeFalsy()
        })()
    })

    it('should return whether value is Function', () => {
        expect(isFunc(12)).toBeFalsy()
        expect(isFunc({})).toBeFalsy()

        const testArrowFn = () => null

        function testFn() {
            return null
        }

        expect(isFunc(testArrowFn)).toBeTruthy()

        expect(isFunc(testFn)).toBeTruthy()
    })

    it('should return whether value is String', () => {
        expect(isString(12)).toBeFalsy()
        expect(isString('123')).toBeTruthy()
        expect(isString(Number('123'))).toBeFalsy()
        const testObj = {
            name: 123
        }
        expect(isString(testObj.toString())).toBeTruthy()
    })

    it('should return whether value is Object', () => {
        expect(isObject({})).toBeTruthy()
        expect(isObject(Object.create(null))).toBeTruthy()
        expect(isObject([])).toBeFalsy()
        expect(isObject(() => null)).toBeFalsy()
        const testObj = {
            name: 123
        }
        expect(isObject(testObj)).toBeTruthy()
    })
    it('should return whether value is Boolean', () => {
        expect(isBoolean(true)).toBeTruthy()
        expect(isBoolean(false)).toBeTruthy()
        expect(isBoolean(0)).toBeFalsy()
        expect(isBoolean(1)).toBeFalsy()
        expect(isBoolean('0')).toBeFalsy()
    })
    it('should return `true` whether `target` is not has the value', () => {
        expect(not(['a'],'a')).toBeFalsy()
        expect(not(['a'],'b')).toBeTruthy()
    })
})
