import * as S from '../../index'

const generators = new S.Generators()

const response = generators.generateRandomNumber(5)

console.log(response.length)
