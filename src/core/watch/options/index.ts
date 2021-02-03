import {addWatch} from '../../../observer/watcher'
import Options from "../../../types/options"


const options = {
  key: ['options'],
  cb(options: Options) {
    const {type} = options
    if (type === 'month') this.page = 'month'
  }
}

export function watchOptions(): void {
  addWatch([
    options
  ])
}
