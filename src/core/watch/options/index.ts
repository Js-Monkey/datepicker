import {addWatch} from '../../../observer/watcher'
import Options from "../../../types/options"
import has from "../../../utils/has"


const options = {
  key: ['options'],
  cb(options: Options) {
    const {type} = options
    if (has(type, 'month')) this.page = 'month'
  }
}

export function watchOptions(): void {
  addWatch([
    options
  ])
}
