import {getDate, dispatchDateChange} from '../../src/core/util/hook'
import defaultOptions from "../../src/core/util/default-options"
import {createState} from "../../src/store"

const startDate = '1999/10/1'
const endDate = '2000/10/1'
describe('getDate', () => {
  const state = createState(defaultOptions())
  it('should get date of `State`', () => {
    expect(getDate(state)).toBeNull()
  })
  it('if `State` type has `range`, return a date array', () => {
    state.options.type = 'date-range'
    state.start.date = startDate
    state.end.date = endDate
    expect(getDate(state)).toEqual([startDate, endDate])
  })
})

describe('dispatchDateChange', () => {
  const state = createState(defaultOptions())
  it('should be called when date has changed', () => {
    const fn = jest.fn()
    state.onChange = fn
    dispatchDateChange(state)
    expect(fn).toBeCalled()
  })
})
