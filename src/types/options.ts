export type placement = 'top' |'left' |'bottom' |'right'
export type datepickerType = 'date'|'date-range'

export interface Options {
    placement:placement|placement[]
    type?:datepickerType|datepickerType[]
    unlinkPanels?:boolean|boolean[]
    offset?:number
    zIndex?:number
    format?:string|((val:any)=>boolean)
    disabled?:(date:Date)=>boolean
}
export type OptionsKey = 'placement'|'type'|'unlinkPanels'|'offset'|'zIndex'|'format'|'disabled'

export default Options

export type formatKey = 'dd'|'d'|'yyyy'|'yy'|'M'|'MM'
