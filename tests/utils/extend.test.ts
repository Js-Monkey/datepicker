import extend from '../../src/utils/extend'

describe('extend', () => {
  it('`target` should has all properties', () => {
    const target = () => 'target'
    const source = {
      times: 1,
      showTimes() {
        return this.times
      }
    }
    extend(source, target)
    const keys = Object.keys(target).map(key => key)
    expect(target()).toBe('target')
    expect(keys).toEqual(['times', 'showTimes'])
  })
})
