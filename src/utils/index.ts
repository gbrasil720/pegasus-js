import chalk from 'chalk'
import logSymbols from 'log-symbols'

import { InternalError } from '../errors/InternalError'

interface ColorizeString {
  message: string
  symbol: 'info' | 'success' | 'warning' | 'error'
}

export class Utils {
  static colorizeString({ symbol, message }: ColorizeString) {
    let response

    switch (symbol) {
      case 'error':
        response = chalk.reset.inverse.bold.red(
          ` ${logSymbols.error} ${message} `
        )
        break
      case 'success':
        response = chalk.reset.inverse.bold.green(
          ` ${logSymbols.success} ${message} `
        )
        break
      case 'warning':
        response = chalk.reset.inverse.bold.yellow(
          ` ${logSymbols.warning} ${message} `
        )
        break
      case 'info':
        response = chalk.reset.inverse.bold.blue(
          ` ${logSymbols.info} ${message} `
        )
        break
    }

    console.log(response)
  }

  static verifyFileExtension(dir: string) {
    const $dir = dir.split('/')[dir.split('/').length - 1]
    const language = $dir.split('.')[1]

    if (language !== 'json') {
      throw new InternalError('Not a json file')
    }
  }
}
