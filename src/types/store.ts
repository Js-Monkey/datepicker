export type stateKey = 'elements' | 'reference' | 'date' | 'component'

export interface State {
  reference: any
  elements: any
  date: any
  component: any
}

export type Store = State[]
