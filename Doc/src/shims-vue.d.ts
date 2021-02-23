declare module '*.vue' {
  import {ComponentOptions} from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  const value: any
  export default value
}
