import * as classesName from '../../src/utils/classes'

describe('classes', () => {
  test('className', () => {
    expect(classesName).toMatchSnapshot()
  })
})
