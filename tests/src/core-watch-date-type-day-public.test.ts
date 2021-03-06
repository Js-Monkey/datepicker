import {monthYearLink} from "../../src/core/watch/date/type/day/public"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"


describe('endLinkStartToYear', () => {
  const state = createState(defaultOptions())
  it('if `month === 13`, should changed `state.month = 1` && `state.year ++`', () => {
    const originalYear = state.start.year
    monthYearLink(13, state.start)
    expect(state.start.month).toBe(1)
    expect(state.start.year).toBe(originalYear + 1)
  })
  it('if `month === 0`, should changed `state.month = 12` && `state.year +--`', () => {
    const originalYear = state.start.year
    monthYearLink(0, state.start)
    expect(state.start.month).toBe(12)
    expect(state.start.year).toBe(originalYear - 1)
  })
})
