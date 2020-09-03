import {stateDate} from '../../types/store'

export const dw = {
  startDate() {
    //todo
  }
}

export default function (): stateDate {
  return {
    startDate: new Date()
  }
}
