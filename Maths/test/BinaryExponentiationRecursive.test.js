import { binaryExponentiation } from '../BinaryExponentiationRecursive'

describe('BinaryExponentiationRecursive', () => {
  it('should calculate 2 to the power of 10 correctly', () => {
    expect(binaryExponentiation(2, 10)).toBe(1024)
  })
  it('should calculate 3 to the power of 9 correctly', () => {
    expect(binaryExponentiation(3, 9)).toBe(19683)
  })
  it('should calculate 4 to the power of 4 correctly', () => {
    expect(binaryExponentiation(4, 4)).toBe(256)
  })
  it('should return 1 when n is 0', () => {
    expect(binaryExponentiation(2, 0)).toBe(1)
  })
})
