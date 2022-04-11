import { Validators } from '../../index'

describe('Should test all validators methods', () => {
  const validators = new Validators()

  it('Should test isEmail method', () => {
    expect(validators.isEmail('not an email')).toBe(false)
    expect(validators.isEmail('dev.guilhermebrasil@gmail.com')).toBe(true)
  })

  it('Should test isUrl method', () => {
    expect(validators.isUrl('not an url')).toBe(false)
    expect(validators.isUrl('https://dev.guilhermebrasil.com')).toBe(true)
  })

  it('Should test isDate method', () => {
    expect(validators.isDate('not a date')).toBe(false)
    expect(validators.isDate('2020-01-01')).toBe(true)
  })

  describe('Should test all color types', () => {
    it('Should test hex color', () => {
      expect(
        validators.isColorValid({ color: 'not a color', colorType: 'hex' })
      ).toBe(false)
      expect(
        validators.isColorValid({ color: '#ffffff', colorType: 'hex' })
      ).toBe(true)
    })

    it('Should test rgb color', () => {
      expect(
        validators.isColorValid({ color: 'not a color', colorType: 'rgb' })
      ).toBe(false)
      expect(
        validators.isColorValid({
          color: 'rgb(255, 255, 255)',
          colorType: 'rgb',
        })
      ).toBe(true)
    })

    it('Should test rgba color', () => {
      expect(
        validators.isColorValid({ color: 'not a color', colorType: 'rgba' })
      ).toBe(false)
      expect(
        validators.isColorValid({
          color: 'rgba(255, 255, 255, 1)',
          colorType: 'rgba',
        })
      ).toBe(true)
    })

    it('Should test hsl color', () => {
      expect(
        validators.isColorValid({ color: 'not a color', colorType: 'hsl' })
      ).toBe(false)
      expect(
        validators.isColorValid({ color: 'hsl(0, 0%, 100%)', colorType: 'hsl' })
      ).toBe(true)
    })

    it('Should test hsla color', () => {
      expect(
        validators.isColorValid({ color: 'not a color', colorType: 'hsla' })
      ).toBe(false)
      expect(
        validators.isColorValid({
          color: 'hsla(1, 0%, 100%, 0.3)',
          colorType: 'hsla',
        })
      ).toBe(true)
    })
  })
})
