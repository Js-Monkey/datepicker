import defaultOptions from '../../src/core/util/default-options'

describe('default-options', () => {
  test('default-options', () => {
    expect(defaultOptions()).toMatchSnapshot()
  })
})
