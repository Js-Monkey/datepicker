import deepMerge, {mergeOptions} from '../../src/utils/merge'

describe('merge', () => {
  describe('deep-merge', () => {
    let mergeObj1 = {},
      mergeObj2 = {},
      mergeObj3 = {}
    beforeEach(() => {
      mergeObj1 = {
        key1: 'key1'
      }
      mergeObj2 = {
        key2: 'key2'
      }
      mergeObj3 = {
        key3: 'key3',
        child: {
          key1: 'key1'
        }
      }
    })
    test('deep-merge properties', () => {
      deepMerge(mergeObj1, mergeObj2, mergeObj3)
      expect(mergeObj1).toEqual({key1: 'key1'})
      expect(mergeObj2).toEqual({key2: 'key2'})
      expect(mergeObj3).toEqual({
        key3: 'key3',
        child: {
          key1: 'key1'
        }
      })
    })

    test('has all properties', () => {
      const mergeObj = deepMerge(mergeObj1, mergeObj2, mergeObj3)
      expect(mergeObj).toEqual({
        key1: 'key1',
        key2: 'key2',
        key3: 'key3',
        child: {
          key1: 'key1'
        }
      })
    })

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
          placement: 'top',
          zIndex: 9999,
          format: 'yyyy-mm-ddd'
        }
      })

      test('has all default properties', () => {
        const options = mergeOptions(defaultOptions, curOptions)
        expect(options).toEqual({
          placement: 'top',
          zIndex: 9999,
          format: 'yyyy-mm-ddd',
          offset: 20
        })
      })

      test('if target is undefined', () => {
        const options = mergeOptions(defaultOptions)
        expect(options).toEqual({
          placement: 'top',
          zIndex: 1000,
          offset: 20
        })
      })

      test('if target properties is undefined', () => {
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
  })
})
