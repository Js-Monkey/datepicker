export type Placement = 'top' | 'left' | 'bottom' | 'right'

export interface DatepickerType <T = unknown, U = any>{
  date: T
  'date-range': T | U
  month: T
}


export default interface Options {
  placement: Placement
  type: keyof DatepickerType
  unlinkPanels: boolean
  offset: number
  zIndex: number
  format: string
  disabled: (date: Date) => boolean
}

export interface AcceptOptions<T = (val: unknown) => boolean> {
  placement?: Placement[]
  type?: (keyof DatepickerType)[]
  unlinkPanels?: boolean[]
  offset?: number
  zIndex?: T
  format?: T
  disabled?: (date: Date) => boolean
}
