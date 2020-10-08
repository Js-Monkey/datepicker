import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {CreateElementOptions} from '../../types/utils'

export function addYear(): void {
  // todo
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
    text: 'd-left',
    style: {
      float: 'left',
      'margin-left': '10px'
    },
    event: addYear
  }) as HTMLElement
}

function preMonth() {
  return createElement({
    name: 'svg',
    text: 'left',
    style: {
      float: 'left',
      'margin-left': '10px'
    },
    event: addYear
  }) as HTMLElement
}

function nextMonth() {
  return createElement({
    name: 'svg',
    text: 'd-right',
    style: {
      float: 'right',
      'margin-right': '10px'
    }
  }) as HTMLElement
}

function nextYear() {
  return createElement({
    name: 'svg',
    text: 'right',
    style: {
      float: 'right',
      'margin-right': '5px'
    }
  }) as HTMLElement
}

export function Header(type?: HeaderType): Node {
  return createElement({
    class: [header],
    children: [preYear(), preMonth(), year(), month(), nextMonth(), nextYear()]
  })
}
