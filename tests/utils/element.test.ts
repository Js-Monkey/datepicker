import createSVG, {addAttr, createEL, createElement, resetAttr, toggleCls} from '../../src/utils/element'

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

  describe('createElement', () => {
    describe('support createElement', () => {
      const tree = createElement({
        name: 'span'
      })
      expect(tree.nodeName.toLowerCase()).toBe('span')
      isNode(tree)
    })
    describe('support create svg', () => {
      const tree = createElement({
        name: 'svg'
      })
      expect(tree.nodeName.toLowerCase()).toBe('svg')
    })
    describe('support addEventListener', () => {
      const fn = jest.fn()
      const tree = createElement({
        event: {
          cb: [{name: 'click', handler: fn}]
        }
      }) as HTMLElement
      tree.click()
      expect(fn.mock.calls.length).toBe(1)
    })

    describe('support addEventListener: other', () => {
      const fn = jest.fn()
      const tree = createElement({
        event: {
          cb: fn
        }
      }) as HTMLElement
      tree.click()
      expect(fn.mock.calls.length).toBe(1)
    })

    describe('support addEventListener: focus', () => {
      const fn = jest.fn()
      const tree = createElement({
        name: 'input',
        event: {
          cb: [{name: 'focus', handler: fn}]
        }
      }) as HTMLElement
      tree.focus()
      expect(fn.mock.calls.length).toBe(1)
    })
    describe('support set innerText', () => {
      const tree = createElement({
        text: 'just test'
      }) as HTMLElement
      expect(tree.innerText).toBe('just test')
    })
    describe('support set class', () => {
      const tree = createElement({
        class: ['wrapper', 'disabled']
      }) as HTMLElement
      expect(tree.getAttribute('class')).toEqual('wrapper disabled')
    })
    describe('support set style', () => {
      const tree = createElement({
        style: {
          height: '100px'
        }
      }) as HTMLElement
      expect(tree.getAttribute('style')).toEqual('height:100px')
    })
    describe('support append childrenNodes', () => {
      const tree = createElement({
        children: [{name: 'span'}, {name: 'div'}]
      })
      expect(tree.childNodes.length).toBe(2)
      expect(tree.childNodes).toMatchSnapshot()
    })
    describe('children support append addEventListener', () => {
      const fn = jest.fn()
      const tree = createElement({
        children: [
          {
            name: 'span',
            event: {
              cb: fn
            }
          }
        ]
      })
      const children = tree.childNodes
      expect(children.length).toBe(1)
      ;(tree.childNodes[0] as HTMLElement).click()
      expect(fn).toBeCalled()
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

    test('param type is object', () => {
      const el = createEL()
      const style = {
        position: 'absolute',
        zIndex: 2000,
        display: 'flex'
      }
      addAttr(el, style, 'style')
      const elStyle = JSON.parse(el.getAttribute('style') as string)
      expect(elStyle).toEqual(style)
    })
  })
  describe('toggleCls', () => {
    test('toggle class', () => {
      const el = createEL()
      Array.from({length: 5}).forEach((_, idx) => {
        const even = idx & 1
        toggleCls(el, ['classA', 'classB'], even)
        expect(el.getAttribute('class')?.trim()).toEqual(even ? 'classA' : 'classB')
      })
    })

    test('not affect other classes', () => {
      const el = createEL()
      el.setAttribute('class', 'classC classD')
      Array.from({length: 2}).forEach((_, idx) => {
        const even = idx & 1
        toggleCls(el, ['classA', 'classB'], even)
        expect(el.getAttribute('class')).toContain('classC')
        expect(el.getAttribute('class')).toContain('classD')
      })
    })
  })
})
