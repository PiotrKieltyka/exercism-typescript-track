class Luhn {
  static valid(creditCardNumber: string): boolean {
    if (!/^\d[\d ]+$/.test(creditCardNumber)) return false

    const creditCardNumberArr = creditCardNumber
      .replace(/ /g, '')
      .split('')
      .map(digit => parseInt(digit, 10))

    for (let i = 0; i < creditCardNumberArr.length - 1; i++) {
      if ( i % 2 === creditCardNumberArr.length % 2) {
        creditCardNumberArr[i] *= 2
      }
      if (creditCardNumberArr[i] > 9) {
        creditCardNumberArr[i] -= 9
      }
      creditCardNumberArr[creditCardNumberArr.length - 1] += creditCardNumberArr[i]
    }
    return creditCardNumberArr[creditCardNumberArr.length - 1] % 10 === 0
  }
}

export default Luhn
