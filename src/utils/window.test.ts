import {getScrollParents, getNodeName, getParentNode, isBody, isHTMLElement} from './window'

function createElement(name?: string): HTMLElement {
  if (!name) name = 'div'
  return document.createElement(name)
}

describe('window', () => {
  let level1 = createElement()
  let level2 = createElement()
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const body = document.body
  const html = document.querySelector('html')
  beforeEach(() => {
    level1 = createElement()
    level2 = createElement('span')
    level1.appendChild(level2)
    body.appendChild(level1)
  })
  test('function getNodeName', () => {
    expect(getNodeName(null)).toBeNull()
    expect(getNodeName(level1)).toEqual('div')
    expect(getNodeName(level2)).toEqual('span')
  })

  test('function getParentNodeName', () => {
    expect(getParentNode(level2)).toEqual(level1)
    const body = document.body
    const html = document.querySelector('html')
    expect(getParentNode(body)).toEqual(html)
    expect(getParentNode(html as HTMLElement)).toEqual(html)
  })

  test('function isBody', () => {
    expect(isBody(body)).toBeTruthy()
    expect(isBody(level1)).toBeFalsy()
    expect(isBody(level2)).toBeFalsy()
    expect(isBody(html as HTMLElement)).toBeTruthy()
  })

  test('function isHTMLElement', () => {
    expect(isHTMLElement(body)).toBeTruthy()
    expect(isHTMLElement(level1)).toBeTruthy()
    expect(isHTMLElement(level2)).toBeTruthy()
    expect(isHTMLElement(svg)).toBeFalsy()
  })

  test('function getScrollParents', () => {
    expect(getScrollParents(level2)).toEqual([])
    level1.style.overflow = 'scroll'
    expect(getScrollParents(level2)).toEqual([level1])
    expect(getScrollParents(body)).toEqual([])
  })
})
