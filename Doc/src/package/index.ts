import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Icon from './icon'
import demoCard from './demo-card'
import themeCard from './theme-card'
import datepickerDemo from './datepicker-demo'
import cardGroup from './install-card-group'
import Logo from './logo'
import {App} from 'vue'

export function useComponent(app: App): void {
    app.use(Button)
    app.use(ButtonGroup)
    app.use(Icon)
    app.use(Input)
    app.use(demoCard)
    app.use(themeCard)
    app.use(datepickerDemo)
    app.use(cardGroup)
    app.use(Logo)
}
