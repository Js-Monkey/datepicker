import {dayEvent} from "../../src/core/components/Date&Week/event"
import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"

const state = createState(defaultOptions())
const testDate = '2020/10/3'
state.start._date[1].date = testDate
describe('dayEvent', () => {
    it('date function should changed `state.visible`', () => {
        const {date} = dayEvent(state.start._date[1])
        date.call(state)
        expect(state.visible).toBeFalsy()
        expect(state.start.date).toBe(testDate)
    })
})
