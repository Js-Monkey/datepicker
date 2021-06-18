import {getNodeName} from './window'

export function isInput(el: HTMLElement): boolean {
    if(!el) return false
    return getNodeName(el) === 'input'
}

function findNode(el: any): null | HTMLInputElement {
    //todo childNodes in for of?
    if (isInput(el)) return el
    if(!el) return null
    const childLists = el.childNodes
    if (!childLists) return null
    let inputEl
    for (const child of childLists) {
        const node = isInput(child) ? child : findNode(child)
        if (node) inputEl = node
    }
    return inputEl || null
}

export function findInputElement(el: HTMLElement): HTMLInputElement {
     const node = findNode(el)
    if(node) return node
    throw  Error('Invalid argument provided. They must be a Input element')
}
