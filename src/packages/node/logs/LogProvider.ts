import fs from 'node:fs'

import { Utils } from '../../../utils/'

import { NodeLib } from '../../../types/node/node'
import { InternalError } from '../../../errors/InternalError'

export default class LogProvider extends Utils {
  public file: string

  constructor({ filePath }: NodeLib.LogProvider.LogProviderConstructorProps) {
    super()

    this.file = filePath
  }

  write(props: NodeLib.LogProvider.LogWriteProps) {
    this.verifyFileExtension(this.file)

    try {
      const logs = fs.readFileSync(this.file, 'utf8')

      const data = JSON.parse(logs)

      data.logs = [...data.logs, ...props.logs]

      fs.writeFileSync(this.file, JSON.stringify(data, null, 2))
    } catch (err) {
      const data = {
        logs: props.logs,
      }

      fs.writeFileSync(this.file, JSON.stringify(data, null, 2))
    }
  }

  getAllLogs(filePath: string) {
    this.verifyFileExtension(filePath)

    try {
      const logs = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(logs)
    } catch (err) {
      throw new InternalError('Error trying to read a log')
    }
  }
}
