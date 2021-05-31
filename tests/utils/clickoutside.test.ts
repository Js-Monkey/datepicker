import clickOutside from '../../src/utils/clickoutside'
import {createDatePicker} from '../../src'
import {getState} from '../../src/store'
import {Bind} from "../../src/utils/bind"


describe('clickOutside', () => {
    const ref = document.createElement('input')
    createDatePicker(ref)
    const state = getState()
    document.body.addEventListener('click', Bind(clickOutside, state))
    it('when click InputElement,should open the popover', () => {
        expect(state.visible).toBeFalsy()
        ref.click()
        expect(state.visible).toBeTruthy()
    })
    it('when click outside,should close the popover', () => {
        ref.click()
        expect(state.visible).toBeTruthy()
        document.body.click()
        expect(state.visible).toBeFalsy()
    })
})
