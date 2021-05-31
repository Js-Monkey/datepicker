import {App} from 'vue'
import Input from './src/Input.vue'
import {VueComponent} from "../../type/utils"

Input.install = (app: App): void => {
    app.component(Input.name, Input)
}

export default Input as unknown as VueComponent
