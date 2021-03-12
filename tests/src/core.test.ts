import {createDatePicker} from "../../src"

describe('createDatePicker', () => {
  const reference = document.createElement('input')
  const instance = createDatePicker(reference)
  it('should match snapshot', () => {
    expect(instance).toMatchSnapshot()
  })

  it('should get current date', () => {
    expect(instance?.getCurrentDate()).toBeNull()
  })
  it('should do nothing if `value` is null', () => {
    expect(instance?.onChange(null as any)).toBeUndefined()
  })
  it('should assign `callback` to `state.onChange` if `value` is a function', () => {
    function callback(date: string){
      return date
    }
    expect(instance?.onChange(callback)).toBeUndefined()
  })

  it('should destroy binding between `reference` and `DatePicker`', () => {
    expect(instance?.destroyed()).toBeUndefined()
  })

  it('should update `state.options`', () => {
    expect(instance?.updateOptions({placement: "bottom"} as any)).toBeUndefined()
  })
})
