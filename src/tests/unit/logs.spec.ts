import { Logger, LogProvider } from '../../index'

describe('Should test all log methods', () => {
  const logger = new Logger()
  const logProvider = new LogProvider({ filePath: 'src/tests/jest-test.json' })

  const loggerSpy = jest.spyOn(logger, 'use')

  it('Should test info method', () => {
    const iLogger = logger.use({
      type: 'info',
      message: 'This is a info message',
    })

    expect(iLogger.type).toBe('info')
    expect(loggerSpy).toHaveBeenCalled()
  })

  it('Should test success method', () => {
    const sLogger = logger.use({
      type: 'success',
      message: 'This is a success message',
    })

    expect(sLogger.type).toBe('success')
    expect(loggerSpy).toHaveBeenCalled()
  })

  it('Should test warn method', () => {
    const wLogger = logger.use({
      type: 'warning',
      message: 'This is a warning message',
    })

    expect(wLogger.type).toBe('warning')
    expect(loggerSpy).toHaveBeenCalled()
  })

  it('Should test error method', () => {
    const eLogger = logger.use({
      type: 'error',
      message: 'This is a error message',
    })

    expect(eLogger.type).toBe('error')
    expect(loggerSpy).toHaveBeenCalled()
  })

  it('Should test debug method', () => {
    const dLogger = logger.use({
      type: 'debug',
      message: 'This is a debug message',
    })

    expect(dLogger.type).toBe('debug')
    expect(loggerSpy).toHaveBeenCalled()
  })

  it('Should write in file using logProvider', () => {
    const content = logProvider.getAllLogs(logProvider.file)

    if (!content) {
      logProvider.write({
        logs: [
          {
            logKey: 'test log',
            logValue: 'test value',
          },
        ],
      })
    }

    expect(content).not.toBeNull()
  })
})
