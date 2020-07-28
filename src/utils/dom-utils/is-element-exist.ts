export function isElementExist(el: HTMLElement): boolean {
    if (!el) return false
    const bodyChildren = document.body.childNodes
    let isExist = false
    for (let i = bodyChildren.length; i >= 0; i--) {
        if (bodyChildren[i] === el) {
            isExist = true
            break;
        }
    }
    return isExist
}