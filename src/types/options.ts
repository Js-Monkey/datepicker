export type Placement = 'top' | 'left' | 'bottom' | 'right'


export interface MonthType<T = unknown, U = any> {
  date: T
  month: T
  'month-range': T | U
}

export interface DateType<T = unknown, U = any> {
  date: T
  'date-range': T | U
}


export interface DatepickerType<T = unknown, U = any> extends DateType, MonthType {
  date: T
  'date-range': T | U
  month: T
  'month-range': T | U
}


export default interface Options {
  placement: Placement
  type: keyof DatepickerType
  unlinkPanels: boolean
  offset: number
  zIndex: number
  format: string
  popOuter: boolean
  disabled?: (date: Date) => boolean
}

export interface AcceptOptions<T = (val: unknown) => boolean> {
  placement?: Placement[]
  type?: (keyof DatepickerType)[]
  unlinkPanels?: boolean[]
  offset?: number
  zIndex?: T
  format?: T
  popOuter?: boolean
  disabled?: (date: Date) => boolean
}
