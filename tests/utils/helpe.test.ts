import {Bind} from "../../src/utils/helper"

describe('Bind', () => {
  test('supports extends arguments ', () => {
    function testFn(name: string, age: number) {
      return name + ': ' + age
    }
    const bindFn = Bind(testFn, 12)
    expect(bindFn('tony')).toBe('tony: 12')
  })
  test('supports Put Event object at the end ', () => {
    const number = 3
    const body = document.body
    const mockFn = jest.fn((idx: number, e: any) => e.target)
    body.addEventListener('click', Bind(mockFn, number) as any)
    body.click()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn.mock.results[0].value).toBe(body)
  })
})
