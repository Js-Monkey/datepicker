import {on} from '../../src/utils/event'
import {createEL} from '../../src/utils/element'
import {State} from "../../src/types/store"

function isMouseEvent(value: any) {
  return Object.prototype.toString.call(value) === '[object MouseEvent]'
}

describe('Event', () => {
  let div: HTMLElement, listener: any
  beforeEach(() => {
    div = createEL()
    listener = jest.fn(e => e)
  })

  const state = {
    name: 'her name plz'
  } as unknown as any


  describe('should add eventListener on element', () => {
    it('third parameter is eventName', () => {
      on(div, listener, 'click')
      div.click()
      expect(listener).toBeCalled()
    })
    it('if third parameter is null, eventName is `click`', () => {
      on(div, listener)
      div.click()
      expect(listener).toBeCalled()
    })

    it('should bind `listener` to 4th parameter', () => {
      listener = jest.fn(function () {
        return this
      })
      on(div, listener, 'click', state)
      div.click()
      expect(listener.mock.results[0].value).toBe(state)
    })
  })
})
