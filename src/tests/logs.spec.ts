import { Logger, LogProvider } from '../index'

describe('Should test all log methods', () => {
  const logger = new Logger()
  const logProvider = new LogProvider({ filePath: 'src/tests/jest-test.json' })

  it('Should test info method', () => {
    const spy = jest.spyOn(logger, 'info')

    const iLogger = logger.info({ message: 'info' })

    expect(iLogger.type).toBe('info')
    expect(spy).toHaveBeenCalled()
  })

  it('Should test success method', () => {
    const spy = jest.spyOn(logger, 'success')

    const sLogger = logger.success({ message: 'success' })

    expect(sLogger.type).toBe('success')
    expect(spy).toHaveBeenCalled()
  })

  it('Should test warn method', () => {
    const spy = jest.spyOn(logger, 'warn')

    const wLogger = logger.warn({ message: 'warning' })

    expect(wLogger.type).toBe('warning')
    expect(spy).toHaveBeenCalled()
  })

  it('Should test error method', () => {
    const spy = jest.spyOn(logger, 'error')

    const eLogger = logger.error({ message: 'error' })

    expect(eLogger.type).toBe('error')
    expect(spy).toHaveBeenCalled()
  })

  it('Should test debug method', () => {
    const spy = jest.spyOn(logger, 'debug')

    const dLogger = logger.debug({ message: 'debug' })

    expect(dLogger.type).toBe('debug')
    expect(spy).toHaveBeenCalled()
  })

  it('Should write in file using logProvider', () => {
    const content = logProvider.getAllLogs(logProvider.file)

    if (!content) {
      logProvider.write({
        logs: [
          {
            logKey: 'test log',
            logValue: 'test value'
          },
        ],
      })
    }

    expect(content).not.toBeNull()
  })
})
