import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {endComponents, endLink, endLinkStart, startLinkEnd, hoverDay, rangeStatus} from "./type/date-range"
import {startComponents, startLink} from "./type/date"

const type = {
  'date-range': [
    startLink,
    startComponents,
    endComponents,
    endLink,
    endLinkStart,
    startLinkEnd,
    hoverDay,
    rangeStatus
  ],
  date: [startLink, startComponents]
}

export function watchDate(options: Options): void {
  addWatch(type[options.type])
}
