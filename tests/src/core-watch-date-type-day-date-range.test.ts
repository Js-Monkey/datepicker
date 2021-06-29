import {hoverSelect} from "../../src/core/watch/date/type/public"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"
import {linkMonth} from "../../src/core/watch/date/type/date&week/date-range"


describe('hoverDay callback', () => {
    const state = createState(defaultOptions())
    it('should changed all `_date.status`', () => {
        hoverSelect().cb.call(state)
        expect(state.start._date[0].status).toBe('')
    });
})


describe('linkMonth', () => {
    const state = createState(defaultOptions())
    it('should change `end.month` and `end.year`', () => {
        const mockState = {
            start: {
                month: 9,
                year: 2021
            },
            end: {
                month: 10,
                year: 2021
            }
        } as any
        const {cb} = linkMonth()
        cb.call(mockState, 11, 2021)
        expect(mockState.end.month).toBe(12)
        expect(mockState.end.year).toBe(2021)
    });
    it('should change `start.month` and `start.year`', () => {
        const mockState = {
            start: {
                month: 9,
                year: 2021
            },
            end: {
                month: 10,
                year: 2021
            }
        } as any
        const {cb} = linkMonth('end')
        cb.call(mockState, 1, 2021)
        expect(mockState.start.month).toBe(12)
        expect(mockState.start.year).toBe(2020)
    });
})
