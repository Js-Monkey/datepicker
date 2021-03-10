import {mergeOptions} from '../../src/utils/merge'

describe('merge-options', () => {
  let defaultOptions = {},
    curOptions = {}
  beforeEach(() => {
    defaultOptions = {
      placement: 'top',
      zIndex: 1000,
      offset: 20
    }
    curOptions = {
      placement: 'left',
      zIndex: 9999,
      format: 'yyyy-mm-ddd',
      offset: 100
    }
  })

  it('should return an object that has not extends `target` properties', () => {
    const options = mergeOptions(defaultOptions, curOptions)
    expect(options).toEqual({
      offset: 100,
      placement: 'left',
      zIndex: 9999,
    })
  })


  it('if `target` property value  is undefined, extends original value', () => {
    const options = mergeOptions(defaultOptions, {
      zIndex: undefined
    })
    expect(options).toEqual({
      placement: 'top',
      zIndex: 1000,
      offset: 20
    })
  })
})
