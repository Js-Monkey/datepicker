import {isInBody} from '../../src/utils/isInBody'

describe('isInBody', () => {
    it('should return whether el is in body', () => {
        const div = document.createElement('div')
        expect(isInBody(div)).toBeFalsy()
        document.body.appendChild(div)
        expect(isInBody(div)).toBeTruthy()
    })

    it('should return `false` if el is null', () => {
        expect(isInBody(null)).toBeFalsy()
    })
})
