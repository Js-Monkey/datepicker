import {Sub} from './observer'
import {State} from "./store"

export interface UtilObject {
    [key: string]: any
}

export type DateType = string | Date | null

export interface Fn {
    (...arg: any): any
}

export interface Types {
    Number: string
    String: string
    Function: string
    Array: string
    Date: string
    Object: string
    Boolean: string
}

export interface Rect<T = number> {
    width: T
    height: T
    left: T
    top: T
}

export interface Transform<T = string> {
    top: T
    left: T
    bottom: T
    right: T
}

export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'focus'

export type eventHandler = (...arg: any) => unknown

export interface _EventListener {
    name: eventType
    handler: eventHandler
}

export interface EventListenerHasArguments {
    arg: any
    listener: eventHandler | _EventListener[]
}

export interface Style {
    height?: string
    width?: string
    float?: 'left' | 'right'
    color?: string
    backgroundColor?: string
    margin?: string
    'margin-left'?: string
    'margin-right'?: string
    'margin-top'?: string
    'margin-bottom'?: string
    padding?: string
    position?: 'relative' | 'absolute'
    left?: string
    right?: string
    top?: string
    bottom?: string
    cursor?: 'default' | 'pointer'
    transform?: string
    'text-align'?: string
    display?: 'inline-block' | 'none' | 'block'
    'border-right'?: string
}

export interface CreateElement {
    (...arg: any): Node
}

export interface updateOptions<T = string> extends Sub<T> {
    static?: string[]
}

export interface DynamicStyle {
    display?: updateOptions
    color?: updateOptions
    background?: updateOptions
}

export interface CreateElementOptions {
    name: 'span' | 'div' | 'ul' | 'li' | 'input' | 'svg' | 'table' | 'tr' | 'th' | 'td' | 'thead' | 'tbody' | 'i'
    text: string | Sub<string>
    class: updateOptions | string[]
    event: eventHandler | _EventListener[] | EventListenerHasArguments
    style: Style
    $style: DynamicStyle
    children: (Partial<CreateElementOptions> | CreateElement)[]
    hidden: boolean
}

interface HandlerCb<V> {
    (el: HTMLElement, val: V, state: State): void
}

export type Handler = {
    name: HandlerCb<string>
    text: HandlerCb<string>
    class:HandlerCb<Sub<string>>
    event: HandlerCb<EventListenerHasArguments>
    style: HandlerCb<Style>
    $style: HandlerCb<{[key in keyof Style]: Sub<string>}>
    children:HandlerCb<Partial<CreateElementOptions>[]>
    hidden: HandlerCb<boolean>
}

export interface WeekRange {
    start: Date
    end: Date
}
