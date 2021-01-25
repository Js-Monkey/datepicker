import {on} from '../../src/utils/event'
import {createEL} from '../../src/utils/element'
import {State} from "../../src/types/store"

function isMouseEvent(value: any) {
  return Object.prototype.toString.call(value) === '[object MouseEvent]'
}

describe('Event: on', () => {
  let div: HTMLElement, listener: any
  beforeEach(() => {
    div = createEL()
    listener = jest.fn(e => e)
  })

  const state = {
    name: 'her name plz'
  } as unknown as any

  const website = 'https://www.kornhub.cn'
  describe('支持添加事件监听', () => {
    test('第三个参数为事件名字', () => {
      on(div, listener, 'click')
      div.click()
      expect(listener).toBeCalled()
    })
    test('如果不传第三个参数，则默认为click事件', () => {
      on(div, listener)
      div.click()
      expect(listener).toBeCalled()
    })

    test('第四个参数是State，回调函数的this指向State', () => {
      listener = jest.fn(function () {
        return this
      })
      on(div, listener, 'click', state)
      div.click()
      expect(listener.mock.results[0].value).toBe(state)
    })

    test('支持传入更多的参数，这些额外的参数会作为参数传入回调函数', () => {
      listener = jest.fn(function (url: string) {
        return url
      })
      on(div, listener, 'click', state as unknown as State, website)
      div.click()
      expect(listener.mock.results[0].value).toBe(website)
    })
    describe('传入回调函数的最后一个参数是事件对象', () => {
      test('如果没有额外参数，那么事件对象是唯一的参数', () => {
        on(div, listener, 'click')
        div.click()
        expect(isMouseEvent(listener.mock.results[0].value)).toBeTruthy()
      })
      test('事件对象在参数的最末尾', () => {
        listener = jest.fn(function (url: string, e: Event) {
          return [url, e]
        })
        on(div, listener, 'click', state, website)
        div.click()
        console.log(listener.mock.results)
        expect(listener.mock.results[0].value[0]).toBe(website)
        expect(isMouseEvent(listener.mock.results[0].value[1])).toBeTruthy()
      })
    })

  })
})
