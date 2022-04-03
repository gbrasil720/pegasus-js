import fs from 'fs'
import path from 'path'

import { Utils } from '../../../utils/'

import { NodeLib } from '../../../types/node/node'
import { InternalError } from '../../../errors/InternalError'

export default class LogProvider {
  private file: string

  constructor(props: NodeLib.LogConstructorProps) {
    this.file = props.filePath
  }

  public write(props: NodeLib.WriteProps) {
    Utils.verifyFileExtension(this.file)

    const fileProps = JSON.stringify(props, null, 2)

    try {
      fs.writeFileSync(path.join(this.file), fileProps)
    } catch (err) {
      throw new InternalError('Error trying to write a log')
    }
  }
}
