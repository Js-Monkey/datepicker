describe('locale', () => {
    it('test timezone   ', () => {
        expect(new Date('2020/10/01').toString().indexOf('Thu Oct 01 2020 00:00:00') > -1).toBeTruthy()
    })
})
