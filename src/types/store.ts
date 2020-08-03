export type stateKey = 'components' | 'utils'

export interface State {
  components: any
  utils: any
  date: any
}

export type Store = State[]
