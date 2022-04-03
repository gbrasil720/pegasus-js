import { Utils } from '../../../utils'

interface MethodProps {
  message: string
  colored?: boolean
}

export default class Logger {
  info({ message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: 'info',
      })
    } else {
      console.log(message)
    }
  }

  success({ message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: 'success',
      })
    } else {
      console.log(message)
    }
  }

  warn({ message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: 'warning',
      })
    } else {
      console.log(message)
    }
  }

  error({ message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: 'error',
      })
    } else {
      console.log(message)
    }
  }
}
