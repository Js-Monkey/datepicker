import {resetSelectColor, resetHoverColor} from "../../src/utils/theme"
import {State} from "../../src/types/store"

describe('Theme', () => {
    describe('resetHoverColor', () => {
        it('should set themeColor when mouseenter', () => {
            const div = document.createElement('div')
            resetHoverColor(div, '#ffffff')
            const mouseenter = new Event('mouseenter')
            div.dispatchEvent(mouseenter)
            expect(div.style.color).toBe('rgb(255, 255, 255)')
        });
        it('should set themeColor when mouseleave', () => {
            const div = document.createElement('div')
            resetHoverColor(div, '#ffffff')
            const mouseenter = new Event('mouseenter')
            div.dispatchEvent(mouseenter)
            const mouseleave = new Event('mouseleave')
            div.dispatchEvent(mouseleave)
            expect(div.style.color).toBe('')
        });
    })
    describe('resetSelectColor', () => {
        const state = {
            options: {
                rangeBgColor: '#f3f3f3',
                themeColor: '#f3f3f3'
            }
        } as State
        it('should set rangeBgColor', () => {
            const parent = document.createElement('div')
            const children = document.createElement('div')
            parent.appendChild(children)
            resetSelectColor(parent, state, '')
            expect(children.style.backgroundColor).toBe('')
            resetSelectColor(parent, state, 'inRange')
            expect(children.style.backgroundColor).toBe('rgb(243, 243, 243)')
        });

    })
})
