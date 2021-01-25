import {on} from '../../src/utils/event'
import {createEL} from '../../src/utils/element'
import {State} from "../../src/types/store"

function isMouseEvent(value: any) {
  return Object.prototype.toString.call(value) === '[object MouseEvent]'
}

describe('on', () => {
  let div: HTMLElement, listener: any
  beforeEach(() => {
    div = createEL()
    listener = jest.fn(e => e)
  })
  const state = {
    name: 'her name plz'
  } as unknown as any
  const website = 'https://www.kornhub.cn'
  describe('Supports: addEventListener', () => {
    test('default click event', () => {
      on(div, listener)
      div.click()
      expect(listener).toBeCalled()
    })

    test('Supports passing in eventName parameter', () => {
      on(div, listener, 'click')
      div.click()
      expect(isMouseEvent(listener.mock.results[0].value)).toBeTruthy()
    })

    test('Supports to modify this point to parameter "state"', () => {
      listener = jest.fn(function () {
        return this.name
      })
      on(div, listener, 'click', state)
      div.click()
      expect(listener.mock.results[0].value).toBe(state.name)
    })

    test('Supports accept other parameter', () => {
      listener = jest.fn(function (url: string) {
        return url
      })
      on(div, listener, 'click', state as unknown as State, website)
      div.click()
      expect(listener.mock.results[0].value).toBe(website)
    })
  })
})
