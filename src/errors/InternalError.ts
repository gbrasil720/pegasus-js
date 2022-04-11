import chalk from 'chalk'

import { ICONS } from '../utils/icons'

const text = chalk.reset.inverse.bold.red(` ${ICONS.failed} error `)

export class InternalError extends Error {
  constructor(message: string) {
    super(message)

    this.name = text
  }
}
