import {App} from 'vue'
import card from './src/card.vue'
import {VueComponent} from "../../type/utils"

card.install = (app: App): void => {
    app.component(card.name, card)
}

export default card as unknown as VueComponent
