import {hoverSelect} from "../../src/core/watch/date/type/public"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"

// describe('updateRangeStartMonth', () => {
//   const state = createState(defaultOptions())
//   it('should changed `startMonth` and `startYear`', () => {
//     rangeLinkPrecisionToDay.cb.call(state, 1, 2021)
//     expect(state.start.year).toBe(2020)
//     expect(state.start.month).toBe(12)
//   });
// })


// describe('updateRangeEndMonth', () => {
//   const state = createState(defaultOptions())
//   it('should changed `endMonth` and `endYear`', () => {
//     startLinkEndToMonth.cb.call(state, 12, 2000)
//     expect(state.end.year).toBe(2001)
//     expect(state.end.month).toBe(1)
//   });
// })


describe('hoverDay callback', () => {
    const state = createState(defaultOptions())
    it('should changed all `_date.status`', () => {
        hoverSelect().cb.call(state)
        expect(state.start._date[0].status).toBe('')
    });
})
