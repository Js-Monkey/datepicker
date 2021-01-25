import clickOutside from '../../src/utils/clickoutside'
import Better from '../../src'
import {getState} from '../../src/store'

describe('click-outside', () => {
  const ref = document.createElement('input')
  const outsideNode = document.createElement('div')
  new Better(ref)

  test('click input element to open popover', () => {
    //todo
  })
  // test('click outside to close popover', () => {
  //   const rec = {
  //     components: {
  //       reference: get('reference'),
  //       popover: get('popover')
  //     },
  //     utils: {
  //       visible: get('visible')
  //     }
  //   }
  //   const mockEvent = {
  //     target: outsideNode
  //   }
  //   expect(get('visible')).toBeTruthy()
  //   clickOutside(rec as any, mockEvent)
  //   expect(get('visible')).toBeFalsy()
  // })
})
