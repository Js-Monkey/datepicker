import {isInputElement} from '../../src/core/validator/input-element'
import validateOptions from '../../src/core/validator/options'
import Options from "../../src/types/options"

describe('validator-input', () => {
  test('inputElement validate', () => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    expect(isInputElement(div)).toBeFalsy()
    expect(isInputElement(input)).toBeTruthy()
  })
})

describe('validator options', () => {
  describe('validateOptions', () => {
    test('不传参可以通过检查', () => {
      expect(validateOptions()).toBeTruthy()
    })
    test('空对象可以通过检查', () => {
      expect(validateOptions(Object.create(null))).toBeTruthy()
    })
    test('placement属性只能是 [left,right,top,bottom]其中一个，其他的名称不能通过检查', () => {
      Array.from(['top', 'left', 'right', 'bottom'] as ['top', 'left', 'right', 'bottom']).forEach(placement => {
        expect(validateOptions({placement} as  Options)).toBeTruthy()
      })
      expect(validateOptions({placement: 'tops' as 'top'} as Options)).toBeFalsy()
    })
    test('zIndex属性如果是非Number类型则不能通过检查', () => {
      expect(validateOptions({zIndex: 1000} as Options)).toBeTruthy()
      const testString = ('1000' as unknown) as number
      expect(validateOptions({zIndex: testString} as Options)).toBeFalsy()
    })
    test('unlinkPanels属性只能是布尔值', () => {
      expect(validateOptions({unlinkPanels: true} as Options)).toBeTruthy()
      const testNumber = (1000 as unknown) as boolean
      expect(validateOptions({unlinkPanels: testNumber} as Options)).toBeFalsy()
    })
    test('参数如果不是对象则不能通过检查', () => {
      expect(validateOptions(123 as unknown as Options )).toBeFalsy()
      expect(validateOptions('123' as unknown as Options)).toBeFalsy()
    })
  })
})
