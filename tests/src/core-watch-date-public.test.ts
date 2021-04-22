import {rangeStatus, startDate, handleSelecting} from "../../src/core/watch/date/type/public"
import {createState} from '../../src/store'
import defaultOptions from "../../src/core/util/default-options"
import {logo} from '../../src/utils/classes'
const state = createState(defaultOptions())
const sd = '1999/10/1'
const ed = '2000/10/1'
state.range.start = sd
state.range.end = ed

describe('rangeStatus', () => {
  it('if `value` < `min`, return empty string', () => {
    expect(rangeStatus.call(state, '1999/9/19')).toEqual('')
  })
  it('if `value` > `min` && `value` < `max`, return `inRange`', () => {
    expect(rangeStatus.call(state, '1999/10/19')).toEqual('inRange')
  })
  it('if `value` === `min`, return `range-start`', () => {
    expect(rangeStatus.call(state, sd)).toEqual('range-start')
  })
  it('if `value` === `max`, return `range-end`', () => {
    expect(rangeStatus.call(state, ed)).toEqual('range-end')
  })
  it('if `value` === `max` && `value` === `min`, return `range-start range-end`', () => {
    state.range.start = ed
    state.range.end = ed
    expect(rangeStatus.call(state, ed)).toEqual(`${logo}-range-start ${logo}-range-end`)
  })
})


describe('startDate', () => {

  it('should changed `state.start`', () => {
    const cb = startDate.cb.bind(state)
    cb('2020/12/10')
    expect(state.start.year).toEqual(2020)
    expect(state.start.month).toEqual(12)
  })
})


describe('handleSelecting', () => {

  it('should changed `range.status` if status === `selecting`', () => {
    const cb = handleSelecting.cb.bind(state)
    cb('complete')
    expect(state.range.end).toEqual(ed)

    cb('selecting')
    expect(state.range.end).toBeNull()
  })
})
