export type placement = 'top' | 'left' | 'bottom' | 'right'
export type datepickerType = 'date' | 'date-range'

export default interface Options {
  placement: placement | placement[]
  type?: datepickerType | datepickerType[]
  unlinkPanels?: boolean | boolean[]
  offset?: number
  zIndex?: number
  format?: string | ((val: unknown) => boolean)
  disabled?: (date: Date) => boolean
}
