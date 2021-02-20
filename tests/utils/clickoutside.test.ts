import clickOutside from '../../src/utils/clickoutside'
import Better from '../../src'
import {getState} from '../../src/store'
import {Bind} from "../../src/utils/bind"


describe('click-outside', () => {
  const ref = document.createElement('input')
  Better(ref)
  const state = getState()
  document.body.addEventListener('click', Bind(clickOutside, state))
  test('点击输入框会打开弹出框', () => {
    expect(state.visible).toBeFalsy()
    ref.click()
    expect(state.visible).toBeTruthy()
  })
  test('点击外部会关闭弹出框', () => {
    ref.click()
    expect(state.visible).toBeTruthy()
    document.body.click()
    expect(state.visible).toBeFalsy()
  })
})
