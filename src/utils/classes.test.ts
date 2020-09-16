import * as classesName from './classes'

describe('classes', () => {
  test('className', () => {
    expect(classesName).toMatchSnapshot()
  })
})
