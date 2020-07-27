export type placement = 'top' |'left' |'bottom' |'right'
export type datepickerType = 'date'|'date-range'

export interface Options {
    placement:placement
    type?:datepickerType
    unlinkPanels?:boolean
    offset?:number
    zIndex?:number
    format?:string
    disabled?:(date:Date)=>boolean
}

export default Options

export type formatKey = 'dd'|'d'|'yyyy'|'yy'|'M'|'MM'
