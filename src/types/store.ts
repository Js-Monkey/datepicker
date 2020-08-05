export interface stateComponent {
  reference: null | HTMLElement
}

export interface State extends stateComponent {
  components: any
  utils: any
  date: any
}

export type Store = State[]
