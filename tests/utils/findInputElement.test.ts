import {findInputElement, isInput} from '../../src/utils/findInputElement'

describe('should return whether el is HTMLInputElement', () => {
    const input = document.createElement('input')
    const div = document.createElement('div')
    const span = document.createElement('span')
    expect(isInput(input)).toBeTruthy()
    expect(isInput(div)).toBeFalsy()
    expect(isInput(span)).toBeFalsy()
})

describe('findInputElement', () => {
    it('should return `null` if `value` is null', () => {
        const wrapper = document.createElement('div')
        wrapper.appendChild(document.createElement('div'))
        expect(()=>findInputElement(wrapper)).toThrowError()
    })
    it('should get childrenNode which is HTMLInputElement', () => {
        const wrapper = document.createElement('div')
        wrapper.appendChild(document.createElement('input'))
        expect(findInputElement(wrapper) instanceof window.HTMLElement).toBeTruthy()
    })
    it('if parameter is null, return null', () => {
        expect(()=>findInputElement(null as unknown as HTMLElement)).toThrowError()
    })
})
