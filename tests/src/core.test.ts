import {createDatePicker} from "../../src"
import {BetterPickerInstance} from "../../src/types/core";

describe('createDatePicker', () => {
     let reference, instance: BetterPickerInstance
    beforeEach(() => {
         reference = document.createElement('input')
         instance = createDatePicker(reference)
    })
    it('should do nothing if `value` is null', () => {
        expect(instance?.onChange(null as any)).toBeUndefined()
    })
    it('should assign `callback` to `state.onChange` if `value` is a function', () => {
        function callback(date: string) {
            return date
        }

        expect(instance.onChange(callback)).toBeUndefined()
    })

    it('should update `state.options`', () => {
        expect(instance.update({placement: "bottom"} as any)).toBeUndefined()
    })

    it('should get current date', () => {
        expect(instance?.getCurrentDate()).toBeNull()
        instance?.destroyed()
        expect(instance?.getCurrentDate()).toBeNull()
    })

    it('should close popover', () => {
        const {state} = instance
        state.visible = true
        expect(instance.close()).toBeUndefined()
        expect(instance.state.visible).toBeFalsy()

    })

    it('should open popover', () => {
        const {state} = instance
        state.visible =  false
        expect(instance.open()).toBeUndefined()
        expect(instance.state.visible).toBeTruthy()
    })
    it('should destroy binding between `reference` and `DatePicker`', () => {
        expect(instance.destroyed()).toBeUndefined()
    })
})
