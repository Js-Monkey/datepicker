import {hoverMonth} from "../../src/core/watch/date/type/month"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"


// describe('endLinkStartToYear', () => {
//   const state = createState(defaultOptions())
//   it('should changed `startYear`', () => {
//     endLinkStartToYear.cb.call(state, 2020)
//     expect(state.start.year).toBe(2019)
//   })
// })

// describe('startLinkEndToYear', () => {
//   const state = createState(defaultOptions())
//   it('should changed `endYear`', () => {
//     startLinkEndToYear.cb.call(state, 2000)
//     expect(state.end.year).toBe(2001)
//   })
// })

describe('hoverMonth', () => {
  const state = createState(defaultOptions())
  it('should changed `_month.status`', () => {
    hoverMonth.cb.call(state)
    expect(state.start._month[0].status).toBe('')
    expect(state.end._month[0].status).toBe('')
  })
})
