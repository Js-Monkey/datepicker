import {addWatch} from "../../../observer/watcher"
import {DateData, State} from "../../../types/store"
import {
  daysInAMonth,
  getNext,
  getPre,
  joinDate,
  monthFirstDay,
} from "../../../utils/date"
import Options from "../../../types/options"

function updateDayComponents(
  month: number,
  year: number,
  state: DateData
): void {
  const [preMonth, preYear] = getPre(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  console.log(state)
  state.components.forEach(
    (item, index) => {
      const idx = index + 1
      const day =
        index < fd
          ? preDays - fd + idx
          : index < fd + days
          ? idx - fd
          : idx - fd - days
      item.text = String(day)
      item.status =
        index < fd
          ? "pre"
          : idx > fd + days
          ? "next"
          : joinDate(year, month, day) === state.date
            ? "selected"
            : ""
    }
  )
}

function monthYearLink(
  month: number,
  state: State,
  m: "startMonth" = "startMonth",
  y: "startYear" = "startYear"
) {
  // if (month === 13) {
  //   state[m] = 1
  //   state[y] += 1
  // }
  // if (month === 0) {
  //   state[m] = 12
  //   state[y] -= 1
  // }
}

function endStartLink(em: number, ey: number, state: State): void {
  //[state.month, state.year] = getPre(em, ey)
}

function startEndLink(em: number, ey: number, state: State): void {
  // [state.month, state.year] = getNext(em, ey)
}

export function watchDate(options: Options): void {
  // addWatch({
  //   key: ["startMonth"],
  //   cb: monthYearLink,
  // })
  addWatch({
    key: {
      name: 'start',
      childKey: ["month", "year"]
    },
    cb() {
      updateDayComponents(
        ...((arguments as unknown) as [number, number, DateData])
      )
      startEndLink(...((arguments as unknown) as [number, number, State]))
    },
  })
  // if (isHas(options.type, "range")) {
  //   addWatch({
  //     key: {
  //       name: 'end',
  //       childKey: ["month", "year"]
  //     },
  //     cb: Bind(updateDayComponents, "end"),
  //   })
  //   addWatch({
  //     key: {
  //       name: 'end',
  //       childKey: ["month"]
  //     },
  //     cb: Bind(monthYearLink, "endMonth", "endYear"),
  //   })
  //   addWatch({
  //     key: {
  //       name: 'end',
  //       childKey: ["month", "year"]
  //     },
  //     cb: endStartLink,
  //   })
  // }
}
