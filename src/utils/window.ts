export const getNodeName = (element:HTMLElement) => {
    return element ? (element.nodeName || '').toLowerCase() : null
}

export const getParentNode = (el:any) => {
    if (getNodeName(el) === 'html') return el
    return (
        el.parentNode || el.host || document.ownerDocument || document.documentElement
    )
}

export const isBody = (node:any)=>{
    let name =getNodeName(node)
    return name === 'body'||name==='html'
}

export const isHTMLElement = (node:any)=> {
    return node instanceof window.HTMLElement
}

export const getAllScrollParents = (node:any,list?:any):any=> {
    if(!list)list = []
    if (isBody(node))return list
    if (isHTMLElement(node)) {
        const {overflow, overflowX, overflowY} = getComputedStyle(node)
        if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
            list.push(node)
        }
    }
    return getAllScrollParents(getParentNode(node),list)
}