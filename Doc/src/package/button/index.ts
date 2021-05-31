import {App} from 'vue'
import Button from './src/button.vue'
import {VueComponent} from '../../type/utils'

Button.install = (app: App): void => {
    app.component(Button.name, Button)
}

export default Button as VueComponent
