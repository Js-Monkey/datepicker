import {Rect, Transform} from '../../types/utils'
import {addAttr} from '../../utils/attribute'
import {isInBody} from "../../utils/isInBody"
import {deleteRules} from "./create-popover"
import {canIUseAnimation} from "../../utils/env";

function transform(offset: number | string): Transform {
    offset = offset + 'px'
    return {
        top: `translate(0,calc(-100% - ${offset}))`,
        left: `translate(calc(-100% - ${offset}),0)`,
        bottom: `translate(0,${offset})`,
        right: `translate(${offset},0)`
    }
}

export const animations = ['hidden 0.3s', 'show 0.3s']
export const sheetRule = [
    (orn: string) => `@keyframes hidden { 0% {opacity: 1;transform: ${orn} scaleY(1);} 100% {opacity: 0;visibility: hidden;transform: ${orn} scaleY(.8);} }`,
    (orn: string) => `@keyframes show { 0% {display: block;opacity: 0;transform:scaleY(.8) ${orn};} 100% {display: block;opacity: 1;transform: scaleY(1) ${orn};} }`
]

export function updatePopover(vis: boolean): void {
    const el = this.popover
    if (!el) return
    const {zIndex} = this.options
    if (vis) {
        el.style.display = 'inline-block'
        setPopoverLocation.call(this)
    }
    setPopoverStyle(el, zIndex)
    const ss = document.styleSheets[0]
    const animation = animations[Number(vis)]
    if (canIUseAnimation()) {
        deleteRules()
        sheetRule.forEach((r, idx) => ss.insertRule(r(el.style.transform), idx))
        el.style.animation = animation
    } else {
        el.style.display = vis ? 'inline-block' : 'none'
    }
}

export function setPopoverStyle(el: HTMLElement, zx: number): void {
    const style = {
        position: 'absolute',
        'z-index': zx
    }
    addAttr(el, style, 'style')
}

export function setPopoverLocation(): void {
    if (!this.visible) return

    function setTransform(): void {
        popover.style.transform = transform(offset)[placement as 'left']
    }

    function setPosition(): void {
        const position = getPosition(rect, offset)
        Array.from(['left', 'top'] as ['left', 'top']).forEach(attr => (popover.style[attr] = position[placement as 'left'][attr] + 'px'))
    }

    function fixReferencePosition() {
        const {parentNode} = reference
        if (parentNode && parentNode.style) parentNode.style.position = 'relative'
    }

    function setCloseToReference() {
        const {offsetWidth, offsetHeight} = reference
        const x = offsetWidth + offset + 'px'
        const transform = {
            bottom: {
                top: (offsetHeight + offset) + 'px',
                left: 0
            },
            top: {
                top: `calc(-100% - ${offset}px)`,
                left: 0
            },
            left: {
                top: 0,
                right: x + offset
            },
            right: {
                top: 0,
                left: x + offset
            }
        }
        const tp = transform[placement as 'top']
        Object.keys(tp).forEach(key => popover.style[key] = tp[key as never])
    }

    const {popover, reference, options} = this
    const {offset, placement} = options
    const rect = reference.getBoundingClientRect()
    const popInBody = isInBody(popover)
    if (popInBody) {
        setPosition()
        setTransform()
    } else {
        setCloseToReference()
        fixReferencePosition()
    }
}

export function getPosition({top, left, height, width}: Rect, offset: number): Transform<{ left: number; top: number }> {
    const _tTop = top + window.scrollY - offset
    const _bTop = top + height + window.scrollY + offset
    const _tLeft = left + window.scrollX
    const _rLeft = left + width + window.scrollX
    return {
        top: {top: _tTop, left: _tLeft},
        left: {top: _tTop, left: _tLeft},
        bottom: {top: _bTop, left: _rLeft - width},
        right: {top: _tTop, left: _rLeft}
    }
}
