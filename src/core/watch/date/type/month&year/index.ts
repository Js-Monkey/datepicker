import {Sub} from "../../../../../types/observer"
import {updateYear, updateMonth} from "./public"

const key = (name: string) => {
    return {name, childKey: ['year', 'date']}
}

export function monthOrYear(type = true, name = 'start'): Sub {
    return {
        key: key(name),
        cb: type ? updateMonth : updateYear,
    }
}


export function LinkYear(name: 'start' | 'end' = 'start', isTen = false): Sub {
    const spacing = isTen ? 10 : 1
    return {
        key: {name, childKey: ['year']},
        cb(year: number): void {
            if (name === 'start') {
                this.end.year = (year + spacing)
            } else {
                this.start.year = (year - spacing)
            }
        }
    }
}
