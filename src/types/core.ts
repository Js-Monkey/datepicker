import Options from "./options"

export interface Better {
  (el: HTMLInputElement, options?: Options): void
}

export interface BetterInstance {
  (el: HTMLInputElement, options?: Options): Better
}
