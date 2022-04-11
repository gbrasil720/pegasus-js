import { Generators } from '../../index'

describe('Should test all generators methods', () => {
  const generators = new Generators()

  it('Should test generateRandomNumber', () => {
    const response = generators.generateRandomNumber(10)
    const result = Number(response)

    expect(result).toBeGreaterThanOrEqual(0)
    expect(response).toHaveLength(10)
  })

  it('Should test generateRandomString', () => {
    const response = generators.generateRandomString(10)

    expect(response).toHaveLength(10)
  })

  it('Should test generateRandomCharacter', () => {
    const response = generators.generateRandomCharacter(10)

    expect(response).toHaveLength(10)
  })

  it('Should test generateRandomDate', () => {
    const response = generators.generateRandomDate()

    expect(response).toBeInstanceOf(Date)
  })

  it('Should test generateRandomNumberBetween', () => {
    const response = generators.generateRandomNumberBetween(1, 10)

    expect(response).toBeGreaterThanOrEqual(1)
    expect(response).toBeLessThanOrEqual(10)
  })
})
