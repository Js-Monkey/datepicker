import createSVG, {createEL} from '../../src/utils/element'
import {addAttr, resetAttr} from '../../src/utils/attribute'

function isNode(el: any) {
  expect(el.addEventListener).toBeDefined()
  expect(el instanceof window.HTMLElement).toBeTruthy()
}

describe('element', () => {
  describe('createEl', () => {
    test('createEL no params', () => {
      const div = createEL()
      expect(div.nodeName.toLowerCase()).toBe('div')
      isNode(div)
    })

    test('createEL custom params', () => {
      const span = createEL('span')
      expect(span.nodeName.toLowerCase()).toBe('span')
      isNode(span)
    })
  })

  describe('createSvg', () => {
    test('is svg', () => {
      const div = createSVG('left')
      expect(div.nodeName.toLowerCase()).toBe('svg')
    })

    test('svg: left arrow', () => {
      const div = createSVG('left')
      expect(div).toMatchSnapshot()
    })
  })

  describe('resetAttr', () => {
    test('support setAttribute:no params', () => {
      const el = createEL()
      const className = 'initial-class'
      resetAttr(el, className)
      const classes = el.getAttribute('class')
      expect(classes).toContain(className)
    })
    test('support setAttribute', () => {
      const el = createEL()
      const style = 'width:100px'
      resetAttr(el, style, 'style')
      const classes = el.getAttribute('style')
      expect(classes).toContain(style)
    })
  })

  describe('addAttr', () => {
    test('support addAttribute:no params', () => {
      const el = createEL()
      const initialClass = 'initial-class'
      const newClasses = 'initial-class'
      addAttr(el, initialClass)
      addAttr(el, newClasses)
      const classes = el.getAttribute('class')
      expect(classes).toContain(initialClass)
      expect(classes).toContain(newClasses)
    })
    test('support addAttribute', () => {
      const el = createEL()
      const initialStyle = (el.style.height = '100px')
      const style = 'width:100px'
      addAttr(el, style, 'style')
      const elStyle = el.getAttribute('style')
      expect(elStyle).toContain(style)
      expect(elStyle).toContain(initialStyle)
    })

    // test('param type is object', () => {
    //   const el = createEL()
    //   const style = {
    //     position: 'absolute',
    //     display: 'flex'
    //   }
    //   addAttr(el, style, 'style')
    //   const elStyle = 'position:absolute;display:flex'
    //   expect(elStyle).toEqual(style)
    // })
  })
})
