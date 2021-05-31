import {getNodeName} from './window'

export function isInputElement(el: HTMLElement | null): el is HTMLInputElement {
    return getNodeName(el) === 'input'
}
