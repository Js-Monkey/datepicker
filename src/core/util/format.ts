import {Formats} from "../../types/core"
import {isArray} from "../../utils/typeOf"
import {getDay, getMonth, getYear, getYearWeek} from "../../utils/date"
import {DateType} from "../../types/utils"
import {LocaleConfig} from "../../types/options";

const token = /d{1,2}|M{1,2}|w{1,2}|yy(?:yy)?|"[^"]*"|'[^']*'/g

const formats: Formats = {
  d: (date: Date) => getDay(date),
  dd: (date: Date) => pad(getDay(date)),
  M: (date: Date) => getMonth(date),
  MM: (date: Date) => pad(getMonth(date)),
  yy: (date: Date) => String(getYear(date)).substr(2),
  yyyy: (date: Date) => getYear(date),
  w:(date: Date,locale)=> getYearWeek(date,locale),
  ww:(date: Date,locale)=> getYearWeek(date,locale),
}

function pad(val: string | number, len?: number) {
  val = String(val)
  len = len || 2
  while (val.length < len) {
    val = '0' + val
  }
  return val
}

export function getFormatDate(date: DateType | DateType[], format: string,locale: LocaleConfig): string | null{
  function formatParse(dateStr: DateType): string | null {
    if(!dateStr) return null
    return format.replace(token, val => formats[val as 'dd'](new Date(dateStr.toString()),locale))
  }

  if (isArray(date)) return date.map(d => formatParse(d)).join(' - ')
  return formatParse(date)
}
