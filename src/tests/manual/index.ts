import * as S from '../../index'

const myLogProvider = new S.LogProvider({
  filePath: './test.log',
})

function writeFile() {
  myLogProvider.write({
    logs: [
      {
        logKey: 'log 1',
        logValue: 'log 1',
      },
      {
        logKey: 'log 2',
        logValue: 'log 2',
      },
    ],
  })
}

writeFile()
