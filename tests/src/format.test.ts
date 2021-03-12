import {getFormatDate} from "../../src/core/util/format"

describe('getFormatDate',()=>{
  const date = '2020/10/3'
  it('should return a formatted string',()=>{
    expect(getFormatDate(date,'yyyy-MM-dd')).toBe('2020-10-03')
    expect(getFormatDate(date,'yy-MM-dd')).toBe('20-10-03')
    expect(getFormatDate('2020/09/3','yyyy-M-dd')).toBe('2020-9-03')
    expect(getFormatDate('2020/09/3','yyyy-M-d')).toBe('2020-9-3')
  })
})
