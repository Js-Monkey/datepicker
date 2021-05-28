import {DateComponents, DateData, MonthOrYearComponents, stateDate} from '../../types/store'
import {getDay, getMonth, getNext, getYear, joinDate} from '../../utils/date'
import _for from "../../utils/for"

const dayComponents = (): DateComponents[] =>
    _for(() => ({
        text: '',
        status: '',
        date: ''
    }), 42)

const _Components = (): MonthOrYearComponents[] =>
    _for(() => ({
        status: '',
        date: ''
    }), 12)

function rangeComponents(month: number, year: number): DateData {
    return {
        date: null,
        year,
        month,
        _date: dayComponents(),
        _month: _Components(),
        _year: _Components()
    }
}

export default function (): stateDate {
    const date = new Date()
    const [startYear, startMonth] = [getYear(date), getMonth(date)]
    const [endMonth, endYear] = getNext(startMonth, startYear)
    return {
        range: {
            start: null,
            end: null,
            status: 'complete',
        },
        start: rangeComponents(startMonth, startYear),
        end: rangeComponents(endMonth, endYear),
        today: joinDate(startMonth, startYear, getDay(date)),
        date: null
    }
}
