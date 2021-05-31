import {addWatch} from '../../../observer/watcher'


const options = {
    key: ['options'],
    cb() {
        this.page = this._type.replace('week', 'date')
    }
}

const visible = {
    key: ['visible'],
    cb() {
        const {range, start, end} = this
        range.status = 'complete'
        if (start.date && start.date) {
            range.start = start.date
            range.end = end.date
        } else {
            range.start = range.end = null
        }
    }
}

export function watchOptions(): void {
    addWatch([
        options,
        visible
    ])
}
