import {Bind} from "../../src/utils/bind"

describe('Bind', () => {
    test('should merge parameters ', () => {
        function testFn(name: string, age: number) {
            return name + ': ' + age
        }

        const bindFn = Bind(testFn, 'tony')
        expect(bindFn(12)).toBe('tony: 12')
    })
})
