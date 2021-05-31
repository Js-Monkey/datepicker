export function getNodeName(element: HTMLElement | null): string | null {
    return element ? (element.nodeName || '').toLowerCase() : null
}

export function getParentNode(el: HTMLElement): HTMLElement {
    if (getNodeName(el) === 'html') return el
    return (el.parentNode || document.ownerDocument || document.documentElement) as HTMLElement
}

export function isBody(node: HTMLElement): boolean {
    const name = getNodeName(node)
    return name === 'body' || name === 'html'
}

export function isNode(node: unknown): node is Node {
    return node instanceof window.Node
}

export function getScrollParents(node: HTMLElement, list: HTMLElement[] = []): HTMLElement[] {
    if (isBody(node)) return list
    if (isNode(node)) {
        const {overflow, overflowX, overflowY} = getComputedStyle(node)
        if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
            list.push(node)
        }
    }
    return getScrollParents(getParentNode(node), list)
}
