import * as classesName from '../../src/utils/classes'

describe('classes', () => {
    test('produces classnames of the Datepicker', () => {
        expect(classesName).toMatchSnapshot()
    })
})
