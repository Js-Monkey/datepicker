import {createState} from "../../src/store"
import defaultOptions from "../../src/core/util/default-options"
import {endMonth} from "../../src/core/components/Month&Year"

const state = createState(defaultOptions())
describe('endMonth', () => {
    it('should return HTMLElement', () => {
        expect(endMonth(state)).toMatchSnapshot()
    })
})
