class RomanNumerals {
  static decimalToRoman = [
    { decimal: 1000, roman: 'M' },
    { decimal: 900, roman: 'CM' },
    { decimal: 500, roman: 'D' },
    { decimal: 400, roman: 'CD' },
    { decimal: 100, roman: 'C' },
    { decimal: 90, roman: 'XC' },
    { decimal: 50, roman: 'L' },
    { decimal: 40, roman: 'XL' },
    { decimal: 10, roman: 'X' },
    { decimal: 9, roman: 'IX' },
    { decimal: 5, roman: 'V' },
    { decimal: 4, roman: 'IV' },
    { decimal: 1, roman: 'I' },
  ]
  static roman(decimalNum: number): string {
    let result = ''
    this.decimalToRoman.forEach(trans => {
      while (decimalNum >= trans.decimal) {
        result += trans.roman
        decimalNum -= trans.decimal
      }
    })
    return result
  }
}

export default RomanNumerals
