export type Placement = 'top' | 'left' | 'bottom' | 'right'
export type datepickerType = 'date' | 'date-range'

export default interface Options<T = (val: unknown) => boolean> {
  placement?: Placement | Placement[]
  type?: datepickerType | datepickerType[]
  unlinkPanels?: boolean | boolean[]
  offset?: number
  zIndex?: number | T
  format?: string | T
  disabled?: (date: Date) => boolean
}
