import { getAbsoluteValue } from '../AbsRefatorado'

describe('Testing abs function', () => {
  it('Testing for invalid types', () => {
    expect(() => getAbsoluteValue('234a')).toThrow()
    expect(() => getAbsoluteValue({})).toThrow()
    expect(() => getAbsoluteValue([12, -32, -60])).toThrow()
  })

  it('Testing for number of string type', () => {
    expect(getAbsoluteValue('-345')).toBe(345)
    expect(getAbsoluteValue('-345.455645')).toBe(345.455645)
  })

  it('Testing for a boolean type', () => {
    expect(getAbsoluteValue(true)).toBe(1)
    expect(getAbsoluteValue(false)).toBe(0)
  })

  it('should return an absolute value of a negative number', () => {
    const absOfNegativeNumber = getAbsoluteValue(-34)
    expect(absOfNegativeNumber).toBe(34)
  })

  it('should return an absolute value of a positive number', () => {
    const absOfPositiveNumber = getAbsoluteValue(50)
    expect(absOfPositiveNumber).toBe(50)
  })

  it('should return an absolute value of a zero number', () => {
    const absOfPositiveNumber = getAbsoluteValue(0)
    expect(absOfPositiveNumber).toBe(0)
  })

  it('should return an absolute value of any floating number', () => {
    const absOfPositiveNumber = getAbsoluteValue(-20.2034)
    expect(absOfPositiveNumber).toBe(20.2034)
  })
})
