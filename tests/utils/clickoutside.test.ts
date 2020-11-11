import {get} from '../../src/store'
import clickOutside from '../../src/utils/clickoutside'
import Better from '../../src'
describe('click-outside', () => {
  const ref = document.createElement('input')
  const outsideNode = document.createElement('div')
  new Better(ref)
  test('click input element to open popover', () => {
    ref.click() //点击后visible应该被设为true
    expect(get('visible')).toBeTruthy()
  })
  test('click outside to close popover', () => {
    const rec = {
      components: {
        reference: get('reference'),
        popover: get('popover')
      },
      utils: {
        visible: get('visible')
      }
    }
    const mockEvent = {
      target: outsideNode
    }
    expect(get('visible')).toBeTruthy()
    clickOutside(rec as any, mockEvent)
    expect(get('visible')).toBeFalsy()
  })
})
