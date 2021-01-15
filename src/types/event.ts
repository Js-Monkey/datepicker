export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'scroll' | 'resize' | 'focus' | 'blur'

export interface Handler {
  (...arg: any): unknown
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
    parentNode: ParentNode
  }
}

export interface Res{
  code: 200 | 401
  status: 0
  data:{
    total: number
    page_num: number
    data:{

    }
  }
}
