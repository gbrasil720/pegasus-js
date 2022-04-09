import chalk from 'chalk'
import logSymbols from 'log-symbols'

import { InternalError } from '../errors/InternalError'

interface ColorizeString {
  message: string
  symbol: 'info' | 'success' | 'warning' | 'error' | 'debug'
}

const isWindows = process.platform === 'win32'

const ICONS = {
  failed: isWindows ? '\u00D7' : '\u2715',
  info: '\u24D8',
  success: isWindows ? '\u221A' : '\u2713',
  warning: '\u26A0',
  debug: '\u22c7',
}

export class Utils {
  static colorizeString({ symbol, message }: ColorizeString) {
    let response

    switch (symbol) {
      case 'error':
        response = chalk.reset.inverse.bold.red(` ${ICONS.failed} ${message} `)
        break
      case 'success':
        response = chalk.reset.inverse.bold.green(
          ` ${ICONS.success} ${message} `
        )
        break
      case 'warning':
        response = chalk.reset.inverse.bold.yellow(
          ` ${ICONS.warning} ${message} `
        )
        break
      case 'info':
        response = chalk.reset.inverse.bold.blue(` ${ICONS.info} ${message} `)
        break
      case 'debug':
        const debug = chalk.reset.inverse.bold.hex('#FFA500')

        response = debug(` ${ICONS.debug} ${message} `)
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
