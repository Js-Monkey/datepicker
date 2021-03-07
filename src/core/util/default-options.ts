import Options from '../../types/options'

function defaultOptions(): Options {
  return {
    placement: 'bottom',
    type: 'date',
    zIndex: 2000,
    unlinkPanels: false,
    format: 'yyyy/MM/dd',
    offset: 12,
    popBody: true
  }
}

export default defaultOptions
