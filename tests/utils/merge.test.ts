import deepMerge from "../../src/utils/merge"

describe('merge', () => {

  describe('deep-merge', () => {
    let mergeObj1 = {}, mergeObj2 = {}, mergeObj3 = {}
    beforeEach(() => {
      mergeObj1 = {
        key1: 'key1'
      }
      mergeObj2 = {
        key2: 'key2'
      }
      mergeObj3 = {
        key3: 'key3'
      }
    })
    test('deep-merge properties', () => {
      deepMerge(mergeObj1, mergeObj2, mergeObj3)
      expect(mergeObj1).toEqual({key1: 'key1'})
      expect(mergeObj2).toEqual({key2: 'key2'})
      expect(mergeObj3).toEqual({key3: 'key3'})
    })

    test('has all properties', () => {
      const mergeObj = deepMerge(mergeObj1, mergeObj2, mergeObj3)
      expect(mergeObj).toEqual({key1: 'key1',key2:'key2',key3:'key3'})
    })
  })
})
