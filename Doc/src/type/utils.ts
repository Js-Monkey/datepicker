import {App, DefineComponent} from "vue";

export interface VueComponent extends DefineComponent<any,any,any>{
  install(app: App): void
}

