import { InternalError } from '../../../errors/InternalError'
import fs from 'fs'
import path from 'path'

interface LogConstructorProps {
  filePath: string
}

interface Log {
  logKey: string
  logValue: string
}

interface WriteProps {
  logs: Log[]
}

export default class LogProvider {
  private file: string

  constructor(props: LogConstructorProps) {
    this.file = props.filePath
  }

  public write(props: WriteProps) {
    this.verifyFileExtension(this.file)

    const fileProps = JSON.stringify(props, null, 2)

    try {
      fs.writeFileSync(path.join(this.file), fileProps)
    } catch (err) {
      throw new InternalError('erro anotando o log')
    }
  }

  private verifyFileExtension(dir: string) {
    const $dir = dir.split('/')[dir.split('/').length - 1]
    const language = $dir.split('.')[1]

    if (language !== 'json') {
      throw new InternalError('Not json file')
    }
  }
}
