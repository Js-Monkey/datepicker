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

    it('should clear DatePicker', () => {
        const {state} = instance
        state.range.start = state.range.end = state.start.date = state.end.date = '2020/10/1'
        expect(instance.clear()).toBeUndefined()
        expect(state.range.start).toBeNull()
        expect(state.range.end).toBeNull()
        expect(state.start.date).toBeNull()
        expect(state.end.date).toBeNull()
    })

    it('should open popover', () => {
        const {state} = instance
        state.visible =  false
        expect(instance.open()).toBeUndefined()
        expect(instance.state.visible).toBeTruthy()
    })

    it('should change format when set weekType', () => {
       instance = createDatePicker(document.createElement('input'),{type: 'week'})
        expect(instance.state.hasWW).toBeTruthy()
    })
    it('should destroy binding between `reference` and `DatePicker`', () => {
        expect(instance.destroyed()).toBeUndefined()
    })
})
