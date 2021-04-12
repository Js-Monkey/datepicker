describe('locale',()=>{
    it('test timezone   ',()=>{
        expect(new Date('2020/10/01').toString()).toBe('Thu Oct 01 2020 00:00:00 GMT+0800 (China Standard Time)')
    })
})
