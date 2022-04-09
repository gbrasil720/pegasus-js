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

    return {
      type: 'info',
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

    return {
      type: 'success',
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

    return {
      type: 'warning',
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

    return {
      type: 'error',
    }
  }

  debug({ message, colored = true }: MethodProps) {
    if (colored) {
      Utils.colorizeString({
        message,
        symbol: 'debug',
      })
    } else {
      console.log(message)
    }

    return {
      type: 'debug',
    }
  }
}
