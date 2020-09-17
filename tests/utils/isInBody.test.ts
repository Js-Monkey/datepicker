import {isInBody} from '../../src/utils/isInBody'

describe('isInBody', () => {
  test('element is really in body', () => {
    const div = document.createElement('div')
    expect(isInBody(div)).toBeFalsy()
    document.body.appendChild(div)
    expect(isInBody(div)).toBeTruthy()
  })

  test('null', () => {
    expect(isInBody(null)).toBeFalsy()
  })
})
