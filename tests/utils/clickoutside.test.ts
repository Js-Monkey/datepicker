import clickOutside from '../../src/utils/clickoutside'
import Better from '../../src'
import {getState} from '../../src/store'

const script = document.createElement('script')

describe('click-outside', () => {
  console.log(1)
  console.log(document.getElementsByTagName("script"))
  // const ref = document.createElement('input')
  // const outsideNode = document.createElement('div')
  // new Better(ref)

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
