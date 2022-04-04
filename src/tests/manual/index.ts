import * as S from '../../index'

const logger = new S.LogProvider({
  filePath: 'src/tests/manual/logs.json',
})

logger.write({
  logs: [
    {
      logKey: 'logKey4',
      logValue: 'logValue4',
    },
  ],
})

const data = logger.getAllLogs('src/tests/manual/logs.json')

const allLogsKey = data.logs.map((x: any) => {
  console.log(x.logKey)
})

console.log(allLogsKey)
