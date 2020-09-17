import {findInputElement, isInput} from '../../src/utils/findInputElement'

describe('findInputElement', () => {
  test('node name is input?', () => {
    const input = document.createElement('input')
    const div = document.createElement('div')
    const span = document.createElement('span')
    expect(isInput(input)).toBeTruthy()
    expect(isInput(div)).toBeFalsy()
    expect(isInput(span)).toBeFalsy()
  })

  test('find input element', () => {
    const wrapper = document.createElement('div')
    Array.from({length: 5}).forEach(() => wrapper.appendChild(document.createElement('div')))
    expect(findInputElement(wrapper)).toBeNull()
    const randomIdx = Math.floor(Math.random() * 5)
    wrapper.childNodes[randomIdx].appendChild(document.createElement('input'))
    expect(findInputElement(wrapper) instanceof window.HTMLElement).toBeTruthy()
  })
})
