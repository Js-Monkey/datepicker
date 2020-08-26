// import {isArray, isFunc} from './typeOf'
// import {on} from './event'
// import {NodeOptions} from '../types/utils'
//
// const nodeOptions = {}
//
// export function createEL(tagName?: string): HTMLElement {
//   if (!tagName) tagName = 'div'
//   return document.createElement(tagName)
// }
//
// export default function createSVG(name: string): Element {
//   const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
//   const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
//   use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${name}`)
//   svg.appendChild(use)
//   return svg
// }
//
// export function createNode(options: NodeOptions): Element | HTMLElement {
//   if (options.el && isFunc(options.el)) return (options.el as any)()
//   if (options.el) return options.el as any
//   const el = options.name === 'svg' ? createSVG(options.val) : createEL(options.name)
//   Object.keys(options).forEach(key => {
//     nodeOptions[key](el as HTMLElement, options)
//   })
//   return el
// }
//
// export function appendChild(children: Element | Element[], parent?: Element): void {
//   if (!parent) parent = document.body
//   if (isArray(children)) {
//     children.forEach(child => {
//       parent?.appendChild(child)
//     })
//   } else {
//     parent.appendChild(children as Element)
//   }
// }
//
// export function resetAttr(el: HTMLElement, val: string, name?: string) {
//   if (!name) name = 'class'
//   el.setAttribute(name, val)
// }
//
// export function addAttr(el: HTMLElement, val: string, name?: string) {
//   if (!name) name = 'class'
//   const attr = el.getAttribute(name)
//   if (attr) {
//     if (attr.indexOf(val) === -1) {
//       val += ' ' + attr
//       el.setAttribute(name, val)
//     }
//   } else {
//     el.setAttribute(name, val)
//   }
// }
