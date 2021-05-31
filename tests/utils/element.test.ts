import createSVG, {createEL} from '../../src/utils/element'
import {addAttr, resetAttr} from '../../src/utils/attribute'

function isNode(el: any) {
    expect(el.addEventListener).toBeDefined()
    expect(el instanceof window.HTMLElement).toBeTruthy()
}

describe('createEl', () => {
    it('should get a Node which nodename is parameter value', () => {
        const span = createEL('span')
        expect(span.nodeName.toLowerCase()).toBe('span')
        isNode(span)
    })

    it('if `parameter` is null, return `div`', () => {
        const div = createEL()
        expect(div.nodeName.toLowerCase()).toBe('div')
        isNode(div)
    })
})

describe('createSvg', () => {
    it('should get a svg', () => {
        const div = createSVG('month')
        expect(div.nodeName.toLowerCase()).toBe('svg')
    })
})

describe('resetAttr', () => {
    it('should reset element attribute, the attribute name is third parameter value', () => {
        const el = createEL()
        const style = 'width:100px'
        resetAttr(el, style, 'style')
        const classes = el.getAttribute('style')
        expect(classes).toContain(style)
    })
    it('if parameters is null, the attribute name is `class`', () => {
        const el = createEL()
        const className = 'initial-class'
        resetAttr(el, className)
        const classes = el.getAttribute('class')
        expect(classes).toContain(className)
    })
})

describe('addAttr', () => {
    it('should add element attribute, and merge the original values', () => {
        const el = createEL()
        const initialStyle = (el.style.height = '100px')
        const style = 'width:100px'
        addAttr(el, style, 'style')
        const elStyle = el.getAttribute('style')
        expect(elStyle).toContain(style)
        expect(elStyle).toContain(initialStyle)
    })

    it('if parameters is null, the attribute name is `class`', () => {
        const el = createEL()
        const initialClass = 'initial-class'
        const newClasses = 'initial-class'
        addAttr(el, initialClass)
        addAttr(el, newClasses)
        const classes = el.getAttribute('class')
        expect(classes).toContain(initialClass)
        expect(classes).toContain(newClasses)
    })


    // test('param type is object', () => {
    //   const el = createEL()
    //   const style = {
    //     position: 'absolute',
    //     display: 'flex'
    //   }
    //   addAttr(el, style, 'style')
    //   const elStyle = 'position:absolute;display:flex'
    //   expect(elStyle).toEqual(style)
    // })
})

