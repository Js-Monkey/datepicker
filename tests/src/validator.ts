import {isInputElement} from '../../src/core/validator/input-element'
import validateOptions from '../../src/core/validator/options'

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
    test('param is undefined', () => {
      expect(validateOptions()).toBeTruthy()
    })
    test('param is a empty object', () => {
      expect(validateOptions(Object.create(null))).toBeTruthy()
    })
    test('placement must be in [left,right,top,bottom]', () => {
      Array.from(['top', 'left', 'right', 'bottom'] as ['top', 'left', 'right', 'bottom']).forEach(placement => {
        expect(validateOptions({placement: placement})).toBeTruthy()
      })
      expect(validateOptions({placement: 'tops' as 'top'})).toBeFalsy()
    })
    test('zIndex must be Number type', () => {
      expect(validateOptions({zIndex: 1000})).toBeTruthy()
      const testString = ('1000' as unknown) as number
      expect(validateOptions({zIndex: testString})).toBeFalsy()
    })
    test('unlinkPanels must be Boolean type', () => {
      expect(validateOptions({unlinkPanels: true})).toBeTruthy()
      const testNumber = (1000 as unknown) as boolean
      expect(validateOptions({unlinkPanels: testNumber})).toBeFalsy()
    })
  })
})
