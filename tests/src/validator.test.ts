import {isInputElement} from '../../src/core/validator/input-element'
import validateOptions from '../../src/core/validator/options'
import Options from "../../src/types/options"

describe('isInputElement',()=>{
  it('should return whether `el` is HTMLInputElement', () => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    expect(isInputElement(div)).toBeFalsy()
    expect(isInputElement(input)).toBeTruthy()
  })
})

describe('should throw error if `options` not match the rule', () => {
  it('should return `true` if `options` is null', () => {
    expect(validateOptions()).toBeTruthy()
  })
  it('should return `true` if `options` is an empty object', () => {
    expect(validateOptions(Object.create(null))).toBeTruthy()
  })
  it('`basic-usage` should be one of `[left,right,top,bottom]`', () => {
    Array.from(['top', 'left', 'right', 'bottom'] as ['top', 'left', 'right', 'bottom']).forEach(placement => {
      expect(validateOptions({placement} as Options)).toBeTruthy()
    })
    expect(validateOptions({placement: 'tops' as 'top'} as Options)).toBeFalsy()
  })
  it('`zIndex` should be Number', () => {
    expect(validateOptions({zIndex: 1000} as Options)).toBeTruthy()
    const testString = ('1000' as unknown) as number
    expect(validateOptions({zIndex: testString} as Options)).toBeFalsy()
  })
  it('`unlinkPanels` should be boolean', () => {
    expect(validateOptions({unlinkPanels: true} as Options)).toBeTruthy()
    const testNumber = (1000 as unknown) as boolean
    expect(validateOptions({unlinkPanels: testNumber} as Options)).toBeFalsy()
  })
  it('`options` should be Object', () => {
    expect(validateOptions(123 as unknown as Options)).toBeFalsy()
    expect(validateOptions('123' as unknown as Options)).toBeFalsy()
  })
})
