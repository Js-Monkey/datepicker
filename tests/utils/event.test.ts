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

  const website = 'https://www.test.cn'
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

    it('should put the event target to last', () => {
      listener = jest.fn(function (url: string, e: Event) {
        return [url, e]
      })
      on(div, listener, 'click', state, website)
      div.click()
      expect(listener.mock.results[0].value[0]).toBe(website)
      expect(isMouseEvent(listener.mock.results[0].value[1])).toBeTruthy()
    })
  })
})
