import {get, set} from '../../src/store'
import clickOutside from '../../src/utils/clickoutside'
import Better from '../../src'

describe('click-outside', () => {
  test('click input-element to open popover', done => {
    const ref = document.createElement('input')
    const clickNode = document.createElement('div')
    const datepicker = new Better(ref)
    // const rec = {
    //   components: {
    //     reference: get('reference'),
    //     popover: get('popover')
    //   },
    //   utils: {
    //     visible: get('visible')
    //   }
    // }
    // const mockEvent = {
    //   target: clickNode
    // }
    ref.click() //点击后visible应该被设为true
    setTimeout(() => {
      expect(get('visible')).toBeTruthy()
      // clickOutside(rec as any, mockEvent)
    }, 20)
  })
})
