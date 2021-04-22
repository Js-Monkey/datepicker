import {getFormatDate} from "../../src/core/util/format"
import {State} from "../../src/types/store";

describe('getFormatDate',()=>{
  const date = '2020/10/3'
  const stateMock = {
    hasXX: false,
    locale: {
      weekFormat: 'yyyy'
    }
  } as unknown as State
  it('should return a formatted string',()=>{
    expect(getFormatDate.call(stateMock,date,'yyyy-MM-dd')).toBe('2020-10-03')
    expect(getFormatDate.call(stateMock,date,'yy-MM-dd')).toBe('20-10-03')
    expect(getFormatDate.call(stateMock,'2020/09/3','yyyy-M-dd')).toBe('2020-9-03')
    expect(getFormatDate.call(stateMock,'2020/09/3','yyyy-M-d')).toBe('2020-9-3')
  })
})
