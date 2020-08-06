// import {isArray, isFunc} from './typeOf'
// import {on} from './event'
//
// const nodeOptions: any = {
//   event: (el: Event, node: any) => {
//     if (isArray(node.event)) {
//       node.event.forEach((e: {name: any; event: any}) => {
//         on(el, e.name, e.event as any)
//       })
//     } else {
//       on(el, 'click', node.event as any)
//     }
//   },
//   val: (el, node) => {
//     if (node.name !== 'svg') {
//       ;(el as HTMLElement).innerText = node.val
//     }
//   },
//   class: (el, node) => el.setAttribute('class', (node.class as any).join(' ')),
//   style: (el, node) => el.setAttribute('style', node.style as any),
//   update: (el, node) => node.update?.method(el, node.update?.name),
//   children: (el, node) => {
//     node.children?.forEach(child => {
//       const childNode = createNode(child)
//       el.appendChild(childNode)
//     })
//   },
//   name: () => {
//     // todo
//   },
//   initial: (el, node) => {
//     if (node.initial === 'hidden') {
//       addAttr(el, 'display:none', 'style')
//     }
//   }
// }
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
// export function createNode(node: any): Element | HTMLElement {
//   if (node.el && isFunc(node.el)) return (node.el as any)()
//   if (node.el) return node.el as any
//   const el = node.name === 'svg' ? createSVG(node.val) : createEL(node.name)
//   Object.keys(node).forEach(key => {
//     nodeOptions[key](el as HTMLElement, node)
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
