import {on} from '../../src/utils/event'
import {createEL} from '../../src/utils/element'

describe('eventListener', () => {
  let div = createEL(),
    listener = jest.fn()
  beforeEach(() => {
    div = createEL()
    listener = jest.fn()
  })
  test('addEventListener', () => {
    on(div, listener)
    Array.from({length: 3}).forEach((item, idx) => {
      div.click()
      expect(listener.mock.calls.length).toBe(idx + 1)
    })
  })
  test('pass in the eventName parameter', () => {
    on(div, listener, 'click')
    div.click()
    expect(listener.mock.calls.length).toBe(1)
  })

  // test('params 0 is null:add', () => {
  //   on(null, listener)
  //   expect(listener.mock.calls.length).toBe(0)
  // })
  // test('params 0 is null:remove', () => {
  //   on(div, listener, 'click')
  //   div.click()
  //   expect(listener.mock.calls.length).toBe(1)
  // })
})
