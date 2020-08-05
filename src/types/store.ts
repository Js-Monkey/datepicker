export interface stateComponent {
  reference: null | HTMLElement
}

export interface State extends stateComponent {
  components: stateComponent
  utils: any
  date: any
}

export type Store = State[]
