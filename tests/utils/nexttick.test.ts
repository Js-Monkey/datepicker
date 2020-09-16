import nextTick, {flushCallbacks, isInCallbacks} from '../../src/utils/nexttick'

describe('nextTick', () => {
  test('callbacks has been called in the next tick', done => {
    const fn = jest.fn(() => {
      done()
    })
    nextTick(() => fn())
    expect(fn.mock.calls.length).toBe(0)
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(1)
    }, 0)
  })
  test('isInCallbacks can filter the same callbacks', () => {
    Array.from({length: 3}).forEach(() => nextTick(jest.fn(() => null)))
    const callback = () => console.log('been called')
    expect(isInCallbacks(callback)).toBeFalsy()
    nextTick(callback)
    expect(isInCallbacks(callback)).toBeTruthy()
  })

  test('flushCallbacks is working', () => {
    const fn = jest.fn()
    nextTick(fn)
    flushCallbacks()
    expect(fn).toBeCalled()
  })

  test('same callbacks be called only once', done => {
    const fn = jest.fn()
    Array.from({length: 3}).forEach(() => nextTick(fn))
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(1)
      done()
    }, 0)
  })
})
