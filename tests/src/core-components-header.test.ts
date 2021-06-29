import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"
import {HeaderLeft, HeaderRight} from "../../src/core/components/Header"
import {getTextType} from "../../src/core/components/Header"

const state = createState(defaultOptions())

describe('HeaderLeft', () => {
    it('should return HTMLElement', () => {
        expect(HeaderLeft(state)).toMatchSnapshot()
    })
})

describe('HeaderRight', () => {
    it('should return HTMLElement', () => {
        expect(HeaderRight(state)).toMatchSnapshot()
    })
})


describe('getTextType', () => {
    it('should match snapShot', () => {
        const result = getTextType(state)
        expect(result).toMatchSnapshot()

        const [dateArguments, dateFn] = result.date
        expect(dateArguments).toEqual(['month', 'year'])
        const idx = 1
        expect(dateFn(idx, '2021')).toBe('2021 Jan')

        const [monthArguments, monthFn] = result.month
        expect(monthArguments).toEqual(['year'])
        expect(monthFn(2021)).toBe(2021)

        const [yearArguments, yearFn] = result.year
        expect(yearArguments).toEqual(['year', '_date'])
        expect(yearFn(2021)).toBe('2020 - 2029')
    })
})
