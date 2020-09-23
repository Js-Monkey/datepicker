import defaultOptions from '../../src/core/default-options'

describe('default-options', () => {
  test('default-options', () => {
    expect(defaultOptions).toMatchSnapshot()
  })
})
