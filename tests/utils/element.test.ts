import createSVG, {appendChild, createEL, createElement} from '../../src/utils/element'
import {doc} from 'prettier'

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
        event: [{name: 'click', handler: fn}]
      }) as HTMLElement
      tree.click()
      expect(fn.mock.calls.length).toBe(1)
    })

    describe('support addEventListener: other', () => {
      const fn = jest.fn()
      const tree = createElement({
        event: fn
      }) as HTMLElement
      tree.click()
      expect(fn.mock.calls.length).toBe(1)
    })

    describe('support addEventListener: focus', () => {
      const fn = jest.fn()
      const tree = createElement({
        name: 'input',
        event: [{name: 'focus', handler: fn}]
      }) as HTMLElement
      tree.focus()
      expect(fn.mock.calls.length).toBe(1)
    })
    describe('support set innerText', () => {
      const tree = createElement({
        innerText: 'just test'
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
        style: 'height:100px'
      })
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
        children: [{name: 'span', event: fn}]
      })
      const children = tree.childNodes
      expect(children.length).toBe(1)
      ;(tree.childNodes[0] as HTMLElement).click()
      expect(fn).toBeCalled()
    })
  })

  describe('appendChild', () => {
    test('support appendChild', () => {
      const wrapper = createEL()
      const child = createEL()
      appendChild(child, wrapper)
      expect(wrapper.childNodes[0]).toEqual(child)
    })
    test('support batch appendChild', () => {
      const childrenNodeNames = ['div', 'span', 'input']
      const wrapper = createEL()
      const children = childrenNodeNames.map(name => createEL(name))
      appendChild(children, wrapper)
      expect(wrapper.childNodes.length).toBe(3)
      expect(Array.from(wrapper.childNodes).map(node => node.nodeName.toLowerCase())).toEqual(childrenNodeNames)
    })

    test('second parameter is undefined', () => {
      const node = createEL()
      appendChild(node)
      const isInBody = Array.from(document.body.childNodes).find(child => node === child)
      expect(isInBody).toBeTruthy()
    })
  })
})
