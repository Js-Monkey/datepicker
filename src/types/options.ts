export type Placement = 'top' | 'left' | 'bottom' | 'right'
export type datepickerType = 'date' | 'date-range'

export default interface Options {
  placement: Placement
  type: datepickerType
  unlinkPanels: boolean
  offset: number
  zIndex: number
  format: string
  disabled: (date: Date) => boolean
}

export interface AcceptOptions<T = (val: unknown) => boolean> {
  placement?: Placement[]
  type?: datepickerType[]
  unlinkPanels?: boolean[]
  offset?: number
  zIndex?: T
  format?: T
  disabled?: (date: Date) => boolean
}
