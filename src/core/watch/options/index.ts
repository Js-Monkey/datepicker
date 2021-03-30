import {addWatch} from '../../../observer/watcher'
import Options from "../../../types/options"


const options = {
  key: ['options'],
  cb(options: Options) {
    const {type} = options
    this.page = type.split('-').shift()
  }
}

export function watchOptions(): void {
  addWatch([
    options
  ])
}
