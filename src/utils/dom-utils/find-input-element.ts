/** @format */

import {getNodeName} from './node'

export function isInput($el: any): boolean {
  return getNodeName($el) === 'input'
}

export function _findNode(el: any): boolean | Node {
  if (isInput(el)) return el
  const childLists = el.childNodes
  if (!childLists) return false
  let inputEl
  for (const child of childLists) {
    const node = isInput(child) ? child : _findNode(child)
    if (node) inputEl = node
  }
  return (inputEl as Node) || false
}

export function findInputElement($el: any): boolean | Node {
  const nodeName = getNodeName($el)
  if (nodeName) return _findNode($el)
  console.error('Invalid argument provided. They must be a Input element')
  return false
}
