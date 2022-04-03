import * as S from '../../index'

const logger = new S.Logger()

function test() {
  logger.error({
    message: 'ERRO',
  })

  logger.warn({
    message: 'WARN',
  })

  logger.success({
    message: 'SUCCESS',
  })

  logger.info({
    message: 'INFO',
  })
}

test()
