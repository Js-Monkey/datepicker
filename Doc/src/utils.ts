import {_Event} from "../../src/types/event"
import $Msg from 'element-plus/lib/el-message'

let message: any

export function copyText(e: _Event): void {
  const transfer = document.createElement('input')
  document.body.appendChild(transfer)
  transfer.value = e.target.innerText
  transfer.select()
  if (document.execCommand) {
    document.execCommand('copy')
    if (message && message.close) {
      message.close()
    }
    message = $Msg.success('Copy succeeded')
  }
  document.body.removeChild(transfer)
}
