declare module '*.vue' {
  import { App } from 'vue'
  const component: {
    install(app: App): void
  }
  export default component
}
