import {getNodeName} from './node'

export function isInput(el: HTMLElement): boolean {
  return getNodeName(el) === 'input'
}

function findNode(el: any): boolean | Node {
  if (isInput(el)) return el
  const childLists = el.childNodes
  if (!childLists) return false
  let inputEl
  for (const child of childLists) {
    const node = isInput(child) ? child : findNode(child)
    if (node) inputEl = node
  }
  return (inputEl as Node) || false
}

export function findInputElement(el: HTMLElement): boolean | Node {
  const nodeName = getNodeName(el)
  if (nodeName) return findNode(el)
  console.error('Invalid argument provided. They must be a Input element')
  return false
}
