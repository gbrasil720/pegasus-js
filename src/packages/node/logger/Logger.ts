import { Utils } from '../../../utils'

interface MethodProps {
  type: 'info' | 'success' | 'warning' | 'error' | 'debug'
  message: string
  colored?: boolean
}

export default class Logger {
  use({ type, message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: type,
      })
    } else {
      console.log(message)
    }

    return {
      type,
    }
  }
}
