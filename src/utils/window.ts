export const getNodeName = (element: HTMLElement) => {
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

export const isHTMLElement = (node: HTMLElement) => {
  return node instanceof window.HTMLElement
}

export const getAllScrollParents = (node: HTMLElement, list?: HTMLElement[]): unknown => {
  if (!list) list = []
  if (isBody(node)) return list
  if (isHTMLElement(node)) {
    const {overflow, overflowX, overflowY} = getComputedStyle(node)
    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
      list.push(node)
    }
  }
  return getAllScrollParents(getParentNode(node), list)
}
