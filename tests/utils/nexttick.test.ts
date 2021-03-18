import nextTick from "../../src/utils/nexttick"

describe('nextTick', () => {
  it('should be called in next tick', (done) => {
    const fn = jest.fn()
    nextTick(() => {
      fn()
      expect(fn).toBeCalled()
      done()
    })
  })
})
