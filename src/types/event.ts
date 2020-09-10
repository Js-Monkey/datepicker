export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'scroll' | 'resize' | 'focus' | 'blur'

export interface Handler {
  (e: Event): unknown
}

export interface _Event {
  isTrusted: boolean
  screenX: number
  screenY: number
  clientX: number
  clientY: number
  type: eventType
  offsetX: number
  offsetY: number
  path: any[]
  target: {
    innerText: string
    dataset: {
      view: 'next' | 'pre'
    }
  }
}
