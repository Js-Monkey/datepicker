import {getNodeName} from './window'

export function isInput(el: HTMLElement): boolean {
  return getNodeName(el) === 'input'
}

function findNode(el: any): null | HTMLElement {
  if (isInput(el)) return el
  const childLists = el.childNodes
  if (!childLists) return null
  let inputEl
  for (const child of childLists) {
    const node = isInput(child) ? child : findNode(child)
    if (node) inputEl = node
  }
  return inputEl || false
}

export function findInputElement(el: HTMLElement): HTMLElement | null {
  const nodeName = getNodeName(el)
  if (nodeName) return findNode(el)
  console.error('Invalid argument provided. They must be a Input element')
  return null
}
