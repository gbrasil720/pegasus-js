import fs from 'fs'

import { Utils } from '../../../utils/'

import { NodeLib } from '../../../types/node/node'
import { InternalError } from '../../../errors/InternalError'

export default class LogProvider {
  private file: string

  constructor(props: NodeLib.LogConstructorProps) {
    this.file = props.filePath
  }

  write(props: NodeLib.LogWriteProps) {
    Utils.verifyFileExtension(this.file)

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
    Utils.verifyFileExtension(filePath)

    try {
      const logs = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(logs)
    } catch (err) {
      throw new InternalError('Error trying to read a log')
    }
  }
}
