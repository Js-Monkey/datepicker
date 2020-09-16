export const getNodeName = (element: HTMLElement | null) => {
  return element ? (element.nodeName || '').toLowerCase() : null
}

export const getParentNode = (el: HTMLElement): HTMLElement => {
  if (getNodeName(el) === 'html') return el
  return (el.parentNode || document.ownerDocument || document.documentElement) as HTMLElement
}

export const isBody = (node: HTMLElement) => {
  const name = getNodeName(node)
  return name === 'body' || name === 'html'
}

export const isHTMLElement = (node: unknown) => {
  return node instanceof window.HTMLElement
}

export const getScrollParents = (node: HTMLElement, list?: HTMLElement[]): HTMLElement[] => {
  if (!list) list = []
  if (isBody(node)) return list
  if (isHTMLElement(node)) {
    const {overflow, overflowX, overflowY} = getComputedStyle(node)
    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
      list.push(node)
    }
  }
  return getScrollParents(getParentNode(node), list)
}
