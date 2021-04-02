import Options, {PickerOptions} from '../../types/options'
import {mergeOptions} from "../../utils/merge"

const opt: Options = {
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    unlinkPanels: false,
    format: 'yyyy/MM/dd',
    offset: 12,
    insertTo: 'body',
    binding: true,
    disabled: false,
    disabledDate: null,
    themeColor: '',
    rangeBgColor: '',
    tdColor:'',
    thColor:''
}


export function changeOpt(target: PickerOptions): void {
    mergeOptions(opt, target)
}

function defaultOptions(): Options {
    return Object.create(opt)
}

export default defaultOptions
