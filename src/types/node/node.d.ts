export namespace NodeLib {
  export interface LogConstructorProps {
    filePath: string
  }

  interface Log {
    logKey: string
    logValue: string
  }

  export interface WriteProps {
    logs: Log[]
  }
}