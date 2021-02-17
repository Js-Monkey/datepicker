import {addWatch} from '../../../observer/watcher'
import Options from "../../../types/options"


const options = {
  key: ['options'],
  cb(options: Options) {
    const {type} = options
    if (type.indexOf('month') > -1) this.page = 'month'
  }
}

export function watchOptions(): void {
  addWatch([
    options
  ])
}
