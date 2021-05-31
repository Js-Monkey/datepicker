import {App} from 'vue'
import demo from './src/datepicker-demo.vue'
import {VueComponent} from "../../type/utils"

demo.install = (app: App): void => {
    app.component(<string>demo.name, demo)
}

export default demo as unknown as VueComponent
