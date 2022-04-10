import { Utils } from '../../../utils'

export class Generators extends Utils {
  public generateRandomCharacter(length: number): string {
    const response = this.charsGenerator({
      type: 'all-chars',
      length,
    })

    return response
  }

  public generateRandomNumber(length: number): string {
    const response = this.charsGenerator({
      type: 'only-numbers',
      length,
    })

    return response
  }

  public generateRandomString(length: number): string {
    const response = this.charsGenerator({
      type: 'only-letters',
      length,
    })

    return response
  }

  public generateRandomDate(): Date {
    return new Date(
      Math.floor(Math.random() * (new Date().getTime() - new Date(0).getTime()))
    )
  }

  public generateRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
