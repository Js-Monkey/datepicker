import {addWatch} from '../../../observer/watcher'


const options = {
  key: ['options'],
  cb() {
    this.page = this._type
  }
}

export function watchOptions(): void {
  addWatch([
    options
  ])
}
