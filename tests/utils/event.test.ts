import {on} from '../../src/utils/event'
import {createEL} from '../../src/utils/element'

describe('on', () => {
  let div: HTMLElement, listener: any
  beforeEach(() => {
    div = createEL()
    listener = jest.fn()
  })

  describe('supports: addEventListener', () => {
    test('default click event', () => {
      on(div, listener)
      div.click()
      expect(listener).toBeCalled()
    })
    test('supports passing in eventName parameter', () => {
      on(div, listener, 'click')
      div.click()
      expect(listener.mock.calls.length).toBeCalled()
    })
  })
})
