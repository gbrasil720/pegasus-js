export namespace NodeLib {
  export namespace LogProvider {
    export interface LogProviderConstructorProps {
      filePath: string
    }

    interface Log {
      logKey: string
      logValue: string
    }

    export interface LogWriteProps {
      logs: NodeLib.Log[]
    }
  }

  export namespace Validators {
    export interface isColorValid {
      colorType: 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla'
      color: string
    }
  }

  export namespace Utils {
    export interface ColorizeString {
      message: string
      symbol: 'info' | 'success' | 'warning' | 'error' | 'debug'
    }

    export interface CharsGenerator {
      length: number
      type: 'all-chars' | 'only-numbers' | 'only-letters'
    }

    export interface ValidateColor {
      colorType: 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla'
      color: string
    }
  }
}
