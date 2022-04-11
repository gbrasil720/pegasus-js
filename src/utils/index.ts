import chalk from 'chalk'

import { NodeLib } from '../types/node/node'
import { ICONS } from './icons'
import { InternalError } from '../errors/InternalError'

export class Utils {
  protected colorizeString({ symbol, message }: NodeLib.Utils.ColorizeString) {
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

  protected verifyFileExtension(dir: string) {
    const $dir = dir.split('/')[dir.split('/').length - 1]
    const language = $dir.split('.')[1]

    if (language !== 'json') {
      throw new InternalError('Not a json file')
    }
  }

  protected validateColor(props: NodeLib.Utils.ValidateColor): boolean {
    let re

    switch (props.colorType) {
      case 'hex':
        re = /^#[0-9A-F]{6}$/i
        break
      case 'rgb':
        re = /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/
        break
      case 'rgba':
        re = /^rgba\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/
        break
      case 'hsl':
        re = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g
        break
      case 'hsla':
        re =
          /[Hh][Ss][Ll][Aa][\(](((([\d]{1,3}|[\d\%]{2,4}|[\d\.]{1,3})[\,]{0,1})[\s]*){4})[\)]/gm
        break
    }

    return re.test(String(props.color).toLocaleLowerCase())
  }

  protected charsGenerator(props: NodeLib.Utils.CharsGenerator) {
    let chars = ''
    let result = ''

    if (props.type === 'all-chars')
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    if (props.type === 'only-numbers') chars = '0123456789'
    if (props.type === 'only-letters')
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    const charactersLength = chars.length

    for (let i = 0; i < props.length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }
}
