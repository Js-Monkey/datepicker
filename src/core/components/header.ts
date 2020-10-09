import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'
import {set} from '../../store'

export function addYear(): void {
  // todo
  set('startYear', 2020)
}

function year(type?: HeaderType) {
  const opt: CreateElementOptions = {
    name: 'span',
    text: {
      dep: 'startYear',
      output: val => val + '年'
    },
    style: {
      padding: '0 4px'
    }
  }
  //if (!type) opt.event = '' todo
  return createElement(opt)
}

function month(type?: HeaderType) {
  const opt: CreateElementOptions = {
    name: 'span',
    text: {
      dep: 'startMonth',
      output: val => val + '月'
    },
    style: {
      padding: '0 4px'
    }
  }
  //if (!type) opt.event = '' todo
  return createElement(opt)
}

function preYear() {
  return createElement({
    name: 'svg',
    text: 'pre-year',
    style: {
      float: 'left',
      'margin-left': '10px'
    }
  })
}

function preMonth() {
  return createElement({
    name: 'svg',
    text: 'pre-month',
    style: {
      float: 'left',
      'margin-left': '10px'
    }
  })
}

function nextYear() {
  return createElement({
    name: 'svg',
    text: 'next-year',
    style: {
      float: 'right',
      'margin-right': '10px'
    },
    event: addYear
  })
}

function nextMonth() {
  return createElement({
    name: 'svg',
    text: 'next-month',
    style: {
      float: 'right',
      'margin-right': '5px'
    }
  })
}

export function Header(type?: HeaderType): Node {
  return createElement({
    class: [header],
    children: [preYear(), preMonth(), year(), month(), nextYear(), nextMonth()]
  })
}
