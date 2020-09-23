import nextTick, {isInCallbacks} from '../../src/utils/nexttick'

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
  test('support filter the same callbacks', () => {
    Array.from({length: 3}).forEach(() => nextTick(jest.fn(() => null)))
    const callback = () => console.log('been called')
    expect(isInCallbacks(callback)).toBeFalsy()
    nextTick(callback)
    expect(isInCallbacks(callback)).toBeTruthy()
  })

  test('same callbacks been called only once', done => {
    const fn = jest.fn()
    Array.from({length: 3}).forEach(() => nextTick(fn))
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(1)
      done()
    }, 0)
  })

  test('callback is undefined && browser support promise', done => {
    const fn = jest.fn()
    Array.from({length: 3}).forEach(() => nextTick(fn))
    setTimeout(() => {
      expect(fn.mock.calls.length).toBe(1)
      done()
    }, 0)
  })
})
