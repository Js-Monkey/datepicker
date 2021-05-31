import {isInputElement} from '../../src/utils/check-input-element'
import {checkOptions} from "../../src/utils/checkOptions"

describe('isInputElement', () => {
    it('should return whether `el` is HTMLInputElement', () => {
        const div = document.createElement('div')
        const input = document.createElement('input')
        expect(isInputElement(div)).toBeFalsy()
        expect(isInputElement(input)).toBeTruthy()
    })
})

describe('checkOptions', () => {
    describe('KeyName: placement', () => {
        it('should return whether `value` is in [top,left, bottom,right]', () => {
            expect(checkOptions("placement", 'top')).toBeTruthy()
            expect(checkOptions("placement", 'left')).toBeTruthy()
            expect(checkOptions("placement", 'right')).toBeTruthy()
            expect(checkOptions("placement", 'bottom')).toBeTruthy()

            expect(checkOptions("placement", null)).toBeFalsy()
            expect(checkOptions("placement", undefined)).toBeFalsy()
            expect(checkOptions("placement", 111)).toBeFalsy()
            expect(checkOptions("placement", 'top1')).toBeFalsy()
        })
    })
    describe('KeyName: type', () => {
        it('should return whether `value` is in [date,date-range, month,month-range]', () => {
            expect(checkOptions("type", 'date')).toBeTruthy()
            expect(checkOptions("type", 'date-range')).toBeTruthy()
            expect(checkOptions("type", 'month')).toBeTruthy()
            expect(checkOptions("type", 'month-range')).toBeTruthy()

            expect(checkOptions("type", null)).toBeFalsy()
            expect(checkOptions("type", undefined)).toBeFalsy()
            expect(checkOptions("type", 333)).toBeFalsy()
            expect(checkOptions("type", 'dateRange')).toBeFalsy()
            expect(checkOptions("type", 'Date')).toBeFalsy()
        })
    })
    describe('KeyName: unlinkPanels', () => {
        it('should return whether `value` is in [date,date-range, month,month-range]', () => {
            expect(checkOptions("unlinkPanels", false)).toBeTruthy()
            expect(checkOptions("unlinkPanels", 0)).toBeFalsy()
            expect(checkOptions("unlinkPanels", 1)).toBeFalsy()
        })
    })
    describe('KeyName: format', () => {
        it('should return whether `value` is string', () => {
            expect(checkOptions("format", false)).toBeFalsy()
            expect(checkOptions("format", '')).toBeTruthy()
            expect(checkOptions("format", null)).toBeFalsy()
        })
    })
    describe('KeyName: zIndex', () => {
        it('should return whether `value` is number', () => {
            expect(checkOptions("zIndex", '2000')).toBeFalsy()
            expect(checkOptions("zIndex", 2000)).toBeTruthy()
            expect(checkOptions("zIndex", null)).toBeFalsy()
        })
    })
    describe('KeyName: offset', () => {
        it('should return whether `value` is number', () => {
            expect(checkOptions("offset", '10')).toBeFalsy()
            expect(checkOptions("offset", 10)).toBeTruthy()
            expect(checkOptions("offset", null)).toBeFalsy()
        })
    })
    describe('KeyName: insertTo', () => {
        it('should return whether `value` is in [body,parent]', () => {
            expect(checkOptions("insertTo", 'body')).toBeTruthy()
            expect(checkOptions("insertTo", 'parent')).toBeTruthy()
            expect(checkOptions("insertTo", 'parent1')).toBeFalsy()
        })
    })
    describe('KeyName: disabled', () => {
        it('should return whether `value` is a Function', () => {
            expect(checkOptions("disabled", () => 'i am a function')).toBeFalsy()
            expect(checkOptions("disabled", true)).toBeTruthy()
            expect(checkOptions("disabled", false)).toBeTruthy()
        })
    })
})
