import chalk from 'chalk'
import logSymbols from 'log-symbols'

const text = chalk.reset.inverse.bold.red(` ${logSymbols.error} error `)

export class InternalError extends Error {
  constructor(message: string) {
    super(message)

    this.name = text
  }
}
